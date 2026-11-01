<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Support\Facades\Http;
use App\Services\GitHubApiService;
use App\Services\GitHubSyncService;
use App\Models\Project;
use App\Models\SiteSetting;

class GitHubIntegrationTest extends TestCase
{
    protected ?string $originalUsername;
    protected ?string $originalTopic;

    protected function setUp(): void
    {
        parent::setUp();
        $this->originalUsername = SiteSetting::get('github_username');
        $this->originalTopic = SiteSetting::get('github_topic');
    }

    protected function tearDown(): void
    {
        if ($this->originalUsername !== null) {
            SiteSetting::set('github_username', $this->originalUsername);
        }
        if ($this->originalTopic !== null) {
            SiteSetting::set('github_topic', $this->originalTopic);
        }
        parent::tearDown();
    }
    public function test_github_api_connection_check(): void
    {
        Http::fake([
            'api.github.com/users/testuser' => Http::response([
                'login' => 'testuser',
                'name' => 'Test User',
                'public_repos' => 12,
                'avatar_url' => 'https://avatars.githubusercontent.com/u/1',
                'html_url' => 'https://github.com/testuser',
                'followers' => 45,
            ], 200, ['x-ratelimit-remaining' => '4990', 'x-ratelimit-limit' => '5000']),
        ]);

        $api = new GitHubApiService();
        $result = $api->testConnection('testuser');

        $this->assertTrue($result['success']);
        $this->assertEquals(4990, $result['rate_limit_remaining']);
        $this->assertEquals('testuser', $result['data']['login']);
    }

    public function test_github_api_handles_rate_limiting(): void
    {
        Http::fake([
            'api.github.com/users/ratelimited' => Http::response([
                'message' => 'API rate limit exceeded',
            ], 403, ['x-ratelimit-remaining' => '0', 'x-ratelimit-limit' => '60']),
        ]);

        $api = new GitHubApiService();
        $result = $api->testConnection('ratelimited');

        $this->assertFalse($result['success']);
        $this->assertStringContainsString('Rate Limit', $result['message']);
    }

    public function test_github_sync_filters_by_portfolio_topic(): void
    {
        SiteSetting::set('github_username', 'johndoe');
        SiteSetting::set('github_topic', 'portfolio');

        Http::fake([
            'api.github.com/users/johndoe/repos*' => Http::response([
                [
                    'id' => 9991,
                    'name' => 'super-cool-app',
                    'full_name' => 'johndoe/super-cool-app',
                    'description' => 'A wonderful portfolio piece.',
                    'html_url' => 'https://github.com/johndoe/super-cool-app',
                    'homepage' => 'https://coolapp.dev',
                    'language' => 'PHP',
                    'topics' => ['portfolio', 'laravel', 'vue'],
                    'stargazers_count' => 15,
                    'forks_count' => 3,
                    'fork' => false,
                    'private' => false,
                    'created_at' => now()->toIso8601String(),
                    'updated_at' => now()->toIso8601String(),
                    'pushed_at' => now()->toIso8601String(),
                ],
                [
                    'id' => 9992,
                    'name' => 'random-experimental-repo',
                    'full_name' => 'johndoe/random-experimental-repo',
                    'description' => 'Just playing around.',
                    'html_url' => 'https://github.com/johndoe/random-experimental-repo',
                    'homepage' => null,
                    'language' => 'Python',
                    'topics' => ['experiment'],
                    'stargazers_count' => 1,
                    'forks_count' => 0,
                    'fork' => false,
                    'private' => false,
                    'created_at' => now()->toIso8601String(),
                    'updated_at' => now()->toIso8601String(),
                    'pushed_at' => now()->toIso8601String(),
                ]
            ], 200),
        ]);

        $api = new GitHubApiService();
        $sync = new GitHubSyncService($api);
        $result = $sync->sync(triggeredBy: 'test', forceRefresh: true);

        $this->assertTrue($result['success']);
        $this->assertEquals(1, $result['synced_count']);

        // Assert super-cool-app was created and random-experimental-repo was filtered out
        $this->assertDatabaseHas('projects', [
            'github_repo_id' => 9991,
            'github_full_name' => 'johndoe/super-cool-app',
            'github_language' => 'PHP',
        ]);

        $this->assertDatabaseMissing('projects', [
            'github_repo_id' => 9992,
        ]);
    }

    public function test_github_sync_can_ignore_topic_filter(): void
    {
        SiteSetting::set('github_username', 'johndoe');
        SiteSetting::set('github_topic', 'portfolio');

        Http::fake([
            'api.github.com/users/johndoe/repos*' => Http::response([
                [
                    'id' => 8881,
                    'name' => 'no-topic-repo',
                    'full_name' => 'johndoe/no-topic-repo',
                    'description' => 'Repo without any topics.',
                    'html_url' => 'https://github.com/johndoe/no-topic-repo',
                    'homepage' => null,
                    'language' => 'JavaScript',
                    'topics' => [],
                    'stargazers_count' => 5,
                    'forks_count' => 1,
                    'fork' => false,
                    'private' => false,
                    'created_at' => now()->toIso8601String(),
                    'updated_at' => now()->toIso8601String(),
                    'pushed_at' => now()->toIso8601String(),
                ]
            ], 200),
        ]);

        $api = new GitHubApiService();
        $sync = new GitHubSyncService($api);
        
        // Sync with ignoreTopicFilter = true
        $result = $sync->sync(triggeredBy: 'test', forceRefresh: true, ignoreTopicFilter: true);

        $this->assertTrue($result['success']);
        $this->assertEquals(1, $result['synced_count']);
        $this->assertDatabaseHas('projects', [
            'github_repo_id' => 8881,
            'slug' => 'no-topic-repo',
        ]);
    }

    public function test_admin_can_toggle_github_repo_featured(): void
    {
        $user = \App\Models\User::factory()->create();

        $project = Project::create([
            'title' => 'Test Repo App',
            'slug' => 'test-repo-app',
            'is_published' => true,
            'is_featured' => false,
            'source_type' => 'github',
            'github_repo_id' => 7771,
        ]);

        $response = $this->actingAs($user)->post(route('admin.github.toggle-featured'), [
            'repo_id' => 7771,
        ]);

        $response->assertRedirect();
        $this->assertTrue($project->fresh()->is_featured);

        // Toggle again
        $this->actingAs($user)->post(route('admin.github.toggle-featured'), [
            'repo_id' => 7771,
        ]);

        $this->assertFalse($project->fresh()->is_featured);
    }
}


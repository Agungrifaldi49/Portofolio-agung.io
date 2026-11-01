<?php

namespace App\Services;

use App\Models\Project;
use App\Models\Technology;
use App\Models\Category;
use App\Models\GithubSyncLog;
use App\Models\SiteSetting;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class GitHubSyncService
{
    protected GitHubApiService $api;

    public function __construct(GitHubApiService $api)
    {
        $this->api = $api;
    }

    /**
     * Run the synchronization process.
     */
    public function sync(string $triggeredBy = 'manual', bool $forceRefresh = true, bool $ignoreTopicFilter = false): array
    {
        $fetchResult = $this->api->fetchPublicRepositories($forceRefresh);

        if (!$fetchResult['success'] && empty($fetchResult['repos'])) {
            // Log failure
            GithubSyncLog::create([
                'status' => 'failed',
                'repositories_count' => 0,
                'featured_count' => 0,
                'message' => $fetchResult['message'],
                'payload' => null,
                'triggered_by' => $triggeredBy,
            ]);

            return [
                'success' => false,
                'message' => $fetchResult['message'],
                'synced_count' => 0,
            ];
        }

        $repos = $fetchResult['repos'];
        $syncedCount = 0;
        $featuredCount = 0;
        $excludedRepoIds = json_decode(SiteSetting::get('github_excluded_repos', '[]'), true) ?: [];

        // Check if topic is configured or if user wants to import all
        $topicSetting = SiteSetting::get('github_topic', config('services.github.topic', 'portfolio'));
        $shouldFilterTopic = !$ignoreTopicFilter && !empty($topicSetting);

        // Ensure default open source category exists
        $category = Category::firstOrCreate(
            ['slug' => 'open-source'],
            ['name' => 'Open Source', 'type' => 'project', 'description' => 'Public open source projects synchronized from GitHub.']
        );

        DB::beginTransaction();
        try {
            foreach ($repos as $repo) {
                // If excluded in settings, skip
                if (in_array($repo['id'], $excludedRepoIds)) {
                    continue;
                }

                // Check if repo matches target topic
                if ($shouldFilterTopic && !$repo['matches_portfolio_topic']) {
                    continue;
                }

                $project = $this->upsertRepoProject($repo, $category);
                $syncedCount++;
                if ($project->is_featured) {
                    $featuredCount++;
                }
            }

            // Save sync log
            SiteSetting::set('github_last_synced_at', now()->toDateTimeString());

            $topicNotice = $shouldFilterTopic ? "dengan label topic '{$topicSetting}'" : "seluruh repositori publik";
            GithubSyncLog::create([
                'status' => 'success',
                'repositories_count' => $syncedCount,
                'featured_count' => $featuredCount,
                'message' => "Sinkronisasi berhasil: {$syncedCount} repositori ({$topicNotice}) diproses.",
                'payload' => [
                    'source' => $fetchResult['from_cache'] ? 'cache' : 'live_api',
                    'count' => $syncedCount,
                ],
                'triggered_by' => $triggeredBy,
            ]);

            DB::commit();

            return [
                'success' => true,
                'message' => "Berhasil menyinkronkan {$syncedCount} repositori GitHub ({$topicNotice}).",
                'synced_count' => $syncedCount,
                'from_cache' => $fetchResult['from_cache'],
            ];
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('GitHub Sync failed: ' . $e->getMessage());

            GithubSyncLog::create([
                'status' => 'failed',
                'repositories_count' => 0,
                'featured_count' => 0,
                'message' => 'Kesalahan saat menyimpan repositori: ' . $e->getMessage(),
                'payload' => null,
                'triggered_by' => $triggeredBy,
            ]);

            return [
                'success' => false,
                'message' => 'Gagal menyinkronkan: ' . $e->getMessage(),
                'synced_count' => 0,
            ];
        }
    }

    /**
     * Upsert a single repository into the projects table.
     */
    public function upsertRepoProject(array $repo, ?Category $category = null, ?bool $isFeatured = null): Project
    {
        if (!$category) {
            $category = Category::firstOrCreate(
                ['slug' => 'open-source'],
                ['name' => 'Open Source', 'type' => 'project', 'description' => 'Public open source projects synchronized from GitHub.']
            );
        }

        $project = Project::where('github_repo_id', $repo['id'])->first();
        $repoSlug = Str::slug($repo['name']);

        if (!$project) {
            $existingSlug = Project::where('slug', $repoSlug)->first();
            if ($existingSlug && $existingSlug->github_repo_id === null) {
                $project = $existingSlug;
            } else {
                $project = new Project();
                $project->slug = $repoSlug;
                $project->is_published = true;
                // If isFeatured parameter is passed, use it, otherwise default false
                if ($isFeatured !== null) {
                    $project->is_featured = $isFeatured;
                }
            }
        } elseif ($isFeatured !== null) {
            $project->is_featured = $isFeatured;
        }

        $project->title = ucwords(str_replace(['-', '_'], ' ', $repo['name']));
        $project->source_type = 'github';
        $project->github_repo_id = $repo['id'];
        $project->github_full_name = $repo['full_name'];
        $project->repo_url = $repo['html_url'];
        if (!empty($repo['homepage'])) {
            $project->demo_url = $repo['homepage'];
        }
        $project->excerpt = !empty($repo['description']) ? Str::limit($repo['description'], 200) : 'Open source repository pada akun GitHub.';
        if (empty($project->description)) {
            $project->description = !empty($repo['description']) ? $repo['description'] : 'Repositori proyek publik dari GitHub.';
        }
        $project->github_stars = (int) ($repo['stars'] ?? 0);
        $project->github_forks = (int) ($repo['forks'] ?? 0);
        $project->github_language = $repo['language'] ?? null;
        $project->github_topics = $repo['topics'] ?? [];
        $project->github_updated_at = !empty($repo['pushed_at']) ? date('Y-m-d H:i:s', strtotime($repo['pushed_at'])) : null;
        $project->last_synced_at = now();

        if (!$project->category_id) {
            $project->category_id = $category->id;
        }

        $project->save();

        // Attach primary language as technology
        if (!empty($repo['language']) && $repo['language'] !== 'Other') {
            $tech = Technology::firstOrCreate(
                ['name' => $repo['language']],
                ['slug' => Str::slug($repo['language']), 'icon' => 'code']
            );
            $project->technologies()->syncWithoutDetaching([$tech->id]);
        }

        // Attach topics as technologies
        if (!empty($repo['topics'])) {
            foreach ($repo['topics'] as $topicName) {
                if (strtolower($topicName) === 'portfolio') {
                    continue;
                }
                $topicTech = Technology::firstOrCreate(
                    ['name' => ucwords(str_replace('-', ' ', $topicName))],
                    ['slug' => Str::slug($topicName), 'icon' => 'tag']
                );
                $project->technologies()->syncWithoutDetaching([$topicTech->id]);
            }
        }

        return $project;
    }
}


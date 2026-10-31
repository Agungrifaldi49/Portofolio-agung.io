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
    public function sync(string $triggeredBy = 'manual', bool $forceRefresh = true): array
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

                // Check if repo matches target topic (or if no topic is required)
                if (!$repo['matches_portfolio_topic']) {
                    continue;
                }

                // Check existing project by github_repo_id or by slug
                $project = Project::where('github_repo_id', $repo['id'])->first();

                $repoSlug = Str::slug($repo['name']);

                if (!$project) {
                    // Check if a project with identical slug exists
                    $existingSlug = Project::where('slug', $repoSlug)->first();
                    if ($existingSlug && $existingSlug->github_repo_id === null) {
                        $project = $existingSlug;
                    } else {
                        $project = new Project();
                        $project->slug = $repoSlug;
                        $project->is_published = true;
                    }
                }

                $project->title = ucwords(str_replace(['-', '_'], ' ', $repo['name']));
                $project->source_type = 'github';
                $project->github_repo_id = $repo['id'];
                $project->github_full_name = $repo['full_name'];
                $project->repo_url = $repo['html_url'];
                if (!empty($repo['homepage'])) {
                    $project->demo_url = $repo['homepage'];
                }
                $project->excerpt = $repo['description'] ? Str::limit($repo['description'], 200) : 'Open source repository on GitHub.';
                if (empty($project->description)) {
                    $project->description = $repo['description'] ?: 'Open source project hosted on GitHub.';
                }
                $project->github_stars = (int) $repo['stars'];
                $project->github_forks = (int) $repo['forks'];
                $project->github_language = $repo['language'];
                $project->github_topics = $repo['topics'];
                $project->github_updated_at = $repo['pushed_at'] ? date('Y-m-d H:i:s', strtotime($repo['pushed_at'])) : null;
                $project->last_synced_at = now();

                if (!$project->category_id) {
                    $project->category_id = $category->id;
                }

                $project->save();

                // Attach primary language as technology if present
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

                $syncedCount++;
                if ($project->is_featured) {
                    $featuredCount++;
                }
            }

            // Save sync log
            SiteSetting::set('github_last_synced_at', now()->toDateTimeString());

            GithubSyncLog::create([
                'status' => 'success',
                'repositories_count' => $syncedCount,
                'featured_count' => $featuredCount,
                'message' => "Sinkronisasi berhasil: {$syncedCount} repositori diproses ({$fetchResult['message']}).",
                'payload' => [
                    'source' => $fetchResult['from_cache'] ? 'cache' : 'live_api',
                    'count' => $syncedCount,
                ],
                'triggered_by' => $triggeredBy,
            ]);

            DB::commit();

            return [
                'success' => true,
                'message' => "Berhasil menyinkronkan {$syncedCount} repositori GitHub dengan label portfolio.",
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
}


<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use App\Models\SiteSetting;

class GitHubApiService
{
    protected string $baseUrl = 'https://api.github.com';
    protected ?string $username;
    protected ?string $token;
    protected string $topic;
    protected int $cacheTtl;

    public function __construct()
    {
        $this->username = SiteSetting::get('github_username', config('services.github.username'));
        $this->token = config('services.github.token');
        $this->topic = SiteSetting::get('github_topic', config('services.github.topic', 'portfolio'));
        $this->cacheTtl = (int) SiteSetting::get('github_cache_ttl', config('services.github.cache_ttl', 900));
    }

    /**
     * Get headers for GitHub API requests.
     */
    protected function getHeaders(): array
    {
        $headers = [
            'Accept' => 'application/vnd.github+json',
            'User-Agent' => 'Laravel-Portfolio-Application',
            'X-GitHub-Api-Version' => '2022-11-28',
        ];

        if (!empty($this->token)) {
            $headers['Authorization'] = 'Bearer ' . $this->token;
        }

        return $headers;
    }

    /**
     * Test connection and retrieve account summary.
     */
    public function testConnection(?string $username = null): array
    {
        $targetUser = $username ?: $this->username;
        if (empty($targetUser)) {
            return [
                'success' => false,
                'message' => 'Username GitHub belum dikonfigurasi.',
                'data' => null,
            ];
        }

        try {
            $response = Http::withHeaders($this->getHeaders())
                ->timeout(10)
                ->get("{$this->baseUrl}/users/{$targetUser}");

            if ($response->successful()) {
                $user = $response->json();
                return [
                    'success' => true,
                    'message' => 'Terhubung ke GitHub API.',
                    'rate_limit_remaining' => (int) $response->header('x-ratelimit-remaining'),
                    'rate_limit_limit' => (int) $response->header('x-ratelimit-limit'),
                    'data' => [
                        'login' => $user['login'] ?? $targetUser,
                        'name' => $user['name'] ?? $targetUser,
                        'avatar_url' => $user['avatar_url'] ?? null,
                        'html_url' => $user['html_url'] ?? "https://github.com/{$targetUser}",
                        'public_repos' => $user['public_repos'] ?? 0,
                        'followers' => $user['followers'] ?? 0,
                    ]
                ];
            }

            if ($response->status() === 403 && $response->header('x-ratelimit-remaining') === '0') {
                return [
                    'success' => false,
                    'message' => 'GitHub API Rate Limit tercapai. Tambahkan GITHUB_TOKEN di .env untuk kuota 5,000 req/jam.',
                    'rate_limit_remaining' => 0,
                    'data' => null,
                ];
            }

            return [
                'success' => false,
                'message' => 'GitHub API HTTP ' . $response->status() . ': ' . ($response->json('message') ?? 'User tidak ditemukan'),
                'data' => null,
            ];
        } catch (\Exception $e) {
            Log::warning('GitHub API connection error: ' . $e->getMessage());
            return [
                'success' => false,
                'message' => 'Koneksi ke GitHub API gagal: ' . $e->getMessage(),
                'data' => null,
            ];
        }
    }

    /**
     * Fetch repositories from GitHub with caching and topic filtering.
     */
    public function fetchPublicRepositories(bool $forceRefresh = false): array
    {
        if (empty($this->username)) {
            return [
                'success' => false,
                'message' => 'Username GitHub belum diisi.',
                'from_cache' => false,
                'repos' => [],
            ];
        }

        $cacheKey = "github_repos_{$this->username}";

        if (!$forceRefresh && Cache::has($cacheKey)) {
            return [
                'success' => true,
                'message' => 'Data diambil dari cache.',
                'from_cache' => true,
                'repos' => Cache::get($cacheKey),
            ];
        }

        try {
            $response = Http::withHeaders($this->getHeaders())
                ->timeout(12)
                ->get("{$this->baseUrl}/users/{$this->username}/repos", [
                    'type' => 'public',
                    'sort' => 'updated',
                    'per_page' => 100,
                ]);

            if ($response->successful()) {
                $rawRepos = $response->json();
                $processed = [];

                foreach ($rawRepos as $item) {
                    // Ignore forks unless desired
                    $topics = $item['topics'] ?? [];
                    
                    // Filter: check if topic matches or if topic filter is empty
                    $matchesTopic = empty($this->topic) || in_array(strtolower($this->topic), array_map('strtolower', $topics));

                    $processed[] = [
                        'id' => $item['id'],
                        'name' => $item['name'],
                        'full_name' => $item['full_name'],
                        'description' => $item['description'] ?? '',
                        'html_url' => $item['html_url'],
                        'homepage' => $item['homepage'] ?? '',
                        'language' => $item['language'] ?? 'Other',
                        'topics' => $topics,
                        'stars' => $item['stargazers_count'] ?? 0,
                        'forks' => $item['forks_count'] ?? 0,
                        'is_fork' => $item['fork'] ?? false,
                        'is_private' => $item['private'] ?? false,
                        'created_at' => $item['created_at'] ?? null,
                        'updated_at' => $item['updated_at'] ?? null,
                        'pushed_at' => $item['pushed_at'] ?? null,
                        'matches_portfolio_topic' => $matchesTopic,
                    ];
                }

                Cache::put($cacheKey, $processed, now()->addSeconds($this->cacheTtl));

                return [
                    'success' => true,
                    'message' => 'Berhasil mengambil ' . count($processed) . ' repositori dari GitHub.',
                    'from_cache' => false,
                    'repos' => $processed,
                ];
            }

            // Fallback to cache if request failed but cache exists
            if (Cache::has($cacheKey)) {
                return [
                    'success' => false,
                    'message' => 'Gagal memanggil GitHub API, menggunakan data cache terakhir: ' . ($response->json('message') ?? 'Status ' . $response->status()),
                    'from_cache' => true,
                    'repos' => Cache::get($cacheKey),
                ];
            }

            return [
                'success' => false,
                'message' => 'Gagal mengambil data dari GitHub: ' . ($response->json('message') ?? 'Status ' . $response->status()),
                'from_cache' => false,
                'repos' => [],
            ];
        } catch (\Exception $e) {
            Log::error('GitHub API error: ' . $e->getMessage());

            if (Cache::has($cacheKey)) {
                return [
                    'success' => false,
                    'message' => 'Koneksi bermasalah (' . $e->getMessage() . '), menggunakan data cache terakhir.',
                    'from_cache' => true,
                    'repos' => Cache::get($cacheKey),
                ];
            }

            return [
                'success' => false,
                'message' => 'Koneksi ke GitHub API gagal: ' . $e->getMessage(),
                'from_cache' => false,
                'repos' => [],
            ];
        }
    }
}


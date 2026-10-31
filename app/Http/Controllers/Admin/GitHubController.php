<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use App\Models\GithubSyncLog;
use App\Models\Project;
use App\Services\GitHubApiService;
use App\Services\GitHubSyncService;
use Illuminate\Http\Request;

class GitHubController extends Controller
{
    public function index(GitHubApiService $api)
    {
        $username = SiteSetting::get('github_username', config('services.github.username'));
        $topic = SiteSetting::get('github_topic', config('services.github.topic', 'portfolio'));
        $cacheTtl = SiteSetting::get('github_cache_ttl', config('services.github.cache_ttl', 900));
        $lastSynced = SiteSetting::get('github_last_synced_at');
        
        $excludedRepoIds = json_decode(SiteSetting::get('github_excluded_repos', '[]'), true) ?: [];

        // Check connection & fetch cached/live repos
        $connectionTest = $api->testConnection($username);
        $reposData = $username ? $api->fetchPublicRepositories() : ['success' => false, 'repos' => []];

        $syncLogs = GithubSyncLog::orderBy('created_at', 'desc')->take(10)->get();

        $syncedProjects = Project::where('source_type', 'github')->get();

        return view('admin.github.index', compact(
            'username',
            'topic',
            'cacheTtl',
            'lastSynced',
            'connectionTest',
            'reposData',
            'syncLogs',
            'syncedProjects',
            'excludedRepoIds'
        ));
    }

    public function updateSettings(Request $request)
    {
        $validated = $request->validate([
            'github_username' => ['nullable', 'string', 'max:100'],
            'github_topic' => ['nullable', 'string', 'max:50'],
            'github_cache_ttl' => ['required', 'integer', 'min:60', 'max:86400'],
        ]);

        SiteSetting::set('github_username', trim($validated['github_username'] ?? ''));
        SiteSetting::set('github_topic', trim($validated['github_topic'] ?? ''));
        SiteSetting::set('github_cache_ttl', (string) $validated['github_cache_ttl']);

        return redirect()->route('admin.github.index')->with('success', 'Konfigurasi GitHub berhasil disimpan.');
    }

    public function triggerSync(GitHubSyncService $syncService)
    {
        $result = $syncService->sync(triggeredBy: 'manual_admin', forceRefresh: true);

        if ($result['success']) {
            return redirect()->route('admin.github.index')->with('success', $result['message']);
        }

        return redirect()->route('admin.github.index')->with('error', $result['message']);
    }

    public function toggleExclude(Request $request)
    {
        $repoId = (int) $request->input('repo_id');
        $excluded = json_decode(SiteSetting::get('github_excluded_repos', '[]'), true) ?: [];

        if (in_array($repoId, $excluded)) {
            $excluded = array_values(array_diff($excluded, [$repoId]));
            $message = 'Repositori telah diaktifkan kembali untuk sinkronisasi.';
        } else {
            $excluded[] = $repoId;
            $message = 'Repositori telah dikecualikan dari sinkronisasi.';
        }

        SiteSetting::set('github_excluded_repos', json_encode($excluded));

        return back()->with('success', $message);
    }
}


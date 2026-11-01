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

        $syncedProjects = Project::where('source_type', 'github')->get()->keyBy('github_repo_id');

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
        $result = $syncService->sync(triggeredBy: 'manual_admin', forceRefresh: true, ignoreTopicFilter: false);

        if ($result['success']) {
            return redirect()->route('admin.github.index')->with('success', $result['message']);
        }

        return redirect()->route('admin.github.index')->with('error', $result['message']);
    }

    public function syncAll(GitHubSyncService $syncService)
    {
        $result = $syncService->sync(triggeredBy: 'manual_admin', forceRefresh: true, ignoreTopicFilter: true);

        if ($result['success']) {
            return redirect()->route('admin.github.index')->with('success', $result['message']);
        }

        return redirect()->route('admin.github.index')->with('error', $result['message']);
    }

    public function toggleFeatured(Request $request, GitHubApiService $api, GitHubSyncService $syncService)
    {
        $repoId = (int) $request->input('repo_id');
        $project = Project::where('github_repo_id', $repoId)->first();

        if ($project) {
            $project->is_featured = !$project->is_featured;
            $project->save();
            $status = $project->is_featured ? 'dijadikan Proyek Unggulan (tampil di Beranda)' : 'dihapus dari Proyek Unggulan';
            return back()->with('success', "Proyek '{$project->title}' berhasil {$status}.");
        }

        // Jika belum diimpor ke database, tarik data repo dan simpan langsung sebagai unggulan
        $reposData = $api->fetchPublicRepositories(forceRefresh: false);
        $repo = collect($reposData['repos'] ?? [])->firstWhere('id', $repoId);

        if (!$repo) {
            return back()->with('error', 'Data repositori tidak ditemukan.');
        }

        $project = $syncService->upsertRepoProject($repo, isFeatured: true);
        return back()->with('success', "Repositori '{$project->title}' berhasil diimpor dan langsung dijadikan Proyek Unggulan!");
    }

    public function importRepo(Request $request, GitHubApiService $api, GitHubSyncService $syncService)
    {
        $repoId = (int) $request->input('repo_id');
        $isFeatured = $request->boolean('is_featured', false);

        $reposData = $api->fetchPublicRepositories(forceRefresh: false);
        $repo = collect($reposData['repos'] ?? [])->firstWhere('id', $repoId);

        if (!$repo) {
            return back()->with('error', 'Data repositori tidak ditemukan.');
        }

        $project = $syncService->upsertRepoProject($repo, isFeatured: $isFeatured);
        $msg = $isFeatured 
            ? "Repositori '{$project->title}' berhasil diimpor dan dijadikan Proyek Unggulan."
            : "Repositori '{$project->title}' berhasil diimpor ke daftar proyek.";

        return back()->with('success', $msg);
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


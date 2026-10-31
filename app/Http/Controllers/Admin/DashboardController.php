<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Article;
use App\Models\Certificate;
use App\Models\Skill;
use App\Models\ContactMessage;
use App\Models\GithubSyncLog;
use App\Models\SiteSetting;
use App\Services\GitHubApiService;

class DashboardController extends Controller
{
    public function index(GitHubApiService $gitHubApi)
    {
        $stats = [
            'total_projects' => Project::count(),
            'featured_projects' => Project::where('is_featured', true)->count(),
            'github_projects' => Project::where('source_type', 'github')->count(),
            'total_articles' => Article::count(),
            'published_articles' => Article::where('status', 'published')->count(),
            'total_certificates' => Certificate::count(),
            'total_skills' => Skill::count(),
            'unread_messages' => ContactMessage::where('is_read', false)->count(),
        ];

        $recentProjects = Project::latest()->take(5)->get();
        $recentMessages = ContactMessage::latest()->take(5)->get();
        $latestSync = GithubSyncLog::latest()->first();
        $lastSyncTime = SiteSetting::get('github_last_synced_at');

        return view('admin.dashboard', compact(
            'stats',
            'recentProjects',
            'recentMessages',
            'latestSync',
            'lastSyncTime'
        ));
    }
}


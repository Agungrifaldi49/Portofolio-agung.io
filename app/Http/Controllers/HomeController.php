<?php

namespace App\Http\Controllers;

use App\Models\ProfileSetting;
use App\Models\Project;
use App\Models\Skill;
use App\Models\Experience;
use App\Models\Article;
use App\Models\SiteSetting;
use App\Services\GitHubApiService;

class HomeController extends Controller
{
    public function index(GitHubApiService $githubApi)
    {
        $profile = ProfileSetting::current();
        
        $featuredProjects = Project::with(['category', 'technologies'])
            ->featured()
            ->take(4)
            ->get();

        // If no featured projects yet, get latest published
        if ($featuredProjects->isEmpty()) {
            $featuredProjects = Project::with(['category', 'technologies'])
                ->published()
                ->take(4)
                ->get();
        }

        $coreSkills = Skill::published()
            ->orderBy('sort_order', 'asc')
            ->take(8)
            ->get();

        $recentExperiences = Experience::published()
            ->take(3)
            ->get();

        $recentArticles = Article::with('category')
            ->published()
            ->take(3)
            ->get();

        // GitHub live / cached stats
        $githubStats = [
            'username' => SiteSetting::get('github_username', config('services.github.username')),
            'repos_count' => Project::where('source_type', 'github')->count(),
            'total_stars' => (int) Project::sum('github_stars'),
            'total_forks' => (int) Project::sum('github_forks'),
            'languages' => Project::whereNotNull('github_language')
                ->distinct('github_language')
                ->pluck('github_language')
                ->filter()
                ->values()
                ->all(),
            'last_synced' => SiteSetting::get('github_last_synced_at'),
        ];

        return view('pages.home', compact(
            'profile',
            'featuredProjects',
            'coreSkills',
            'recentExperiences',
            'recentArticles',
            'githubStats'
        ));
    }
}


<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Category;
use App\Models\Technology;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index(Request $request)
    {
        $query = Project::with(['category', 'technologies'])->published();

        // Search by keyword
        if ($search = $request->input('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('excerpt', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%")
                  ->orWhere('github_language', 'like', "%{$search}%");
            });
        }

        // Filter by category slug
        if ($categorySlug = $request->input('category')) {
            $query->whereHas('category', function ($q) use ($categorySlug) {
                $q->where('slug', $categorySlug);
            });
        }

        // Filter by technology slug
        if ($techSlug = $request->input('tech')) {
            $query->whereHas('technologies', function ($q) use ($techSlug) {
                $q->where('slug', $techSlug);
            });
        }

        // Filter featured only
        if ($request->boolean('featured')) {
            $query->where('is_featured', true);
        }

        // Source filter: github or manual
        if ($source = $request->input('source')) {
            if (in_array($source, ['manual', 'github'])) {
                $query->where('source_type', $source);
            }
        }

        $projects = $query->paginate(9)->withQueryString();

        $categories = Category::where('type', 'project')->has('projects')->get();
        $technologies = Technology::has('projects')->orderBy('name')->get();

        return view('pages.projects.index', compact(
            'projects',
            'categories',
            'technologies'
        ));
    }

    public function show(string $slug)
    {
        $project = Project::with(['category', 'technologies'])
            ->where('slug', $slug)
            ->published()
            ->firstOrFail();

        // Related projects (same category or shared technologies)
        $relatedProjects = Project::with(['category', 'technologies'])
            ->published()
            ->where('id', '!=', $project->id)
            ->where(function ($q) use ($project) {
                if ($project->category_id) {
                    $q->where('category_id', $project->category_id);
                }
            })
            ->take(3)
            ->get();

        return view('pages.projects.show', compact('project', 'relatedProjects'));
    }
}


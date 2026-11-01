<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Category;
use App\Models\Technology;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    public function index(Request $request)
    {
        $query = Project::with(['category', 'technologies'])->orderBy('sort_order', 'asc')->orderBy('created_at', 'desc');

        if ($search = $request->input('search')) {
            $query->where('title', 'like', "%{$search}%")
                  ->orWhere('github_language', 'like', "%{$search}%");
        }

        if ($source = $request->input('source')) {
            $query->where('source_type', $source);
        }

        $projects = $query->paginate(15)->withQueryString();

        return view('admin.projects.index', compact('projects'));
    }

    public function create()
    {
        $categories = Category::where('type', 'project')->get();
        $technologies = Technology::orderBy('name')->get();

        return view('admin.projects.create', compact('categories', 'technologies'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'category_id' => ['nullable', 'exists:categories,id'],
            'excerpt' => ['nullable', 'string', 'max:500'],
            'description' => ['nullable', 'string'],
            'problem_statement' => ['nullable', 'string'],
            'project_goal' => ['nullable', 'string'],
            'challenges' => ['nullable', 'string'],
            'solutions' => ['nullable', 'string'],
            'demo_url' => ['nullable', 'url', 'max:255'],
            'repo_url' => ['nullable', 'url', 'max:255'],
            'documentation_url' => ['nullable', 'url', 'max:255'],
            'sort_order' => ['integer'],
            'is_featured' => ['boolean'],
            'is_published' => ['boolean'],
            'technologies' => ['nullable', 'array'],
            'technologies.*' => ['exists:technologies,id'],
            'new_technologies' => ['nullable', 'string'],
            'key_features' => ['nullable', 'string'],
            'cover_image' => ['nullable', 'image', 'mimes:jpeg,png,jpg,webp', 'max:3072'],
        ]);

        $project = new Project();
        $project->fill([
            'title' => $validated['title'],
            'category_id' => $validated['category_id'] ?? null,
            'excerpt' => $validated['excerpt'] ?? null,
            'description' => $validated['description'] ?? null,
            'problem_statement' => $validated['problem_statement'] ?? null,
            'project_goal' => $validated['project_goal'] ?? null,
            'challenges' => $validated['challenges'] ?? null,
            'solutions' => $validated['solutions'] ?? null,
            'demo_url' => $validated['demo_url'] ?? null,
            'repo_url' => $validated['repo_url'] ?? null,
            'documentation_url' => $validated['documentation_url'] ?? null,
            'sort_order' => (int) ($validated['sort_order'] ?? 0),
            'is_featured' => $request->boolean('is_featured'),
            'is_published' => $request->boolean('is_published'),
            'source_type' => 'manual',
        ]);

        if (!empty($validated['key_features'])) {
            $features = array_values(array_filter(array_map('trim', explode("\n", $validated['key_features']))));
            $project->key_features = $features;
        }

        if ($request->hasFile('cover_image')) {
            $project->cover_image = $request->file('cover_image')->store('projects', 'public');
        }

        $project->save();

        // Sync technologies
        $techIds = $request->input('technologies', []);
        if (!empty($validated['new_technologies'])) {
            $newTechNames = array_filter(array_map('trim', explode(',', $validated['new_technologies'])));
            foreach ($newTechNames as $techName) {
                $tech = Technology::firstOrCreate(
                    ['name' => $techName],
                    ['slug' => Str::slug($techName), 'icon' => 'code']
                );
                $techIds[] = $tech->id;
            }
        }
        $project->technologies()->sync(array_unique($techIds));

        return redirect()->route('admin.projects.index')->with('success', 'Proyek berhasil ditambahkan.');
    }

    public function edit(Project $project)
    {
        $categories = Category::where('type', 'project')->get();
        $technologies = Technology::orderBy('name')->get();

        return view('admin.projects.edit', compact('project', 'categories', 'technologies'));
    }

    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255', 'unique:projects,slug,' . $project->id],
            'category_id' => ['nullable', 'exists:categories,id'],
            'excerpt' => ['nullable', 'string', 'max:500'],
            'description' => ['nullable', 'string'],
            'problem_statement' => ['nullable', 'string'],
            'project_goal' => ['nullable', 'string'],
            'challenges' => ['nullable', 'string'],
            'solutions' => ['nullable', 'string'],
            'demo_url' => ['nullable', 'url', 'max:255'],
            'repo_url' => ['nullable', 'url', 'max:255'],
            'documentation_url' => ['nullable', 'url', 'max:255'],
            'sort_order' => ['integer'],
            'is_featured' => ['boolean'],
            'is_published' => ['boolean'],
            'technologies' => ['nullable', 'array'],
            'technologies.*' => ['exists:technologies,id'],
            'new_technologies' => ['nullable', 'string'],
            'key_features' => ['nullable', 'string'],
            'cover_image' => ['nullable', 'image', 'mimes:jpeg,png,jpg,webp', 'max:3072'],
            'cover_image_url' => ['nullable', 'url', 'max:500'],
            'delete_cover_image' => ['nullable', 'boolean'],
        ]);

        if ($request->boolean('delete_cover_image')) {
            if ($project->cover_image && !str_starts_with($project->cover_image, 'http') && Storage::disk('public')->exists($project->cover_image)) {
                Storage::disk('public')->delete($project->cover_image);
            }
            $project->cover_image = null;
        } elseif ($request->hasFile('cover_image')) {
            if ($project->cover_image && !str_starts_with($project->cover_image, 'http') && Storage::disk('public')->exists($project->cover_image)) {
                Storage::disk('public')->delete($project->cover_image);
            }
            $project->cover_image = $request->file('cover_image')->store('projects', 'public');
        } elseif ($request->filled('cover_image_url')) {
            $project->cover_image = $request->input('cover_image_url');
        }

        if (!empty($validated['slug'])) {
            $project->slug = Str::slug($validated['slug']);
        }

        $project->fill([
            'title' => $validated['title'],
            'category_id' => $validated['category_id'] ?? null,
            'excerpt' => $validated['excerpt'] ?? null,
            'description' => $validated['description'] ?? null,
            'problem_statement' => $validated['problem_statement'] ?? null,
            'project_goal' => $validated['project_goal'] ?? null,
            'challenges' => $validated['challenges'] ?? null,
            'solutions' => $validated['solutions'] ?? null,
            'demo_url' => $validated['demo_url'] ?? null,
            'repo_url' => $validated['repo_url'] ?? null,
            'documentation_url' => $validated['documentation_url'] ?? null,
            'sort_order' => (int) ($validated['sort_order'] ?? 0),
            'is_featured' => $request->boolean('is_featured'),
            'is_published' => $request->boolean('is_published'),
        ]);

        if (isset($validated['key_features'])) {
            $features = array_values(array_filter(array_map('trim', explode("\n", $validated['key_features']))));
            $project->key_features = $features;
        }

        $project->save();

        $techIds = $request->input('technologies', []);
        if (!empty($validated['new_technologies'])) {
            $newTechNames = array_filter(array_map('trim', explode(',', $validated['new_technologies'])));
            foreach ($newTechNames as $techName) {
                $tech = Technology::firstOrCreate(
                    ['name' => $techName],
                    ['slug' => Str::slug($techName), 'icon' => 'code']
                );
                $techIds[] = $tech->id;
            }
        }
        $project->technologies()->sync(array_unique($techIds));

        return redirect()->route('admin.projects.index')->with('success', 'Proyek berhasil diperbarui.');
    }

    public function toggleFeatured(Project $project)
    {
        $project->is_featured = !$project->is_featured;
        $project->save();

        return back()->with('success', 'Status unggulan proyek berhasil diubah.');
    }

    public function togglePublish(Project $project)
    {
        $project->is_published = !$project->is_published;
        $project->save();

        return back()->with('success', 'Status publikasi proyek berhasil diubah.');
    }

    public function destroy(Project $project)
    {
        if ($project->cover_image && Storage::disk('public')->exists($project->cover_image)) {
            Storage::disk('public')->delete($project->cover_image);
        }
        $project->technologies()->detach();
        $project->delete();

        return redirect()->route('admin.projects.index')->with('success', 'Proyek berhasil dihapus.');
    }
}


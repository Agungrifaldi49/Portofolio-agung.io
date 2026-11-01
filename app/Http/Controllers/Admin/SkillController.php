<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    public function index()
    {
        $skills = Skill::orderBy('category')->orderBy('sort_order', 'asc')->get();
        return view('admin.skills.index', compact('skills'));
    }

    public function create()
    {
        $categories = [
            'Frontend Development',
            'Backend Development',
            'Database',
            'Framework',
            'Tools & Technologies',
        ];
        return view('admin.skills.create', compact('categories'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'category' => ['required', 'string', 'max:100'],
            'icon' => ['nullable', 'string', 'max:50'],
            'level_label' => ['nullable', 'string', 'max:100'],
            'description' => ['nullable', 'string', 'max:500'],
            'sort_order' => ['integer'],
            'is_published' => ['boolean'],
        ]);

        Skill::create([
            'name' => $validated['name'],
            'category' => $validated['category'],
            'icon' => $validated['icon'] ?? 'code',
            'level_label' => $validated['level_label'] ?? null,
            'description' => $validated['description'] ?? null,
            'sort_order' => (int) ($validated['sort_order'] ?? 0),
            'is_published' => $request->boolean('is_published', true),
        ]);

        return redirect()->route('admin.skills.index')->with('success', 'Keterampilan berhasil ditambahkan.');
    }

    public function edit(Skill $skill)
    {
        $categories = [
            'Frontend Development',
            'Backend Development',
            'Database',
            'Framework',
            'Tools & Technologies',
        ];
        return view('admin.skills.edit', compact('skill', 'categories'));
    }

    public function update(Request $request, Skill $skill)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'category' => ['required', 'string', 'max:100'],
            'icon' => ['nullable', 'string', 'max:50'],
            'level_label' => ['nullable', 'string', 'max:100'],
            'description' => ['nullable', 'string', 'max:500'],
            'sort_order' => ['integer'],
            'is_published' => ['boolean'],
        ]);

        $skill->update([
            'name' => $validated['name'],
            'category' => $validated['category'],
            'icon' => $validated['icon'] ?? 'code',
            'level_label' => $validated['level_label'] ?? null,
            'description' => $validated['description'] ?? null,
            'sort_order' => (int) ($validated['sort_order'] ?? 0),
            'is_published' => $request->boolean('is_published'),
        ]);

        return redirect()->route('admin.skills.index')->with('success', 'Keterampilan berhasil diperbarui.');
    }

    public function destroy(Skill $skill)
    {
        $skill->delete();
        return redirect()->route('admin.skills.index')->with('success', 'Keterampilan berhasil dihapus.');
    }
}


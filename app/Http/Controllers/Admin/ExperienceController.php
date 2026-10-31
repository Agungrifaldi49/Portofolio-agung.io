<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Experience;
use Illuminate\Http\Request;

class ExperienceController extends Controller
{
    public function index()
    {
        $experiences = Experience::orderBy('sort_order', 'asc')->orderBy('created_at', 'desc')->get();
        return view('admin.experiences.index', compact('experiences'));
    }

    public function create()
    {
        return view('admin.experiences.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'role' => ['required', 'string', 'max:150'],
            'company' => ['required', 'string', 'max:150'],
            'company_url' => ['nullable', 'url', 'max:255'],
            'location' => ['nullable', 'string', 'max:100'],
            'period' => ['required', 'string', 'max:100'],
            'is_current' => ['boolean'],
            'description' => ['nullable', 'string'],
            'key_responsibilities' => ['nullable', 'string'],
            'sort_order' => ['integer'],
            'is_published' => ['boolean'],
        ]);

        $responsibilities = null;
        if (!empty($validated['key_responsibilities'])) {
            $responsibilities = array_values(array_filter(array_map('trim', explode("\n", $validated['key_responsibilities']))));
        }

        Experience::create([
            'role' => $validated['role'],
            'company' => $validated['company'],
            'company_url' => $validated['company_url'],
            'location' => $validated['location'],
            'period' => $validated['period'],
            'is_current' => $request->boolean('is_current'),
            'description' => $validated['description'],
            'key_responsibilities' => $responsibilities,
            'sort_order' => (int) ($validated['sort_order'] ?? 0),
            'is_published' => $request->boolean('is_published', true),
        ]);

        return redirect()->route('admin.experiences.index')->with('success', 'Riwayat pengalaman berhasil ditambahkan.');
    }

    public function edit(Experience $experience)
    {
        return view('admin.experiences.edit', compact('experience'));
    }

    public function update(Request $request, Experience $experience)
    {
        $validated = $request->validate([
            'role' => ['required', 'string', 'max:150'],
            'company' => ['required', 'string', 'max:150'],
            'company_url' => ['nullable', 'url', 'max:255'],
            'location' => ['nullable', 'string', 'max:100'],
            'period' => ['required', 'string', 'max:100'],
            'is_current' => ['boolean'],
            'description' => ['nullable', 'string'],
            'key_responsibilities' => ['nullable', 'string'],
            'sort_order' => ['integer'],
            'is_published' => ['boolean'],
        ]);

        $responsibilities = null;
        if (!empty($validated['key_responsibilities'])) {
            $responsibilities = array_values(array_filter(array_map('trim', explode("\n", $validated['key_responsibilities']))));
        }

        $experience->update([
            'role' => $validated['role'],
            'company' => $validated['company'],
            'company_url' => $validated['company_url'],
            'location' => $validated['location'],
            'period' => $validated['period'],
            'is_current' => $request->boolean('is_current'),
            'description' => $validated['description'],
            'key_responsibilities' => $responsibilities,
            'sort_order' => (int) ($validated['sort_order'] ?? 0),
            'is_published' => $request->boolean('is_published'),
        ]);

        return redirect()->route('admin.experiences.index')->with('success', 'Pengalaman berhasil diperbarui.');
    }

    public function destroy(Experience $experience)
    {
        $experience->delete();
        return redirect()->route('admin.experiences.index')->with('success', 'Pengalaman berhasil dihapus.');
    }
}


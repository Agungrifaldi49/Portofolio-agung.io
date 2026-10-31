<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Education;
use Illuminate\Http\Request;

class EducationController extends Controller
{
    public function index()
    {
        $educations = Education::orderBy('sort_order', 'asc')->get();
        return view('admin.educations.index', compact('educations'));
    }

    public function create()
    {
        return view('admin.educations.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'degree' => ['required', 'string', 'max:150'],
            'institution' => ['required', 'string', 'max:150'],
            'field_of_study' => ['nullable', 'string', 'max:150'],
            'period' => ['required', 'string', 'max:100'],
            'description' => ['nullable', 'string'],
            'sort_order' => ['integer'],
            'is_published' => ['boolean'],
        ]);

        Education::create([
            'degree' => $validated['degree'],
            'institution' => $validated['institution'],
            'field_of_study' => $validated['field_of_study'],
            'period' => $validated['period'],
            'description' => $validated['description'],
            'sort_order' => (int) ($validated['sort_order'] ?? 0),
            'is_published' => $request->boolean('is_published', true),
        ]);

        return redirect()->route('admin.educations.index')->with('success', 'Riwayat pendidikan berhasil ditambahkan.');
    }

    public function edit(Education $education)
    {
        return view('admin.educations.edit', compact('education'));
    }

    public function update(Request $request, Education $education)
    {
        $validated = $request->validate([
            'degree' => ['required', 'string', 'max:150'],
            'institution' => ['required', 'string', 'max:150'],
            'field_of_study' => ['nullable', 'string', 'max:150'],
            'period' => ['required', 'string', 'max:100'],
            'description' => ['nullable', 'string'],
            'sort_order' => ['integer'],
            'is_published' => ['boolean'],
        ]);

        $education->update([
            'degree' => $validated['degree'],
            'institution' => $validated['institution'],
            'field_of_study' => $validated['field_of_study'],
            'period' => $validated['period'],
            'description' => $validated['description'],
            'sort_order' => (int) ($validated['sort_order'] ?? 0),
            'is_published' => $request->boolean('is_published'),
        ]);

        return redirect()->route('admin.educations.index')->with('success', 'Riwayat pendidikan berhasil diperbarui.');
    }

    public function destroy(Education $education)
    {
        $education->delete();
        return redirect()->route('admin.educations.index')->with('success', 'Riwayat pendidikan berhasil dihapus.');
    }
}


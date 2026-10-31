<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Certificate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CertificateController extends Controller
{
    public function index()
    {
        $certificates = Certificate::orderBy('sort_order', 'asc')->orderBy('issue_date', 'desc')->get();
        return view('admin.certificates.index', compact('certificates'));
    }

    public function create()
    {
        return view('admin.certificates.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:200'],
            'issuer' => ['required', 'string', 'max:150'],
            'issue_date' => ['nullable', 'date'],
            'credential_id' => ['nullable', 'string', 'max:100'],
            'credential_url' => ['nullable', 'url', 'max:255'],
            'category' => ['required', 'string', 'max:100'],
            'description' => ['nullable', 'string'],
            'sort_order' => ['integer'],
            'is_published' => ['boolean'],
            'image' => ['nullable', 'image', 'mimes:jpeg,png,jpg,webp', 'max:3072'],
        ]);

        $cert = new Certificate();
        $cert->fill([
            'title' => $validated['title'],
            'issuer' => $validated['issuer'],
            'issue_date' => $validated['issue_date'],
            'credential_id' => $validated['credential_id'],
            'credential_url' => $validated['credential_url'],
            'category' => $validated['category'],
            'description' => $validated['description'],
            'sort_order' => (int) ($validated['sort_order'] ?? 0),
            'is_published' => $request->boolean('is_published', true),
        ]);

        if ($request->hasFile('image')) {
            $cert->image_path = $request->file('image')->store('certificates', 'public');
        }

        $cert->save();

        return redirect()->route('admin.certificates.index')->with('success', 'Sertifikat berhasil ditambahkan.');
    }

    public function edit(Certificate $certificate)
    {
        return view('admin.certificates.edit', compact('certificate'));
    }

    public function update(Request $request, Certificate $certificate)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:200'],
            'issuer' => ['required', 'string', 'max:150'],
            'issue_date' => ['nullable', 'date'],
            'credential_id' => ['nullable', 'string', 'max:100'],
            'credential_url' => ['nullable', 'url', 'max:255'],
            'category' => ['required', 'string', 'max:100'],
            'description' => ['nullable', 'string'],
            'sort_order' => ['integer'],
            'is_published' => ['boolean'],
            'image' => ['nullable', 'image', 'mimes:jpeg,png,jpg,webp', 'max:3072'],
        ]);

        if ($request->hasFile('image')) {
            if ($certificate->image_path && Storage::disk('public')->exists($certificate->image_path)) {
                Storage::disk('public')->delete($certificate->image_path);
            }
            $certificate->image_path = $request->file('image')->store('certificates', 'public');
        }

        $certificate->update([
            'title' => $validated['title'],
            'issuer' => $validated['issuer'],
            'issue_date' => $validated['issue_date'],
            'credential_id' => $validated['credential_id'],
            'credential_url' => $validated['credential_url'],
            'category' => $validated['category'],
            'description' => $validated['description'],
            'sort_order' => (int) ($validated['sort_order'] ?? 0),
            'is_published' => $request->boolean('is_published'),
        ]);

        return redirect()->route('admin.certificates.index')->with('success', 'Sertifikat berhasil diperbarui.');
    }

    public function destroy(Certificate $certificate)
    {
        if ($certificate->image_path && Storage::disk('public')->exists($certificate->image_path)) {
            Storage::disk('public')->delete($certificate->image_path);
        }
        $certificate->delete();

        return redirect()->route('admin.certificates.index')->with('success', 'Sertifikat berhasil dihapus.');
    }
}


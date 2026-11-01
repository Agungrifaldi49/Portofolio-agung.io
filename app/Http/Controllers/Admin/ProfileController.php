<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProfileSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    public function edit()
    {
        $profile = ProfileSetting::current();
        return view('admin.profile.edit', compact('profile'));
    }

    public function update(Request $request)
    {
        $profile = ProfileSetting::current();

        $validated = $request->validate([
            'full_name' => ['required', 'string', 'max:150'],
            'title' => ['required', 'string', 'max:200'],
            'hero_badge' => ['nullable', 'string', 'max:200'],
            'bio' => ['nullable', 'string', 'max:500'],
            'about_text' => ['nullable', 'string'],
            'contact_email' => ['nullable', 'email', 'max:150'],
            'location' => ['nullable', 'string', 'max:150'],
            'github_url' => ['nullable', 'url', 'max:255'],
            'linkedin_url' => ['nullable', 'url', 'max:255'],
            'twitter_url' => ['nullable', 'url', 'max:255'],
            'website_url' => ['nullable', 'url', 'max:255'],
            'hero_titles' => ['nullable', 'string'],
            'available_for_hire' => ['boolean'],
            'avatar' => ['nullable', 'image', 'mimes:jpeg,png,jpg,webp', 'max:2048'],
            'resume' => ['nullable', 'file', 'mimes:pdf', 'max:5120'],
        ]);

        if ($request->hasFile('avatar')) {
            if ($profile->avatar_path && Storage::disk('public')->exists($profile->avatar_path)) {
                Storage::disk('public')->delete($profile->avatar_path);
            }
            $avatarPath = $request->file('avatar')->store('avatars', 'public');
            $profile->avatar_path = $avatarPath;
        }

        if ($request->hasFile('resume')) {
            if ($profile->resume_path && Storage::disk('public')->exists($profile->resume_path)) {
                Storage::disk('public')->delete($profile->resume_path);
            }
            $resumePath = $request->file('resume')->store('documents', 'public');
            $profile->resume_path = $resumePath;
        }

        // Parse hero titles from comma or newline
        $heroTitles = [];
        if (!empty($validated['hero_titles'])) {
            $titlesArray = preg_split('/[,\n]+/', $validated['hero_titles']);
            $heroTitles = array_values(array_filter(array_map('trim', $titlesArray)));
        }

        $profile->fill([
            'full_name' => $validated['full_name'],
            'title' => $validated['title'],
            'hero_badge' => $validated['hero_badge'] ?? '',
            'bio' => $validated['bio'] ?? null,
            'about_text' => $validated['about_text'] ?? null,
            'contact_email' => $validated['contact_email'] ?? null,
            'location' => $validated['location'] ?? null,
            'github_url' => $validated['github_url'] ?? null,
            'linkedin_url' => $validated['linkedin_url'] ?? null,
            'twitter_url' => $validated['twitter_url'] ?? null,
            'website_url' => $validated['website_url'] ?? null,
            'hero_titles' => $heroTitles,
            'available_for_hire' => $request->boolean('available_for_hire'),
        ]);

        $profile->save();

        return redirect()->route('admin.profile.edit')->with('success', 'Profil profesional berhasil diperbarui.');
    }

    public function deleteResume()
    {
        $profile = ProfileSetting::current();
        if ($profile->resume_path && Storage::disk('public')->exists($profile->resume_path)) {
            Storage::disk('public')->delete($profile->resume_path);
            $profile->resume_path = null;
            $profile->save();
        }

        return back()->with('success', 'File CV berhasil dihapus.');
    }
}


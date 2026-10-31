<?php

namespace App\Http\Controllers;

use App\Models\ProfileSetting;
use App\Models\Education;
use App\Models\Experience;
use Illuminate\Support\Facades\Storage;

class AboutController extends Controller
{
    public function index()
    {
        $profile = ProfileSetting::current();
        $educations = Education::published()->get();
        $experiences = Experience::published()->get();

        return view('pages.about', compact('profile', 'educations', 'experiences'));
    }

    public function downloadCv()
    {
        $profile = ProfileSetting::current();

        if (empty($profile->resume_path) || !Storage::disk('public')->exists($profile->resume_path)) {
            return back()->with('error', 'File CV belum diunggah oleh administrator.');
        }

        return Storage::disk('public')->download(
            $profile->resume_path,
            'CV_' . str_replace(' ', '_', $profile->full_name) . '.pdf'
        );
    }
}


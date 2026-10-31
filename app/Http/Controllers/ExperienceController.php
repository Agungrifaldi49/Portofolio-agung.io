<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use App\Models\Education;

class ExperienceController extends Controller
{
    public function index()
    {
        $experiences = Experience::published()->get();
        $educations = Education::published()->get();

        return view('pages.experience', compact('experiences', 'educations'));
    }
}


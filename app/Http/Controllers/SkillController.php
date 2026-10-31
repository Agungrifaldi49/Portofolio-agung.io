<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use App\Models\ProfileSetting;

class SkillController extends Controller
{
    public function index()
    {
        $profile = ProfileSetting::current();
        
        $skillsByCategory = Skill::published()
            ->get()
            ->groupBy('category');

        return view('pages.skills', compact('profile', 'skillsByCategory'));
    }
}


<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use Illuminate\Http\Request;

class SiteSettingController extends Controller
{
    public function index()
    {
        $siteTitle = SiteSetting::get('site_title', config('app.name'));
        $siteDescription = SiteSetting::get('site_description', '');
        $seoKeywords = SiteSetting::get('seo_keywords', '');
        $googleAnalyticsId = SiteSetting::get('ga_id', '');

        return view('admin.settings.index', compact(
            'siteTitle',
            'siteDescription',
            'seoKeywords',
            'googleAnalyticsId'
        ));
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'site_title' => ['required', 'string', 'max:150'],
            'site_description' => ['nullable', 'string', 'max:300'],
            'seo_keywords' => ['nullable', 'string', 'max:255'],
            'ga_id' => ['nullable', 'string', 'max:50'],
        ]);

        SiteSetting::set('site_title', $validated['site_title']);
        SiteSetting::set('site_description', $validated['site_description'] ?? '');
        SiteSetting::set('seo_keywords', $validated['seo_keywords'] ?? '');
        SiteSetting::set('ga_id', $validated['ga_id'] ?? '');

        return redirect()->route('admin.settings.index')->with('success', 'Pengaturan website berhasil disimpan.');
    }
}


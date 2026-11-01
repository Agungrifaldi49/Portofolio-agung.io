@extends('layouts.admin')

@section('title', 'Pengaturan Website & SEO')
@section('header_title', 'Pengaturan Global Website')

@section('content')
<div class="w-full space-y-6">
    <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
        <div>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">Pengaturan Global & SEO</h2>
            <p class="text-xs text-slate-500">Konfigurasi judul default web, meta description mesin pencari, dan analytics.</p>
        </div>

        <form method="POST" action="{{ route('admin.settings.update') }}" class="space-y-4">
            @csrf
            @method('PUT')

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Judul Website Default (Meta Title) *</label>
                <input type="text" name="site_title" value="{{ old('site_title', $siteTitle) }}" required class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Deskripsi Website (Meta Description)</label>
                <textarea name="site_description" rows="3" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">{{ old('site_description', $siteDescription) }}</textarea>
                <p class="text-[11px] text-slate-400">Deskripsi ini digunakan oleh mesin pencari Google dan card pratinjau Open Graph media sosial.</p>
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Kata Kunci SEO (Keywords - Pisahkan koma)</label>
                <input type="text" name="seo_keywords" value="{{ old('seo_keywords', $seoKeywords) }}" placeholder="developer portfolio, laravel engineer, software architect" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Google Analytics ID / Tag ID (Opsional)</label>
                <input type="text" name="ga_id" value="{{ old('ga_id', $googleAnalyticsId) }}" placeholder="G-XXXXXXXXXX" class="w-full px-4 py-2 text-sm font-mono rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
            </div>

            <div class="pt-4">
                <button type="submit" class="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all">
                    Simpan Pengaturan
                </button>
            </div>
        </form>
    </div>
</div>
@endsection


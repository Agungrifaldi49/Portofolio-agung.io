@extends('layouts.admin')

@section('title', 'Kelola Profil & Resume')
@section('header_title', 'Pengaturan Profil Pengembang')

@section('content')
<div class="max-w-4xl space-y-8">
    <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
        <div>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">Informasi Identitas & Kontak</h2>
            <p class="text-xs text-slate-500">Data ini ditampilkan pada halaman Home, About, dan footer website.</p>
        </div>

        <form method="POST" action="{{ route('admin.profile.update') }}" enctype="multipart/form-data" class="space-y-6">
            @csrf
            @method('PUT')

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Nama Lengkap *</label>
                    <input type="text" name="full_name" value="{{ old('full_name', $profile->full_name) }}" required class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Profesi / Jabatan Profesional *</label>
                    <input type="text" name="title" value="{{ old('title', $profile->title) }}" required class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Teks Badge Hero</label>
                    <input type="text" name="hero_badge" value="{{ old('hero_badge', $profile->hero_badge) }}" placeholder="cth. Open for High-Impact Projects" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Lokasi / Domisili</label>
                    <input type="text" name="location" value="{{ old('location', $profile->location) }}" placeholder="cth. Jakarta, Indonesia" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Bio Singkat (Hero & Footer)</label>
                <textarea name="bio" rows="2" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">{{ old('bio', $profile->bio) }}</textarea>
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Teks Lengkap Biografi (Halaman About)</label>
                <textarea name="about_text" rows="5" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">{{ old('about_text', $profile->about_text) }}</textarea>
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Animasi Teks Peran Hero (Pisahkan dengan koma)</label>
                <input type="text" name="hero_titles" value="{{ old('hero_titles', is_array($profile->hero_titles) ? implode(', ', $profile->hero_titles) : $profile->hero_titles) }}" placeholder="Full-Stack Developer, Laravel Architect, API Specialist" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Email Kontak Publik</label>
                    <input type="email" name="contact_email" value="{{ old('contact_email', $profile->contact_email) }}" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">GitHub Profile URL</label>
                    <input type="url" name="github_url" value="{{ old('github_url', $profile->github_url) }}" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">LinkedIn URL</label>
                    <input type="url" name="linkedin_url" value="{{ old('linkedin_url', $profile->linkedin_url) }}" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Twitter / X URL</label>
                    <input type="url" name="twitter_url" value="{{ old('twitter_url', $profile->twitter_url) }}" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>
            </div>

            <!-- Uploads: Avatar & CV -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <!-- Avatar Upload -->
                <div class="space-y-2">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Foto Profil / Avatar (PNG, JPG, WebP max 2MB)</label>
                    @if($profile->avatar_path)
                        <div class="flex items-center space-x-3 pb-2">
                            <img src="{{ asset('storage/' . $profile->avatar_path) }}" alt="Avatar" class="w-12 h-12 rounded-xl object-cover border border-slate-300 dark:border-slate-700">
                            <span class="text-xs text-slate-400">Foto aktif saat ini</span>
                        </div>
                    @endif
                    <input type="file" name="avatar" accept="image/*" class="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 dark:file:bg-indigo-950 file:text-indigo-600 dark:file:text-indigo-400 hover:file:bg-indigo-100">
                </div>

                <!-- CV Upload -->
                <div class="space-y-2">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Curriculum Vitae (PDF max 5MB)</label>
                    @if($profile->resume_path)
                        <div class="flex items-center justify-between pb-2 text-xs">
                            <span class="text-emerald-500 font-medium flex items-center space-x-1">
                                <i data-lucide="check" class="w-4 h-4"></i>
                                <span>File CV terunggah</span>
                            </span>
                            <button type="submit" form="delete-resume-form" class="text-rose-500 hover:underline">Hapus CV</button>
                        </div>
                    @endif
                    <input type="file" name="resume" accept="application/pdf" class="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 dark:file:bg-indigo-950 file:text-indigo-600 dark:file:text-indigo-400 hover:file:bg-indigo-100">
                </div>
            </div>

            <!-- Status Ketersediaan -->
            <div class="pt-2">
                <label class="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300 cursor-pointer">
                    <input type="checkbox" name="available_for_hire" value="1" {{ $profile->available_for_hire ? 'checked' : '' }} class="rounded border-slate-700 text-indigo-600 focus:ring-indigo-500">
                    <span class="font-semibold">Tampilkan status "Available for hire" pada header & hero</span>
                </label>
            </div>

            <div class="pt-4">
                <button type="submit" class="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-md transition-all">
                    Simpan Perubahan Profil
                </button>
            </div>
        </form>

        <form id="delete-resume-form" method="POST" action="{{ route('admin.profile.resume.delete') }}" class="hidden">
            @csrf
            @method('DELETE')
        </form>
    </div>
</div>
@endsection


@extends('layouts.admin')

@section('title', 'Kelola Profil & Resume')
@section('header_title', 'Pengaturan Profil Pengembang')

@section('content')
<div class="w-full max-w-7xl mx-auto space-y-6">
    
    <!-- Page Header & Action Bar -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200/80 dark:border-slate-800/80">
        <div>
            <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Pengaturan Profil Pengembang</h1>
            <p class="text-xs text-slate-500 mt-1">Kelola identitas profesional, biografi, kontak, foto profil, dan berkas CV Anda.</p>
        </div>
        <div class="flex items-center space-x-3">
            <a href="{{ route('home') }}" target="_blank" class="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-600 transition-all flex items-center space-x-1.5">
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                <span>Lihat Website Publik</span>
            </a>
            <button type="submit" form="profile-form" class="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center space-x-2">
                <i data-lucide="save" class="w-4 h-4"></i>
                <span>Simpan Perubahan</span>
            </button>
        </div>
    </div>

    <!-- Main Two-Column Layout -->
    <form id="profile-form" method="POST" action="{{ route('admin.profile.update') }}" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <!-- Left Column: Main Form Data (8 Columns) -->
            <div class="lg:col-span-8 space-y-6">
                
                <!-- Card 1: Identitas & Posisi Profesional -->
                <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
                    <div class="flex items-center space-x-2.5 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                        <div class="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
                            <i data-lucide="user" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <h2 class="text-base font-bold text-slate-900 dark:text-white">Identitas & Peran Profesional</h2>
                            <p class="text-[11px] text-slate-500">Nama lengkap, profesi, dan teks hero yang tampil di bagian paling atas website.</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Nama Lengkap *</label>
                            <input type="text" name="full_name" value="{{ old('full_name', $profile->full_name) }}" required class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">
                        </div>

                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Profesi / Jabatan Profesional *</label>
                            <input type="text" name="title" value="{{ old('title', $profile->title) }}" required class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Teks Badge Hero</label>
                            <input type="text" name="hero_badge" value="{{ old('hero_badge', $profile->hero_badge) }}" placeholder="cth. Available for High-Impact Projects" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">
                        </div>

                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Lokasi / Domisili</label>
                            <input type="text" name="location" value="{{ old('location', $profile->location) }}" placeholder="cth. Jakarta, Indonesia" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Website Pribadi / Domain URL</label>
                            <input type="url" name="website_url" value="{{ old('website_url', $profile->website_url) }}" placeholder="https://domainanda.com" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">
                        </div>

                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Status Ketersediaan</label>
                            <div class="pt-2">
                                <label class="inline-flex items-center space-x-2.5 cursor-pointer">
                                    <input type="checkbox" name="available_for_hire" value="1" {{ $profile->available_for_hire ? 'checked' : '' }} class="w-4 h-4 rounded border-slate-700 text-indigo-600 focus:ring-indigo-500">
                                    <span class="text-xs font-medium text-slate-700 dark:text-slate-300">Tampilkan status "Available for hire"</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-1.5">
                        <div class="flex items-center justify-between">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Animasi Teks Peran Hero (Ganti bergantian otomatis)</label>
                            <span class="text-[10px] text-slate-400 font-mono">Pisahkan dengan koma</span>
                        </div>
                        <input type="text" name="hero_titles" value="{{ old('hero_titles', is_array($profile->hero_titles) ? implode(', ', $profile->hero_titles) : $profile->hero_titles) }}" placeholder="Full-Stack Developer, Laravel Architect, API Specialist" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">
                    </div>
                </div>

                <!-- Card 2: Biografi & Narasi Pengembang -->
                <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
                    <div class="flex items-center space-x-2.5 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                        <div class="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
                            <i data-lucide="file-text" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <h2 class="text-base font-bold text-slate-900 dark:text-white">Biografi & Narasi Pengembang</h2>
                            <p class="text-[11px] text-slate-500">Ringkasan singkat untuk hero dan narasi lengkap untuk halaman About Me.</p>
                        </div>
                    </div>

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Bio Singkat (Ditampilkan pada Hero & Footer)</label>
                        <textarea name="bio" rows="3" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">{{ old('bio', $profile->bio) }}</textarea>
                    </div>

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Biografi Lengkap (Ditampilkan pada Halaman About Me)</label>
                        <textarea name="about_text" rows="6" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 leading-relaxed">{{ old('about_text', $profile->about_text) }}</textarea>
                    </div>
                </div>

                <!-- Card 3: Tautan Kontak & Media Sosial -->
                <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
                    <div class="flex items-center space-x-2.5 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                        <div class="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold">
                            <i data-lucide="share-2" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <h2 class="text-base font-bold text-slate-900 dark:text-white">Tautan Kontak & Media Sosial</h2>
                            <p class="text-[11px] text-slate-500">Tautan publik agar calon klien atau rekan pengembang dapat terhubung dengan Anda.</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
                                <i data-lucide="mail" class="w-3.5 h-3.5 text-slate-400"></i>
                                <span>Email Kontak Publik</span>
                            </label>
                            <input type="email" name="contact_email" value="{{ old('contact_email', $profile->contact_email) }}" placeholder="nama@domain.com" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">
                        </div>

                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
                                <i data-lucide="github" class="w-3.5 h-3.5 text-slate-400"></i>
                                <span>GitHub Profile URL</span>
                            </label>
                            <input type="url" name="github_url" value="{{ old('github_url', $profile->github_url) }}" placeholder="https://github.com/username" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
                                <i data-lucide="linkedin" class="w-3.5 h-3.5 text-indigo-400"></i>
                                <span>LinkedIn URL</span>
                            </label>
                            <input type="url" name="linkedin_url" value="{{ old('linkedin_url', $profile->linkedin_url) }}" placeholder="https://linkedin.com/in/username" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">
                        </div>

                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
                                <i data-lucide="twitter" class="w-3.5 h-3.5 text-cyan-400"></i>
                                <span>Twitter / X URL</span>
                            </label>
                            <input type="url" name="twitter_url" value="{{ old('twitter_url', $profile->twitter_url) }}" placeholder="https://x.com/username" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">
                        </div>
                    </div>
                </div>

            </div>

            <!-- Right Column: Avatar, Resume & Save Action (4 Columns) -->
            <div class="lg:col-span-4 space-y-6">
                
                <!-- Card 4: Foto Profil / Avatar -->
                <div class="glass-card p-6 rounded-3xl space-y-4">
                    <div class="flex items-center space-x-2.5 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                        <div class="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
                            <i data-lucide="image" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-slate-900 dark:text-white">Foto Profil / Avatar</h3>
                            <p class="text-[10px] text-slate-500">PNG, JPG, WebP (Maks. 2MB)</p>
                        </div>
                    </div>

                    <!-- Live Avatar Preview Container -->
                    <div class="flex flex-col items-center justify-center py-2 space-y-3">
                        <div class="relative w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-xl shadow-indigo-500/20">
                            @if($profile->avatar_path)
                                <img src="{{ asset('storage/' . $profile->avatar_path) }}" alt="{{ $profile->full_name }}" class="w-full h-full object-cover rounded-full border-2 border-slate-900">
                            @else
                                <div class="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-slate-400 font-mono text-xs">
                                    No Photo
                                </div>
                            @endif
                        </div>
                        <span class="text-[11px] font-mono text-slate-400">Pratinjau Foto Profil Aktif</span>
                    </div>

                    <div class="space-y-1.5 pt-2">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Unggah Foto Baru</label>
                        <input type="file" name="avatar" accept="image/*" class="w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-3.5 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 dark:file:bg-indigo-950 file:text-indigo-600 dark:file:text-indigo-400 hover:file:bg-indigo-100 cursor-pointer">
                    </div>
                </div>

                <!-- Card 5: Berkas CV (Resume) -->
                <div class="glass-card p-6 rounded-3xl space-y-4">
                    <div class="flex items-center space-x-2.5 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                        <div class="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                            <i data-lucide="file-check" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-slate-900 dark:text-white">Curriculum Vitae (PDF)</h3>
                            <p class="text-[10px] text-slate-500">Maks. 5MB dalam format PDF</p>
                        </div>
                    </div>

                    @if($profile->resume_path)
                        <div class="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-xs">
                            <div class="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 font-semibold truncate max-w-[180px]">
                                <i data-lucide="check-circle" class="w-4 h-4 flex-shrink-0"></i>
                                <span class="truncate">Berkas CV Tersedia</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <a href="{{ route('about.cv') }}" target="_blank" class="text-indigo-500 hover:underline font-semibold" title="Buka CV">Lihat</a>
                                <button type="button" onclick="if(confirm('Hapus file CV?')) document.getElementById('delete-resume-form').submit();" class="text-rose-500 hover:underline">Hapus</button>
                            </div>
                        </div>
                    @else
                        <div class="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-500">
                            Belum ada file CV yang diunggah.
                        </div>
                    @endif

                    <div class="space-y-1.5 pt-1">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Unggah Dokumen CV Baru</label>
                        <input type="file" name="resume" accept="application/pdf" class="w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-3.5 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 dark:file:bg-emerald-950 file:text-emerald-600 dark:file:text-emerald-400 hover:file:bg-emerald-100 cursor-pointer">
                    </div>
                </div>

                <!-- Card 6: Sticky Action Box -->
                <div class="glass-card p-6 rounded-3xl space-y-4">
                    <button type="submit" class="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center space-x-2">
                        <i data-lucide="check" class="w-4 h-4"></i>
                        <span>Simpan Perubahan Profil</span>
                    </button>
                    <p class="text-[11px] text-center text-slate-400">
                        Perubahan akan langsung diperbarui di seluruh halaman website publik.
                    </p>
                </div>

            </div>

        </div>
    </form>

    <form id="delete-resume-form" method="POST" action="{{ route('admin.profile.resume.delete') }}" class="hidden">
        @csrf
        @method('DELETE')
    </form>
</div>
@endsection

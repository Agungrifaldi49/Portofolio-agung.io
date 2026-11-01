@extends('layouts.admin')

@section('title', 'Kelola Profil & Resume')
@section('header_title', 'Pengaturan Profil Pengembang')

@section('content')
<div class="w-full space-y-6">
    
    <!-- Top Header & Action -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200/80 dark:border-slate-800/80">
        <div>
            <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Pengaturan Profil Pengembang</h1>
            <p class="text-xs text-slate-500 mt-1">Data identitas profesional, biografi, kontak, foto profil, dan berkas CV Anda.</p>
        </div>
        <div class="flex items-center space-x-3">
            <a href="{{ route('home') }}" target="_blank" class="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-600 transition-all flex items-center space-x-1.5">
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                <span>Lihat Website Publik</span>
            </a>
            <button type="submit" form="profile-form" class="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all flex items-center space-x-2">
                <i data-lucide="save" class="w-4 h-4"></i>
                <span>Simpan Perubahan</span>
            </button>
        </div>
    </div>

    <!-- Main Form Card (Full-Width & Clean Structured Layout) -->
    <div class="glass-card p-6 sm:p-10 rounded-3xl space-y-8">
        <div>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">Informasi Identitas & Kontak</h2>
            <p class="text-xs text-slate-500 mt-0.5">Data ini ditampilkan pada halaman Home, About, dan footer website secara otomatis.</p>
        </div>

        <form id="profile-form" method="POST" action="{{ route('admin.profile.update') }}" enctype="multipart/form-data" class="space-y-8">
            @csrf
            @method('PUT')

            <!-- Section 1: Identitas Pokok & Posisi -->
            <div class="space-y-4">
                <div class="text-xs font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400 flex items-center space-x-2">
                    <i data-lucide="user" class="w-4 h-4"></i>
                    <span>1. Identitas Pokok & Posisi</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Nama Lengkap *</label>
                        <input type="text" name="full_name" value="{{ old('full_name', $profile->full_name) }}" required class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    </div>

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Profesi / Jabatan Profesional *</label>
                        <input type="text" name="title" value="{{ old('title', $profile->title) }}" required class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Teks Badge Hero</label>
                        <input type="text" name="hero_badge" value="{{ old('hero_badge', $profile->hero_badge) }}" placeholder="cth. Open for High-Impact Projects" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    </div>

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Lokasi / Domisili</label>
                        <input type="text" name="location" value="{{ old('location', $profile->location) }}" placeholder="cth. Jakarta, Indonesia" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Website Pribadi / Domain URL</label>
                        <input type="url" name="website_url" value="{{ old('website_url', $profile->website_url) }}" placeholder="https://domainanda.com" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    </div>

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Animasi Teks Peran Hero (Pisahkan dengan koma)</label>
                        <input type="text" name="hero_titles" value="{{ old('hero_titles', is_array($profile->hero_titles) ? implode(', ', $profile->hero_titles) : $profile->hero_titles) }}" placeholder="Full-Stack Developer, Laravel Architect, API Specialist" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    </div>
                </div>
            </div>

            <!-- Section 2: Biografi & Deskripsi -->
            <div class="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div class="text-xs font-bold uppercase tracking-wider text-purple-500 dark:text-purple-400 flex items-center space-x-2">
                    <i data-lucide="file-text" class="w-4 h-4"></i>
                    <span>2. Biografi & Deskripsi Profesional</span>
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Bio Singkat (Ditampilkan pada Hero & Footer)</label>
                    <textarea name="bio" rows="2" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">{{ old('bio', $profile->bio) }}</textarea>
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Teks Lengkap Biografi (Ditampilkan pada Halaman About)</label>
                    <textarea name="about_text" rows="5" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 leading-relaxed">{{ old('about_text', $profile->about_text) }}</textarea>
                </div>
            </div>

            <!-- Section 3: Tautan Kontak & Media Sosial -->
            <div class="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div class="text-xs font-bold uppercase tracking-wider text-cyan-500 dark:text-cyan-400 flex items-center space-x-2">
                    <i data-lucide="share-2" class="w-4 h-4"></i>
                    <span>3. Tautan Kontak & Media Sosial</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
                            <i data-lucide="mail" class="w-3.5 h-3.5 text-slate-400"></i>
                            <span>Email Kontak Publik</span>
                        </label>
                        <input type="email" name="contact_email" value="{{ old('contact_email', $profile->contact_email) }}" placeholder="nama@domain.com" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    </div>

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
                            <i data-lucide="github" class="w-3.5 h-3.5 text-slate-400"></i>
                            <span>GitHub Profile URL</span>
                        </label>
                        <input type="url" name="github_url" value="{{ old('github_url', $profile->github_url) }}" placeholder="https://github.com/username" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
                            <i data-lucide="linkedin" class="w-3.5 h-3.5 text-indigo-400"></i>
                            <span>LinkedIn URL</span>
                        </label>
                        <input type="url" name="linkedin_url" value="{{ old('linkedin_url', $profile->linkedin_url) }}" placeholder="https://linkedin.com/in/username" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    </div>

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
                            <i data-lucide="twitter" class="w-3.5 h-3.5 text-cyan-400"></i>
                            <span>Twitter / X URL</span>
                        </label>
                        <input type="url" name="twitter_url" value="{{ old('twitter_url', $profile->twitter_url) }}" placeholder="https://x.com/username" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    </div>
                </div>
            </div>

            <!-- Section 4: Foto Profil & Dokumen CV -->
            <div class="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div class="text-xs font-bold uppercase tracking-wider text-amber-500 dark:text-amber-400 flex items-center space-x-2">
                    <i data-lucide="image" class="w-4 h-4"></i>
                    <span>4. Berkas Media (Foto Profil & Curriculum Vitae)</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Foto Profil -->
                    <div class="p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-3">
                        <div class="flex items-center justify-between">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Foto Profil / Avatar (PNG, JPG, WebP max 2MB)</label>
                            @if($profile->avatar_path)
                                <button type="button" onclick="if(confirm('Hapus foto profil?')) document.getElementById('delete-avatar-form').submit();" class="text-xs text-rose-500 hover:underline">Hapus Foto</button>
                            @endif
                        </div>
                        
                        <div class="flex items-center space-x-4">
                            <div class="w-16 h-16 rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 flex-shrink-0 relative group">
                                <img id="avatar-preview-img" 
                                     src="{{ $profile->avatar_url ? $profile->avatar_url . '?v=' . optional($profile->updated_at)->timestamp : '' }}" 
                                     alt="Avatar" 
                                     class="w-full h-full object-cover {{ $profile->avatar_path ? '' : 'hidden' }}"
                                     onerror="this.classList.add('hidden'); document.getElementById('avatar-no-img').classList.remove('hidden');"
                                >
                                <div id="avatar-no-img" class="w-full h-full flex items-center justify-center text-[10px] text-slate-500 font-mono {{ $profile->avatar_path ? 'hidden' : '' }}">
                                    No Image
                                </div>
                            </div>
                            <div class="flex-grow space-y-1">
                                <input type="file" id="avatar-input" name="avatar" accept="image/*" class="w-full text-xs text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 dark:file:bg-indigo-950 file:text-indigo-600 dark:file:text-indigo-400 hover:file:bg-indigo-100 cursor-pointer">
                                <span class="text-[11px] text-slate-400 block">Pilih berkas gambar untuk mengganti foto aktif. Pratinjau langsung akan tampil.</span>
                            </div>
                        </div>
                    </div>

                    <!-- Curriculum Vitae -->
                    <div class="p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-3">
                        <div class="flex items-center justify-between">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Curriculum Vitae (PDF max 5MB)</label>
                            @if($profile->resume_path)
                                <button type="button" onclick="if(confirm('Hapus file CV?')) document.getElementById('delete-resume-form').submit();" class="text-xs text-rose-500 hover:underline">Hapus CV</button>
                            @endif
                        </div>

                        <div class="space-y-2">
                            @if($profile->resume_path)
                                <div class="flex items-center justify-between p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                                    <span class="flex items-center space-x-1.5">
                                        <i data-lucide="check" class="w-3.5 h-3.5"></i>
                                        <span>File CV sudah terunggah</span>
                                    </span>
                                    <a href="{{ route('about.cv') }}" target="_blank" class="text-indigo-500 hover:underline font-semibold">Lihat CV</a>
                                </div>
                            @endif
                            <input type="file" name="resume" accept="application/pdf" class="w-full text-xs text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 dark:file:bg-emerald-950 file:text-emerald-600 dark:file:text-emerald-400 hover:file:bg-emerald-100 cursor-pointer">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Section 5: Visibilitas & Aksi Simpan -->
            <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <label class="flex items-center space-x-2.5 text-xs text-slate-700 dark:text-slate-300 cursor-pointer">
                    <input type="checkbox" name="available_for_hire" value="1" {{ $profile->available_for_hire ? 'checked' : '' }} class="w-4 h-4 rounded border-slate-700 text-indigo-600 focus:ring-indigo-500">
                    <span class="font-semibold">Tampilkan status "Available for hire" pada header & hero website</span>
                </label>

                <div class="flex items-center space-x-3">
                    <button type="submit" class="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all flex items-center space-x-1.5">
                        <i data-lucide="save" class="w-4 h-4"></i>
                        <span>Simpan Perubahan Profil</span>
                    </button>
                </div>
            </div>

        </form>

        <form id="delete-avatar-form" method="POST" action="{{ route('admin.profile.avatar.delete') }}" class="hidden">
            @csrf
            @method('DELETE')
        </form>

        <form id="delete-resume-form" method="POST" action="{{ route('admin.profile.resume.delete') }}" class="hidden">
            @csrf
            @method('DELETE')
        </form>
    </div>

</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const avatarInput = document.getElementById('avatar-input');
    const avatarImg = document.getElementById('avatar-preview-img');
    const avatarNoImg = document.getElementById('avatar-no-img');

    if (avatarInput) {
        avatarInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    if (avatarImg) {
                        avatarImg.src = evt.target.result;
                        avatarImg.classList.remove('hidden');
                    }
                    if (avatarNoImg) {
                        avatarNoImg.classList.add('hidden');
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
});
</script>
@endsection

@extends('layouts.admin')

@section('title', 'Tambah Proyek Baru')
@section('header_title', 'Tambah Portofolio Proyek')

@section('content')
<div class="w-full max-w-7xl mx-auto space-y-6">
    
    <!-- Page Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200/80 dark:border-slate-800/80">
        <div>
            <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Tambah Portofolio Proyek</h1>
            <p class="text-xs text-slate-500 mt-1">Lengkapi data studi kasus rekayasa, arsitektur, dan tautan demo / repositori.</p>
        </div>
        <div class="flex items-center space-x-3">
            <a href="{{ route('admin.projects.index') }}" class="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:border-indigo-500 transition-all">
                Kembali ke Daftar
            </a>
            <button type="submit" form="project-create-form" class="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center space-x-2">
                <i data-lucide="plus" class="w-4 h-4"></i>
                <span>Simpan Proyek</span>
            </button>
        </div>
    </div>

    <!-- Form Two-Column Grid -->
    <form id="project-create-form" method="POST" action="{{ route('admin.projects.store') }}" enctype="multipart/form-data">
        @csrf

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <!-- Left Column: Core Data & Case Study (8 Columns) -->
            <div class="lg:col-span-8 space-y-6">
                
                <!-- Card 1: Informasi Dasar Proyek -->
                <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
                    <div class="flex items-center space-x-2.5 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                        <div class="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
                            <i data-lucide="layout" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <h2 class="text-base font-bold text-slate-900 dark:text-white">Informasi Dasar Proyek</h2>
                            <p class="text-[11px] text-slate-500">Judul, kategori utama, dan ringkasan singkat.</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Judul Proyek *</label>
                            <input type="text" name="title" value="{{ old('title') }}" required placeholder="cth. Sistem E-Voting Terdistribusi" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">
                        </div>

                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Kategori</label>
                            <select name="category_id" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500">
                                <option value="">Pilih Kategori Proyek</option>
                                @foreach($categories as $cat)
                                    <option value="{{ $cat->id }}" {{ old('category_id') == $cat->id ? 'selected' : '' }}>{{ $cat->name }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Ringkasan Singkat (Excerpt max 500 kar)</label>
                        <textarea name="excerpt" rows="2" placeholder="Penjelasan 1-2 kalimat mengenai esensi proyek..." class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">{{ old('excerpt') }}</textarea>
                    </div>

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Deskripsi Lengkap Proyek</label>
                        <textarea name="description" rows="5" placeholder="Jelaskan gambaran arsitektur, fitur teknis, dan alur sistem secara mendalam..." class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">{{ old('description') }}</textarea>
                    </div>
                </div>

                <!-- Card 2: Studi Kasus Rekayasa & Fitur -->
                <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
                    <div class="flex items-center space-x-2.5 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                        <div class="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
                            <i data-lucide="cpu" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <h2 class="text-base font-bold text-slate-900 dark:text-white">Studi Kasus Rekayasa Perangkat Lunak</h2>
                            <p class="text-[11px] text-slate-500">Menampilkan keahlian teknis pemecahan masalah (Problem, Goal, Challenges, Solutions).</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Latar Belakang Masalah (Problem Statement)</label>
                            <textarea name="problem_statement" rows="3" placeholder="Masalah atau inefisiensi yang dihadapi sebelum sistem ini dibangun..." class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">{{ old('problem_statement') }}</textarea>
                        </div>

                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Tujuan Proyek (Project Goal)</label>
                            <textarea name="project_goal" rows="3" placeholder="Target arsitektur, performa, atau kemudahan yang ingin dicapai..." class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">{{ old('project_goal') }}</textarea>
                        </div>
                    </div>

                    <div class="space-y-1.5">
                        <div class="flex items-center justify-between">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Fitur Utama Sistem</label>
                            <span class="text-[10px] text-slate-400 font-mono">Satu baris per fitur</span>
                        </div>
                        <textarea name="key_features" rows="3" placeholder="Autentikasi multi-tenant terdistribusi&#10;Caching Redis in-memory&#10;Pencetakan invoice PDF otomatis" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">{{ old('key_features') }}</textarea>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Tantangan Pengembangan (Challenges)</label>
                            <textarea name="challenges" rows="3" placeholder="Kendala teknis, konkurensi, atau integritas data..." class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">{{ old('challenges') }}</textarea>
                        </div>

                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Solusi yang Diterapkan (Solutions)</label>
                            <textarea name="solutions" rows="3" placeholder="Penerapan pola desain, optimasi query, atau middleware..." class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">{{ old('solutions') }}</textarea>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Right Column: URLs, Stack, Image & Actions (4 Columns) -->
            <div class="lg:col-span-4 space-y-6">
                
                <!-- Card 3: Tautan Proyek (Demo & Repo) -->
                <div class="glass-card p-6 rounded-3xl space-y-4">
                    <div class="flex items-center space-x-2.5 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                        <div class="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold">
                            <i data-lucide="link" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-slate-900 dark:text-white">Tautan Akses</h3>
                            <p class="text-[10px] text-slate-500">Live demo, repositori, dan dokumentasi.</p>
                        </div>
                    </div>

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-1">
                            <i data-lucide="external-link" class="w-3.5 h-3.5 text-indigo-400"></i>
                            <span>Live Demo URL</span>
                        </label>
                        <input type="url" name="demo_url" value="{{ old('demo_url') }}" placeholder="https://..." class="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">
                    </div>

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-1">
                            <i data-lucide="github" class="w-3.5 h-3.5 text-slate-400"></i>
                            <span>Source Code URL (GitHub)</span>
                        </label>
                        <input type="url" name="repo_url" value="{{ old('repo_url') }}" placeholder="https://github.com/..." class="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">
                    </div>

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-1">
                            <i data-lucide="book-open" class="w-3.5 h-3.5 text-emerald-400"></i>
                            <span>Dokumentasi URL</span>
                        </label>
                        <input type="url" name="documentation_url" value="{{ old('documentation_url') }}" placeholder="https://..." class="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">
                    </div>
                </div>

            </div>

            <!-- Right Column: Media, Tech Stack & Action (4 Columns) -->
            <div class="lg:col-span-4 space-y-6">

                <!-- Card 4: Gambar Sampul & Pengaturan Visibilitas -->
                <div class="glass-card p-6 rounded-3xl space-y-4">
                    <div class="flex items-center space-x-2.5 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                        <div class="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
                            <i data-lucide="image" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-slate-900 dark:text-white">Sampul & Pengaturan</h3>
                            <p class="text-[10px] text-slate-500">Screenshot index dan visibilitas.</p>
                        </div>
                    </div>

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Gambar Sampul / Screenshot (Maks. 3MB)</label>
                        <input type="file" name="cover_image" accept="image/*" class="w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 dark:file:bg-indigo-950 file:text-indigo-600 dark:file:text-indigo-400 cursor-pointer">
                    </div>

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Atau URL Gambar Eksternal</label>
                        <input type="url" name="cover_image_url" value="{{ old('cover_image_url') }}" placeholder="https://..." class="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                    </div>

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Urutan Tampilan (Angka kecil lebih awal)</label>
                        <input type="number" name="sort_order" value="{{ old('sort_order', 0) }}" class="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                    </div>

                    <div class="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                        <label class="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                            <input type="checkbox" name="is_featured" value="1" {{ old('is_featured') ? 'checked' : '' }} class="rounded text-indigo-600 focus:ring-indigo-500">
                            <span>Tandai sebagai Proyek Unggulan</span>
                        </label>

                        <label class="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                            <input type="checkbox" name="is_published" value="1" {{ old('is_published', '1') ? 'checked' : '' }} class="rounded text-indigo-600 focus:ring-indigo-500">
                            <span>Publikasikan ke Website</span>
                        </label>
                    </div>
                </div>

                <!-- Card 5: Teknologi yang Digunakan -->
                <div class="glass-card p-6 rounded-3xl space-y-4">
                    <div class="flex items-center space-x-2.5 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                        <div class="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
                            <i data-lucide="layers" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-slate-900 dark:text-white">Teknologi & Stack</h3>
                            <p class="text-[10px] text-slate-500">Pilih teknologi yang digunakan.</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
                        @foreach($technologies as $tech)
                            <label class="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300 cursor-pointer p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60">
                                <input type="checkbox" name="technologies[]" value="{{ $tech->id }}" class="rounded text-indigo-600 focus:ring-indigo-500">
                                <span class="truncate">{{ $tech->name }}</span>
                            </label>
                        @endforeach
                    </div>

                    <div class="pt-2 border-t border-slate-100 dark:border-slate-800">
                        <label class="block text-[11px] text-slate-400 mb-1">Tambah stack baru (pisahkan koma):</label>
                        <input type="text" name="new_technologies" placeholder="cth. Inertia.js, Redis" class="w-full px-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                    </div>
                </div>

                <!-- Card 6: Tombol Simpan -->
                <div class="glass-card p-6 rounded-3xl space-y-3">
                    <button type="submit" class="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center space-x-2">
                        <i data-lucide="check" class="w-4 h-4"></i>
                        <span>Simpan Portofolio Proyek</span>
                    </button>
                    <a href="{{ route('admin.projects.index') }}" class="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-indigo-500 text-xs font-semibold flex items-center justify-center transition-all">
                        Batal
                    </a>
                </div>

            </div>

            </div>

        </div>
    </form>
</div>
@endsection

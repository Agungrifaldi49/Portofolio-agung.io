@extends('layouts.admin')

@section('title', 'Edit Proyek: ' . $project->title)
@section('header_title', 'Kelola Portofolio Proyek')

@section('content')
<div class="w-full space-y-6">
    
    <!-- Top Action Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
        <div>
            <div class="flex items-center space-x-2">
                <a href="{{ route('admin.projects.index') }}" class="text-xs font-semibold text-slate-500 hover:text-indigo-500 transition-colors flex items-center space-x-1">
                    <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
                    <span>Daftar Proyek</span>
                </a>
                <span class="text-slate-400">/</span>
                <span class="text-xs font-semibold text-indigo-500">Edit Proyek</span>
            </div>
            <div class="flex items-center space-x-3 mt-1">
                <h1 class="text-2xl font-bold text-slate-900 dark:text-white">{{ $project->title }}</h1>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {{ $project->source_type }}
                </span>
            </div>
            <p class="text-xs text-slate-500 mt-0.5">Perbarui studi kasus, stack teknologi, tautan demo, dan sampul halaman index proyek.</p>
        </div>
        <div class="flex items-center space-x-3">
            <a href="{{ route('projects.show', $project->slug) }}" target="_blank" class="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-600 transition-all flex items-center space-x-1.5">
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                <span>Lihat di Website</span>
            </a>
            <button type="submit" form="project-edit-form" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center space-x-2">
                <i data-lucide="save" class="w-4 h-4"></i>
                <span>Simpan Perubahan</span>
            </button>
        </div>
    </div>

    <!-- Main Two-Column Layout -->
    <form id="project-edit-form" method="POST" action="{{ route('admin.projects.update', $project) }}" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            <!-- Left Column: Core Data, Case Study & Links (8 Columns) -->
            <div class="lg:col-span-8 space-y-6">
                
                <!-- Card 1: Informasi Dasar Proyek -->
                <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-5 border border-slate-200/80 dark:border-slate-800/80">
                    <div class="flex items-center space-x-3 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                        <div class="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
                            <i data-lucide="layout" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <h2 class="text-base font-bold text-slate-900 dark:text-white">1. Informasi Pokok Proyek</h2>
                            <p class="text-[11px] text-slate-500">Judul, slug URL, kategori utama, ringkasan, dan penjelasan lengkap.</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Judul Proyek <span class="text-rose-500">*</span></label>
                            <input type="text" name="title" value="{{ old('title', $project->title) }}" required class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">
                        </div>

                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Slug URL (SEO Friendly)</label>
                            <input type="text" name="slug" value="{{ old('slug', $project->slug) }}" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white font-mono text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Kategori Proyek</label>
                            <select name="category_id" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">
                                <option value="">Pilih Kategori Proyek</option>
                                @foreach($categories as $cat)
                                    <option value="{{ $cat->id }}" {{ old('category_id', $project->category_id) == $cat->id ? 'selected' : '' }}>{{ $cat->name }}</option>
                                @endforeach
                            </select>
                        </div>

                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Sumber Data</label>
                            <div class="px-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50 text-slate-500 flex items-center justify-between">
                                <span class="capitalize font-mono">{{ $project->source_type }}</span>
                                @if($project->github_full_name)
                                    <span class="text-indigo-500 font-mono">{{ $project->github_full_name }}</span>
                                @endif
                            </div>
                        </div>
                    </div>

                    <div class="space-y-1.5">
                        <div class="flex items-center justify-between">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Ringkasan Singkat (Excerpt)</label>
                            <span class="text-[10px] text-slate-400">Maks. 500 karakter</span>
                        </div>
                        <textarea name="excerpt" rows="2" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">{{ old('excerpt', $project->excerpt) }}</textarea>
                    </div>

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Deskripsi Lengkap Proyek</label>
                        <textarea name="description" rows="4" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all leading-relaxed">{{ old('description', $project->description) }}</textarea>
                    </div>
                </div>

                <!-- Card 2: Studi Kasus Rekayasa Perangkat Lunak -->
                <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-5 border border-slate-200/80 dark:border-slate-800/80">
                    <div class="flex items-center space-x-3 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                        <div class="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
                            <i data-lucide="cpu" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <h2 class="text-base font-bold text-slate-900 dark:text-white">2. Studi Kasus & Arsitektur Sistem</h2>
                            <p class="text-[11px] text-slate-500">Membuktikan keahlian problem-solving teknis (Problem, Goal, Fitur, Solusi).</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Latar Belakang Masalah (Problem Statement)</label>
                            <textarea name="problem_statement" rows="3" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">{{ old('problem_statement', $project->problem_statement) }}</textarea>
                        </div>

                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Tujuan Proyek (Project Goal)</label>
                            <textarea name="project_goal" rows="3" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">{{ old('project_goal', $project->project_goal) }}</textarea>
                        </div>
                    </div>

                    <div class="space-y-1.5">
                        <div class="flex items-center justify-between">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Fitur Utama Sistem</label>
                            <span class="text-[10px] text-slate-400 font-mono">Tulis satu baris per fitur teknis</span>
                        </div>
                        @php
                            $featuresText = is_array($project->key_features) ? implode("\n", $project->key_features) : $project->key_features;
                        @endphp
                        <textarea name="key_features" rows="3" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all font-mono text-xs leading-relaxed">{{ old('key_features', $featuresText) }}</textarea>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Tantangan Pengembangan (Challenges)</label>
                            <textarea name="challenges" rows="3" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">{{ old('challenges', $project->challenges) }}</textarea>
                        </div>

                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Solusi yang Diterapkan (Solutions)</label>
                            <textarea name="solutions" rows="3" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">{{ old('solutions', $project->solutions) }}</textarea>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Tautan Akses & Repositori -->
                <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-5 border border-slate-200/80 dark:border-slate-800/80">
                    <div class="flex items-center space-x-3 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                        <div class="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold">
                            <i data-lucide="link" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <h2 class="text-base font-bold text-slate-900 dark:text-white">3. Tautan Akses & Repositori</h2>
                            <p class="text-[11px] text-slate-500">Tautan demo langsung, repositori kode sumber di GitHub, dan dokumentasi.</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
                                <i data-lucide="external-link" class="w-3.5 h-3.5 text-indigo-400"></i>
                                <span>Live Demo URL</span>
                            </label>
                            <input type="url" name="demo_url" value="{{ old('demo_url', $project->demo_url) }}" placeholder="https://..." class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">
                        </div>

                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
                                <i data-lucide="github" class="w-3.5 h-3.5 text-slate-400"></i>
                                <span>Source Code URL (GitHub)</span>
                            </label>
                            <input type="url" name="repo_url" value="{{ old('repo_url', $project->repo_url) }}" placeholder="https://github.com/..." class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">
                        </div>
                    </div>

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
                            <i data-lucide="book-open" class="w-3.5 h-3.5 text-emerald-400"></i>
                            <span>Dokumentasi URL (Opsional)</span>
                        </label>
                        <input type="url" name="documentation_url" value="{{ old('documentation_url', $project->documentation_url) }}" placeholder="https://..." class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all">
                    </div>
                </div>

            </div>

            <!-- Right Column: Media, Tech Stack & Action (4 Columns) -->
            <div class="lg:col-span-4 space-y-6">

                <!-- Card 4: Screenshot Halaman Index / Sampul Proyek -->
                <div class="glass-card p-6 rounded-3xl space-y-4 border border-slate-200/80 dark:border-slate-800/80" x-data="{ previewUrl: '{{ $project->cover_image_url }}', isDeleted: false }">
                    <div class="flex items-center space-x-2.5 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                        <div class="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
                            <i data-lucide="image" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-slate-900 dark:text-white">Screenshot Halaman Index</h3>
                            <p class="text-[10px] text-slate-500">Tampilan asli antarmuka aplikasi.</p>
                        </div>
                    </div>

                    <!-- Mini Browser Window Preview -->
                    <div class="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-md">
                        <div class="px-3 py-2 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs select-none">
                            <div class="flex items-center space-x-1.5">
                                <span class="w-2 h-2 rounded-full bg-rose-500"></span>
                                <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                            </div>
                            <span class="text-[10px] font-mono text-slate-400 truncate max-w-[150px]">{{ $project->slug }}.app</span>
                            <i data-lucide="globe" class="w-3 h-3 text-slate-500"></i>
                        </div>
                        <div class="aspect-video w-full bg-slate-900/60 flex items-center justify-center relative overflow-hidden">
                            <template x-if="previewUrl && !isDeleted">
                                <img :src="previewUrl" alt="{{ $project->title }}" class="w-full h-full object-cover object-top">
                            </template>
                            <template x-if="!previewUrl || isDeleted">
                                <div class="text-center p-4 space-y-1 select-none">
                                    <i data-lucide="monitor" class="w-8 h-8 text-slate-600 mx-auto stroke-1"></i>
                                    <p class="text-[11px] text-slate-400 font-medium">Belum Ada Screenshot</p>
                                    <p class="text-[10px] text-slate-600">Unggah berkas atau masukkan URL gambar</p>
                                </div>
                            </template>
                        </div>
                    </div>

                    @if($project->cover_image)
                        <div class="pt-1">
                            <label class="inline-flex items-center space-x-2 text-xs text-rose-500 hover:text-rose-400 cursor-pointer select-none">
                                <input type="checkbox" name="delete_cover_image" value="1" @change="isDeleted = $el.checked" class="rounded text-rose-500 focus:ring-rose-500">
                                <span>Hapus gambar kustom aktif</span>
                            </label>
                        </div>
                    @endif

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Unggah File Baru (Maks. 3MB)</label>
                        <input 
                            type="file" 
                            name="cover_image" 
                            accept="image/*" 
                            @change="isDeleted = false; previewUrl = $event.target.files[0] ? URL.createObjectURL($event.target.files[0]) : '{{ $project->cover_image_url }}'" 
                            class="w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 dark:file:bg-indigo-950 file:text-indigo-600 dark:file:text-indigo-400 hover:file:bg-indigo-100 cursor-pointer"
                        >
                    </div>

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Atau URL Gambar Eksternal</label>
                        <input 
                            type="url" 
                            name="cover_image_url" 
                            value="{{ old('cover_image_url', str_starts_with($project->cover_image ?? '', 'http') ? $project->cover_image : '') }}" 
                            @input="isDeleted = false; if(!previewUrl || previewUrl.startsWith('http')) previewUrl = $event.target.value" 
                            placeholder="https://..." 
                            class="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500"
                        >
                    </div>
                </div>

                <!-- Card 5: Teknologi & Stack -->
                <div class="glass-card p-6 rounded-3xl space-y-4 border border-slate-200/80 dark:border-slate-800/80">
                    <div class="flex items-center space-x-2.5 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                        <div class="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
                            <i data-lucide="layers" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-slate-900 dark:text-white">Teknologi & Stack</h3>
                            <p class="text-[10px] text-slate-500">Centang teknologi yang diterapkan.</p>
                        </div>
                    </div>

                    @php $selectedTechs = $project->technologies->pluck('id')->toArray(); @endphp
                    <div class="grid grid-cols-2 gap-2 max-h-52 overflow-y-auto pr-1">
                        @foreach($technologies as $tech)
                            <label class="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300 cursor-pointer p-2 rounded-xl border border-slate-200/60 dark:border-slate-800/60 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 hover:border-indigo-400/50 transition-all select-none">
                                <input type="checkbox" name="technologies[]" value="{{ $tech->id }}" {{ in_array($tech->id, $selectedTechs) ? 'checked' : '' }} class="rounded text-indigo-600 focus:ring-indigo-500">
                                <span class="truncate font-medium">{{ $tech->name }}</span>
                            </label>
                        @endforeach
                    </div>

                    <div class="pt-2 border-t border-slate-100 dark:border-slate-800">
                        <label class="block text-[11px] text-slate-500 dark:text-slate-400 mb-1">Tambah stack baru (pisahkan koma):</label>
                        <input type="text" name="new_technologies" placeholder="cth. Inertia.js, Redis, Docker" class="w-full px-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50">
                    </div>
                </div>

                <!-- Card 6: Visibilitas & Aksi Simpan -->
                <div class="glass-card p-6 rounded-3xl space-y-4 border border-slate-200/80 dark:border-slate-800/80">
                    <div class="flex items-center space-x-2.5 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                        <div class="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                            <i data-lucide="sliders" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-slate-900 dark:text-white">Status & Visibilitas</h3>
                            <p class="text-[10px] text-slate-500">Urutan dan status publikasi website.</p>
                        </div>
                    </div>

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Urutan Tampilan</label>
                        <input type="number" name="sort_order" value="{{ old('sort_order', $project->sort_order) }}" class="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50">
                    </div>

                    <div class="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                        <label class="flex items-center space-x-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer p-2 rounded-xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 select-none">
                            <input type="checkbox" name="is_featured" value="1" {{ old('is_featured', $project->is_featured) ? 'checked' : '' }} class="w-4 h-4 rounded text-amber-500 focus:ring-amber-500">
                            <span class="flex items-center space-x-1 text-amber-500 font-bold">
                                <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
                                <span>Proyek Unggulan (Featured)</span>
                            </span>
                        </label>

                        <label class="flex items-center space-x-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer p-2 rounded-xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 select-none">
                            <input type="checkbox" name="is_published" value="1" {{ old('is_published', $project->is_published) ? 'checked' : '' }} class="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500">
                            <span class="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                                <i data-lucide="globe" class="w-3.5 h-3.5"></i>
                                <span>Publikasikan ke Website</span>
                            </span>
                        </label>
                    </div>

                    <div class="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                        <button type="submit" class="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center space-x-2">
                            <i data-lucide="save" class="w-4 h-4"></i>
                            <span>Simpan Perubahan Proyek</span>
                        </button>
                        <a href="{{ route('admin.projects.index') }}" class="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-400 text-xs font-semibold flex items-center justify-center transition-all">
                            Batal
                        </a>
                    </div>
                </div>

            </div>

        </div>
    </form>
</div>
@endsection

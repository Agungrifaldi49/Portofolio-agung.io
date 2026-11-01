@extends('layouts.admin')

@section('title', 'Edit Proyek: ' . $project->title)
@section('header_title', 'Edit Portofolio Proyek')

@section('content')
<div class="max-w-4xl space-y-6">
    <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
        <div class="flex items-center justify-between">
            <div>
                <h2 class="text-xl font-bold text-slate-900 dark:text-white">Edit Proyek</h2>
                <p class="text-xs text-slate-500 font-mono">ID: {{ $project->id }} &bull; Sumber: {{ strtoupper($project->source_type) }}</p>
            </div>
            <a href="{{ route('projects.show', $project->slug) }}" target="_blank" class="text-xs font-semibold text-indigo-500 hover:underline flex items-center space-x-1">
                <span>Lihat di Website</span>
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
        </div>

        <form method="POST" action="{{ route('admin.projects.update', $project) }}" enctype="multipart/form-data" class="space-y-6">
            @csrf
            @method('PUT')

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Judul Proyek *</label>
                    <input type="text" name="title" value="{{ old('title', $project->title) }}" required class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Kategori</label>
                    <select name="category_id" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-200">
                        <option value="">Pilih Kategori</option>
                        @foreach($categories as $cat)
                            <option value="{{ $cat->id }}" {{ old('category_id', $project->category_id) == $cat->id ? 'selected' : '' }}>{{ $cat->name }}</option>
                        @endforeach
                    </select>
                </div>
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Slug URL (Opsional / Otomatis)</label>
                <input type="text" name="slug" value="{{ old('slug', $project->slug) }}" class="w-full px-4 py-2 text-sm font-mono rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Ringkasan Singkat (Excerpt max 500 kar)</label>
                <textarea name="excerpt" rows="2" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">{{ old('excerpt', $project->excerpt) }}</textarea>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Latar Belakang Masalah (Problem Statement)</label>
                    <textarea name="problem_statement" rows="3" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">{{ old('problem_statement', $project->problem_statement) }}</textarea>
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Tujuan Proyek (Project Goal)</label>
                    <textarea name="project_goal" rows="3" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">{{ old('project_goal', $project->project_goal) }}</textarea>
                </div>
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Fitur Utama (Satu baris per fitur)</label>
                <textarea name="key_features" rows="3" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">{{ old('key_features', is_array($project->key_features) ? implode("\n", $project->key_features) : '') }}</textarea>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Tantangan Pengembangan (Challenges)</label>
                    <textarea name="challenges" rows="3" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">{{ old('challenges', $project->challenges) }}</textarea>
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Solusi yang Diterapkan (Solutions)</label>
                    <textarea name="solutions" rows="3" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">{{ old('solutions', $project->solutions) }}</textarea>
                </div>
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Deskripsi Lengkap Proyek</label>
                <textarea name="description" rows="5" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">{{ old('description', $project->description) }}</textarea>
            </div>

            <!-- Links -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Live Demo URL</label>
                    <input type="url" name="demo_url" value="{{ old('demo_url', $project->demo_url) }}" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Source Code URL (GitHub)</label>
                    <input type="url" name="repo_url" value="{{ old('repo_url', $project->repo_url) }}" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Dokumentasi URL</label>
                    <input type="url" name="documentation_url" value="{{ old('documentation_url', $project->documentation_url) }}" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>
            </div>

            <!-- Tech Stacks -->
            <div class="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Teknologi yang Digunakan</label>
                @php $selectedTechs = $project->technologies->pluck('id')->toArray(); @endphp
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    @foreach($technologies as $tech)
                        <label class="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300 cursor-pointer">
                            <input type="checkbox" name="technologies[]" value="{{ $tech->id }}" {{ in_array($tech->id, $selectedTechs) ? 'checked' : '' }} class="rounded text-indigo-600 focus:ring-indigo-500">
                            <span>{{ $tech->name }}</span>
                        </label>
                    @endforeach
                </div>
                <div class="pt-2">
                    <label class="block text-[11px] text-slate-400">Tambah stack baru (pisahkan dengan koma):</label>
                    <input type="text" name="new_technologies" placeholder="cth. Inertia.js, PostgreSQL" class="w-full px-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>
            </div>

            <!-- Cover Image & Screenshot Management -->
            <div class="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div class="flex items-center justify-between">
                    <div>
                        <label class="block text-xs font-bold text-slate-800 dark:text-slate-200">Gambar Sampul / Screenshot Tampilan Index Proyek</label>
                        <p class="text-[11px] text-slate-500">Unggah screenshot asli halaman website/dashboard proyek Anda atau gunakan otomatis dari GitHub/Live Demo.</p>
                    </div>
                    @if($project->cover_image_url)
                        <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            {{ $project->cover_image ? 'Custom Upload / URL' : 'Auto Generated' }}
                        </span>
                    @endif
                </div>

                <!-- Current Preview Card -->
                @if($project->cover_image_url)
                    <div class="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 max-w-md space-y-2">
                        <div class="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                            <span>Pratinjau Saat Ini:</span>
                            @if($project->cover_image)
                                <label class="inline-flex items-center space-x-1 text-rose-400 hover:text-rose-300 cursor-pointer">
                                    <input type="checkbox" name="delete_cover_image" value="1" class="rounded text-rose-500">
                                    <span>Hapus Gambar Kustom</span>
                                </label>
                            @endif
                        </div>
                        <div class="aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80">
                            <img src="{{ $project->cover_image_url }}" alt="{{ $project->title }}" class="w-full h-full object-cover object-top">
                        </div>
                    </div>
                @endif

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Unggah File Screenshot (JPG, PNG, WebP max 3MB)</label>
                        <input type="file" name="cover_image" accept="image/*" class="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 dark:file:bg-indigo-950 file:text-indigo-600 dark:file:text-indigo-400">
                    </div>

                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Atau Masukkan URL Gambar Eksternal</label>
                        <input type="url" name="cover_image_url" value="{{ old('cover_image_url', str_starts_with($project->cover_image ?? '', 'http') ? $project->cover_image : '') }}" placeholder="https://domain.com/screenshot.png" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                    </div>
                </div>

                <div class="space-y-1.5 max-w-xs">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Urutan Tampilan (Sort Order)</label>
                    <input type="number" name="sort_order" value="{{ old('sort_order', $project->sort_order) }}" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>
            </div>

            <!-- Checkboxes -->
            <div class="flex items-center space-x-6 pt-2">
                <label class="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                    <input type="checkbox" name="is_featured" value="1" {{ old('is_featured', $project->is_featured) ? 'checked' : '' }} class="rounded text-indigo-600 focus:ring-indigo-500">
                    <span>Tandai sebagai Proyek Unggulan (Featured)</span>
                </label>

                <label class="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                    <input type="checkbox" name="is_published" value="1" {{ old('is_published', $project->is_published) ? 'checked' : '' }} class="rounded text-indigo-600 focus:ring-indigo-500">
                    <span>Publikasikan ke Website</span>
                </label>
            </div>

            <div class="pt-4 flex items-center space-x-3">
                <button type="submit" class="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-md transition-all">
                    Simpan Perubahan
                </button>
                <a href="{{ route('admin.projects.index') }}" class="px-6 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm">
                    Batal
                </a>
            </div>
        </form>
    </div>
</div>
@endsection


@extends('layouts.admin')

@section('title', 'Tulis Artikel Baru')
@section('header_title', 'Tulis Artikel Teknis')

@section('content')
<div class="w-full space-y-6">
    <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
        <div>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">Form Artikel Baru</h2>
            <p class="text-xs text-slate-500">Mendukung format Markdown untuk penulisan konten teknis dan blok kode.</p>
        </div>

        <form method="POST" action="{{ route('admin.articles.store') }}" enctype="multipart/form-data" class="space-y-4">
            @csrf

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Judul Artikel *</label>
                    <input type="text" name="title" value="{{ old('title') }}" required class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Kategori</label>
                    <select name="category_id" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-200">
                        <option value="">Pilih Kategori</option>
                        @foreach($categories as $cat)
                            <option value="{{ $cat->id }}" {{ old('category_id') == $cat->id ? 'selected' : '' }}>{{ $cat->name }}</option>
                        @endforeach
                    </select>
                </div>
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Ringkasan (Excerpt max 500 kar)</label>
                <textarea name="excerpt" rows="2" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">{{ old('excerpt') }}</textarea>
            </div>

            <div class="space-y-1.5">
                <div class="flex items-center justify-between">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Konten Artikel (Format Markdown) *</label>
                    <span class="text-[10px] text-slate-400 font-mono">## Heading, ```php kode, *italic*, **bold**</span>
                </div>
                <textarea name="content" rows="12" required class="w-full font-mono text-xs p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white leading-relaxed">{{ old('content') }}</textarea>
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Tags (Pilih yang tersedia atau tambah baru)</label>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    @foreach($tags as $t)
                        <label class="flex items-center space-x-1.5 text-xs text-slate-600 dark:text-slate-300 cursor-pointer">
                            <input type="checkbox" name="tags[]" value="{{ $t->id }}" class="rounded text-indigo-600 focus:ring-indigo-500">
                            <span>#{{ $t->name }}</span>
                        </label>
                    @endforeach
                </div>
                <input type="text" name="new_tags" placeholder="Tambah tag baru (pisahkan koma, cth: Security, Docker)" class="mt-2 w-full px-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Cover Image (JPG, PNG, WebP max 3MB)</label>
                    <input type="file" name="cover_image" accept="image/*" class="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 dark:file:bg-indigo-950 file:text-indigo-600 dark:file:text-indigo-400">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Status Publikasi *</label>
                    <select name="status" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-200">
                        <option value="published" {{ old('status') === 'published' ? 'selected' : '' }}>Publikasikan Langsung</option>
                        <option value="draft" {{ old('status') === 'draft' ? 'selected' : '' }}>Simpan sebagai Draft</option>
                    </select>
                </div>
            </div>

            <div class="space-y-1.5 pt-2">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Meta Description (SEO)</label>
                <input type="text" name="meta_description" value="{{ old('meta_description') }}" placeholder="Maksimal 160 karakter untuk snippet Google" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
            </div>

            <div class="pt-4 flex items-center space-x-3">
                <button type="submit" class="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-md transition-all">
                    Simpan Artikel
                </button>
                <a href="{{ route('admin.articles.index') }}" class="px-6 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm">
                    Batal
                </a>
            </div>
        </form>
    </div>
</div>
@endsection


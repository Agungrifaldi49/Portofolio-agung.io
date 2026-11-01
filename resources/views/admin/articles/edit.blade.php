@extends('layouts.admin')

@section('title', 'Edit Artikel: ' . $article->title)
@section('header_title', 'Edit Artikel Teknis')

@section('content')
<div class="w-full space-y-6">
    <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
        <div class="flex items-center justify-between">
            <div>
                <h2 class="text-xl font-bold text-slate-900 dark:text-white">Edit Artikel</h2>
                <p class="text-xs text-slate-500 font-mono">ID: {{ $article->id }} &bull; Slug: {{ $article->slug }}</p>
            </div>
            <a href="{{ route('blog.show', $article->slug) }}" target="_blank" class="text-xs font-semibold text-indigo-500 hover:underline flex items-center space-x-1">
                <span>Lihat di Website</span>
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
        </div>

        <form method="POST" action="{{ route('admin.articles.update', $article) }}" enctype="multipart/form-data" class="space-y-4">
            @csrf
            @method('PUT')

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Judul Artikel *</label>
                    <input type="text" name="title" value="{{ old('title', $article->title) }}" required class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Kategori</label>
                    <select name="category_id" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-200">
                        <option value="">Pilih Kategori</option>
                        @foreach($categories as $cat)
                            <option value="{{ $cat->id }}" {{ old('category_id', $article->category_id) == $cat->id ? 'selected' : '' }}>{{ $cat->name }}</option>
                        @endforeach
                    </select>
                </div>
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Slug URL (Opsional / Otomatis)</label>
                <input type="text" name="slug" value="{{ old('slug', $article->slug) }}" class="w-full px-4 py-2 text-sm font-mono rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Ringkasan (Excerpt)</label>
                <textarea name="excerpt" rows="2" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">{{ old('excerpt', $article->excerpt) }}</textarea>
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Konten Artikel (Format Markdown) *</label>
                <textarea name="content" rows="14" required class="w-full font-mono text-xs p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white leading-relaxed">{{ old('content', $article->content) }}</textarea>
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Tags</label>
                @php $selectedTags = $article->tags->pluck('id')->toArray(); @endphp
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    @foreach($tags as $t)
                        <label class="flex items-center space-x-1.5 text-xs text-slate-600 dark:text-slate-300 cursor-pointer">
                            <input type="checkbox" name="tags[]" value="{{ $t->id }}" {{ in_array($t->id, $selectedTags) ? 'checked' : '' }} class="rounded text-indigo-600 focus:ring-indigo-500">
                            <span>#{{ $t->name }}</span>
                        </label>
                    @endforeach
                </div>
                <input type="text" name="new_tags" placeholder="Tambah tag baru (pisahkan koma)" class="mt-2 w-full px-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Cover Image</label>
                    @if($article->cover_image)
                        <div class="flex items-center space-x-3 pb-2">
                            <img src="{{ asset('storage/' . $article->cover_image) }}" alt="" class="w-16 h-10 object-cover rounded-lg border border-slate-700">
                            <span class="text-xs text-slate-400">Gambar saat ini</span>
                        </div>
                    @endif
                    <input type="file" name="cover_image" accept="image/*" class="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 dark:file:bg-indigo-950 file:text-indigo-600 dark:file:text-indigo-400">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Status Publikasi *</label>
                    <select name="status" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-200">
                        <option value="published" {{ old('status', $article->status) === 'published' ? 'selected' : '' }}>Publikasikan</option>
                        <option value="draft" {{ old('status', $article->status) === 'draft' ? 'selected' : '' }}>Draft</option>
                    </select>
                </div>
            </div>

            <div class="space-y-1.5 pt-2">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Meta Description (SEO)</label>
                <input type="text" name="meta_description" value="{{ old('meta_description', $article->meta_description) }}" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
            </div>

            <div class="pt-4 flex items-center space-x-3">
                <button type="submit" class="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-md transition-all">
                    Simpan Perubahan
                </button>
                <a href="{{ route('admin.articles.index') }}" class="px-6 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm">
                    Batal
                </a>
            </div>
        </form>
    </div>
</div>
@endsection


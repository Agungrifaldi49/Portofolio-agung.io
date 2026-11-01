@extends('layouts.admin')

@section('title', 'Edit Keahlian: ' . $skill->name)
@section('header_title', 'Edit Keahlian Teknis')

@section('content')
<div class="w-full space-y-6">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200/80 dark:border-slate-800/80">
        <div>
            <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Edit Keahlian: {{ $skill->name }}</h1>
            <p class="text-xs text-slate-500 mt-1 font-mono">ID: {{ $skill->id }}</p>
        </div>
        <div class="flex items-center space-x-3">
            <a href="{{ route('admin.skills.index') }}" class="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:border-indigo-500 transition-all">
                Kembali ke Daftar
            </a>
            <button type="submit" form="skill-edit-form" class="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center space-x-2">
                <i data-lucide="save" class="w-4 h-4"></i>
                <span>Simpan Perubahan</span>
            </button>
        </div>
    </div>

    <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
        <form id="skill-edit-form" method="POST" action="{{ route('admin.skills.update', $skill) }}" class="space-y-6">
            @csrf
            @method('PUT')

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Nama Teknologi / Bahasa *</label>
                    <input type="text" name="name" value="{{ old('name', $skill->name) }}" required class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Kategori *</label>
                    <select name="category" required class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500">
                        @foreach($categories as $cat)
                            <option value="{{ $cat }}" {{ old('category', $skill->category) == $cat ? 'selected' : '' }}>{{ $cat }}</option>
                        @endforeach
                    </select>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Nama Ikon Lucide</label>
                    <input type="text" name="icon" value="{{ old('icon', $skill->icon) }}" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Label Kemahiran</label>
                    <input type="text" name="level_label" value="{{ old('level_label', $skill->level_label) }}" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Urutan Tampilan</label>
                    <input type="number" name="sort_order" value="{{ old('sort_order', $skill->sort_order) }}" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">
                </div>
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Deskripsi / Ruang Lingkup</label>
                <textarea name="description" rows="3" class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500">{{ old('description', $skill->description) }}</textarea>
            </div>

            <div class="pt-2">
                <label class="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                    <input type="checkbox" name="is_published" value="1" {{ old('is_published', $skill->is_published) ? 'checked' : '' }} class="rounded text-indigo-600 focus:ring-indigo-500">
                    <span>Publikasikan ke Website</span>
                </label>
            </div>

            <div class="pt-4 flex items-center space-x-3 border-t border-slate-100 dark:border-slate-800">
                <button type="submit" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs shadow-md transition-all">
                    Simpan Perubahan
                </button>
                <a href="{{ route('admin.skills.index') }}" class="px-6 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800">
                    Batal
                </a>
            </div>
        </form>
    </div>
</div>
@endsection

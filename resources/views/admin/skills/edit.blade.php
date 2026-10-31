@extends('layouts.admin')

@section('title', 'Edit Keahlian: ' . $skill->name)
@section('header_title', 'Edit Keahlian Teknis')

@section('content')
<div class="max-w-2xl space-y-6">
    <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
        <div>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">Edit Keahlian</h2>
            <p class="text-xs text-slate-500 font-mono">ID: {{ $skill->id }}</p>
        </div>

        <form method="POST" action="{{ route('admin.skills.update', $skill) }}" class="space-y-4">
            @csrf
            @method('PUT')

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Nama Teknologi / Bahasa *</label>
                <input type="text" name="name" value="{{ old('name', $skill->name) }}" required class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Kategori *</label>
                    <select name="category" required class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-200">
                        @foreach($categories as $cat)
                            <option value="{{ $cat }}" {{ old('category', $skill->category) == $cat ? 'selected' : '' }}>{{ $cat }}</option>
                        @endforeach
                    </select>
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Nama Ikon Lucide</label>
                    <input type="text" name="icon" value="{{ old('icon', $skill->icon) }}" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Label Kemahiran</label>
                    <input type="text" name="level_label" value="{{ old('level_label', $skill->level_label) }}" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Urutan Tampilan</label>
                    <input type="number" name="sort_order" value="{{ old('sort_order', $skill->sort_order) }}" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Deskripsi / Ruang Lingkup</label>
                <textarea name="description" rows="2" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">{{ old('description', $skill->description) }}</textarea>
            </div>

            <div class="pt-2">
                <label class="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                    <input type="checkbox" name="is_published" value="1" {{ old('is_published', $skill->is_published) ? 'checked' : '' }} class="rounded text-indigo-600 focus:ring-indigo-500">
                    <span>Publikasikan ke Website</span>
                </label>
            </div>

            <div class="pt-4 flex items-center space-x-3">
                <button type="submit" class="px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all">
                    Simpan Perubahan
                </button>
                <a href="{{ route('admin.skills.index') }}" class="px-6 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs">
                    Batal
                </a>
            </div>
        </form>
    </div>
</div>
@endsection


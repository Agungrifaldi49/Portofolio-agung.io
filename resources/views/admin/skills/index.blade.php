@extends('layouts.admin')

@section('title', 'Kelola Keahlian Teknis')
@section('header_title', 'Kelola Keahlian (Skills)')

@section('content')
<div class="space-y-6">
    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-bold text-slate-900 dark:text-white">Keahlian & Instrumen Teknis</h1>
            <p class="text-xs text-slate-500">Kelola daftar kemampuan teknis, kategori, dan deskripsi.</p>
        </div>
        <a href="{{ route('admin.skills.create') }}" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all flex items-center space-x-1.5">
            <i data-lucide="plus" class="w-4 h-4"></i>
            <span>Tambah Keahlian</span>
        </a>
    </div>

    <div class="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
        <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 dark:bg-slate-800/60 text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                    <th class="p-4">Teknologi</th>
                    <th class="p-4">Kategori</th>
                    <th class="p-4">Tingkat Spesialisasi</th>
                    <th class="p-4">Urutan</th>
                    <th class="p-4">Status</th>
                    <th class="p-4 text-right">Aksi</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800/80">
                @forelse($skills as $skill)
                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                        <td class="p-4">
                            <div class="flex items-center space-x-2.5">
                                <div class="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-indigo-500 flex items-center justify-center">
                                    <i data-lucide="{{ $skill->icon ?: 'code' }}" class="w-3.5 h-3.5"></i>
                                </div>
                                <span class="font-bold text-slate-900 dark:text-white">{{ $skill->name }}</span>
                            </div>
                        </td>
                        <td class="p-4 text-slate-600 dark:text-slate-300">{{ $skill->category }}</td>
                        <td class="p-4 font-mono text-indigo-400">{{ $skill->level_label ?: '—' }}</td>
                        <td class="p-4 font-mono text-slate-400">{{ $skill->sort_order }}</td>
                        <td class="p-4">
                            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold {{ $skill->is_published ? 'bg-emerald-500/15 text-emerald-500' : 'bg-slate-500/15 text-slate-400' }}">
                                {{ $skill->is_published ? 'Publik' : 'Draft' }}
                            </span>
                        </td>
                        <td class="p-4 text-right space-x-2">
                            <a href="{{ route('admin.skills.edit', $skill) }}" class="text-indigo-500 hover:underline font-semibold">Edit</a>
                            <span class="text-slate-300 dark:text-slate-700">&bull;</span>
                            <form method="POST" action="{{ route('admin.skills.destroy', $skill) }}" class="inline" onsubmit="return confirm('Hapus keahlian ini?')">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="text-rose-500 hover:underline font-semibold">Hapus</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="6" class="p-8 text-center text-slate-400">Belum ada keahlian yang ditambahkan.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection


@extends('layouts.admin')

@section('title', 'Kelola Artikel & Blog')
@section('header_title', 'Kelola Artikel Teknis')

@section('content')
<div class="space-y-6">
    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-bold text-slate-900 dark:text-white">Artikel & Blog Teknis</h1>
            <p class="text-xs text-slate-500">Kelola postingan, markdown content, tags, dan status publikasi.</p>
        </div>
        <a href="{{ route('admin.articles.create') }}" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all flex items-center space-x-1.5">
            <i data-lucide="plus" class="w-4 h-4"></i>
            <span>Tulis Artikel Baru</span>
        </a>
    </div>

    <div class="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
        <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 dark:bg-slate-800/60 text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                    <th class="p-4">Judul Artikel</th>
                    <th class="p-4">Kategori</th>
                    <th class="p-4">Waktu Baca</th>
                    <th class="p-4">Status</th>
                    <th class="p-4 text-right">Aksi</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800/80">
                @forelse($articles as $art)
                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                        <td class="p-4">
                            <div class="font-bold text-slate-900 dark:text-white">{{ $art->title }}</div>
                            <div class="text-[11px] text-slate-400 font-mono">/blog/{{ $art->slug }}</div>
                        </td>
                        <td class="p-4 text-slate-600 dark:text-slate-300">{{ $art->category->name ?? '—' }}</td>
                        <td class="p-4 font-mono text-slate-400">{{ $art->reading_time }} mnt</td>
                        <td class="p-4">
                            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold {{ $art->status === 'published' ? 'bg-emerald-500/15 text-emerald-500' : 'bg-amber-500/15 text-amber-500' }}">
                                {{ strtoupper($art->status) }}
                            </span>
                        </td>
                        <td class="p-4 text-right space-x-2">
                            <a href="{{ route('admin.articles.edit', $art) }}" class="text-indigo-500 hover:underline font-semibold">Edit</a>
                            <span class="text-slate-300 dark:text-slate-700">&bull;</span>
                            <form method="POST" action="{{ route('admin.articles.destroy', $art) }}" class="inline" onsubmit="return confirm('Hapus artikel ini?')">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="text-rose-500 hover:underline font-semibold">Hapus</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="5" class="p-8 text-center text-slate-400">Belum ada artikel.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection


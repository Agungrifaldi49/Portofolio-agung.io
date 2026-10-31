@extends('layouts.admin')

@section('title', 'Kelola Proyek')
@section('header_title', 'Daftar Portofolio Proyek')

@section('content')
<div class="space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
            <h1 class="text-xl font-bold text-slate-900 dark:text-white">Semua Proyek</h1>
            <p class="text-xs text-slate-500">Kelola proyek manual dan repositori yang disinkronkan dari GitHub.</p>
        </div>
        <div class="flex items-center space-x-3">
            <a href="{{ route('admin.projects.create') }}" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all flex items-center space-x-1.5">
                <i data-lucide="plus" class="w-4 h-4"></i>
                <span>Tambah Proyek Manual</span>
            </a>
            <form method="POST" action="{{ route('admin.github.sync') }}">
                @csrf
                <button type="submit" class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-500 text-xs font-semibold transition-all flex items-center space-x-1.5">
                    <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
                    <span>Tarik dari GitHub</span>
                </button>
            </form>
        </div>
    </div>

    <!-- Filters & Search -->
    <div class="glass-card p-4 rounded-2xl">
        <form method="GET" action="{{ route('admin.projects.index') }}" class="flex flex-wrap items-center gap-3">
            <input 
                type="text" 
                name="search" 
                value="{{ request('search') }}" 
                placeholder="Cari judul proyek..." 
                class="px-3.5 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
            <select name="source" class="px-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-200">
                <option value="">Semua Sumber</option>
                <option value="manual" {{ request('source') === 'manual' ? 'selected' : '' }}>Manual</option>
                <option value="github" {{ request('source') === 'github' ? 'selected' : '' }}>GitHub</option>
            </select>
            <button type="submit" class="px-3.5 py-1.5 rounded-xl bg-slate-800 dark:bg-slate-700 text-white text-xs font-semibold">
                Filter
            </button>
        </form>
    </div>

    <!-- Projects Table -->
    <div class="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
        <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
                <thead class="bg-slate-50 dark:bg-slate-800/60 text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                    <tr>
                        <th class="p-4">Proyek</th>
                        <th class="p-4">Kategori</th>
                        <th class="p-4">Sumber</th>
                        <th class="p-4">Unggulan</th>
                        <th class="p-4">Publik</th>
                        <th class="p-4 text-right">Aksi</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800/80">
                    @forelse($projects as $p)
                        <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                            <td class="p-4">
                                <div class="flex items-center space-x-3">
                                    <div class="w-10 h-10 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0 flex items-center justify-center text-slate-400">
                                        @if($p->cover_image)
                                            <img src="{{ asset('storage/' . $p->cover_image) }}" alt="" class="w-full h-full object-cover">
                                        @else
                                            <i data-lucide="box" class="w-4 h-4 text-indigo-400"></i>
                                        @endif
                                    </div>
                                    <div class="space-y-0.5">
                                        <a href="{{ route('projects.show', $p->slug) }}" target="_blank" class="font-bold text-slate-900 dark:text-white hover:text-indigo-500">
                                            {{ $p->title }}
                                        </a>
                                        <div class="text-[11px] text-slate-400 font-mono truncate max-w-xs">
                                            /projects/{{ $p->slug }}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="p-4 text-slate-600 dark:text-slate-300">
                                {{ $p->category->name ?? '—' }}
                            </td>
                            <td class="p-4">
                                @if($p->source_type === 'github')
                                    <span class="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                        <i data-lucide="github" class="w-3 h-3"></i>
                                        <span>GitHub</span>
                                    </span>
                                @else
                                    <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-slate-500/10 text-slate-400">
                                        Manual
                                    </span>
                                @endif
                            </td>
                            <td class="p-4">
                                <form method="POST" action="{{ route('admin.projects.toggle-featured', $p) }}">
                                    @csrf
                                    <button type="submit" class="px-2.5 py-1 rounded-full text-[10px] font-bold {{ $p->is_featured ? 'bg-amber-500/15 text-amber-500 border border-amber-500/30' : 'bg-slate-200 dark:bg-slate-800 text-slate-400' }}">
                                        {{ $p->is_featured ? '★ Unggulan' : 'Biasa' }}
                                    </button>
                                </form>
                            </td>
                            <td class="p-4">
                                <form method="POST" action="{{ route('admin.projects.toggle-publish', $p) }}">
                                    @csrf
                                    <button type="submit" class="px-2.5 py-1 rounded-full text-[10px] font-bold {{ $p->is_published ? 'bg-emerald-500/15 text-emerald-500 border border-emerald-500/30' : 'bg-slate-200 dark:bg-slate-800 text-slate-400' }}">
                                        {{ $p->is_published ? 'Publik' : 'Draft' }}
                                    </button>
                                </form>
                            </td>
                            <td class="p-4 text-right space-x-2">
                                <a href="{{ route('admin.projects.edit', $p) }}" class="text-indigo-500 hover:underline font-semibold">Edit</a>
                                <span class="text-slate-300 dark:text-slate-700">&bull;</span>
                                <form method="POST" action="{{ route('admin.projects.destroy', $p) }}" class="inline" onsubmit="return confirm('Apakah Anda yakin ingin menghapus proyek ini? Tindakan ini tidak dapat dibatalkan.')">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="text-rose-500 hover:underline font-semibold">Hapus</button>
                                </form>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="6" class="p-8 text-center text-slate-400">
                                Belum ada proyek. Tambahkan proyek atau lakukan sinkronisasi dari GitHub.
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
        <div class="p-4 border-t border-slate-100 dark:border-slate-800">
            {{ $projects->links() }}
        </div>
    </div>
</div>
@endsection


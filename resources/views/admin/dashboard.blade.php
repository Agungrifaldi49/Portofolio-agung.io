@extends('layouts.admin')

@section('title', 'Dashboard Ringkasan')
@section('header_title', 'Ringkasan Aktivitas Portfolio')

@section('content')
<div class="space-y-8">
    
    <!-- Quick Status Cards -->
    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="glass-card p-5 rounded-2xl space-y-2">
            <div class="flex items-center justify-between text-slate-500 text-xs">
                <span>Total Proyek</span>
                <i data-lucide="folder-git-2" class="w-4 h-4 text-indigo-500"></i>
            </div>
            <div class="text-3xl font-extrabold text-slate-900 dark:text-white">{{ $stats['total_projects'] }}</div>
            <div class="text-[11px] text-slate-500 font-mono">
                <span class="text-indigo-500 font-semibold">{{ $stats['featured_projects'] }}</span> unggulan &bull; <span class="text-purple-500 font-semibold">{{ $stats['github_projects'] }}</span> GitHub
            </div>
        </div>

        <div class="glass-card p-5 rounded-2xl space-y-2">
            <div class="flex items-center justify-between text-slate-500 text-xs">
                <span>Artikel & Blog</span>
                <i data-lucide="newspaper" class="w-4 h-4 text-purple-500"></i>
            </div>
            <div class="text-3xl font-extrabold text-slate-900 dark:text-white">{{ $stats['total_articles'] }}</div>
            <div class="text-[11px] text-slate-500 font-mono">
                <span class="text-emerald-500 font-semibold">{{ $stats['published_articles'] }}</span> terpublikasi
            </div>
        </div>

        <div class="glass-card p-5 rounded-2xl space-y-2">
            <div class="flex items-center justify-between text-slate-500 text-xs">
                <span>Keahlian & Sertifikat</span>
                <i data-lucide="award" class="w-4 h-4 text-amber-500"></i>
            </div>
            <div class="text-3xl font-extrabold text-slate-900 dark:text-white">{{ $stats['total_skills'] }}</div>
            <div class="text-[11px] text-slate-500 font-mono">
                <span class="text-amber-500 font-semibold">{{ $stats['total_certificates'] }}</span> sertifikat terdata
            </div>
        </div>

        <div class="glass-card p-5 rounded-2xl space-y-2">
            <div class="flex items-center justify-between text-slate-500 text-xs">
                <span>Pesan Belum Dibaca</span>
                <i data-lucide="inbox" class="w-4 h-4 text-rose-500"></i>
            </div>
            <div class="text-3xl font-extrabold text-slate-900 dark:text-white">{{ $stats['unread_messages'] }}</div>
            <div class="text-[11px] text-slate-500 font-mono">
                <a href="{{ route('admin.messages.index') }}" class="text-indigo-500 hover:underline">Lihat kotak masuk &rarr;</a>
            </div>
        </div>
    </div>

    <!-- GitHub Integration Banner -->
    <div class="glass-card p-6 rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950/20 to-purple-950/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div class="flex items-start space-x-4">
            <div class="w-12 h-12 rounded-2xl bg-indigo-600/10 text-indigo-500 flex items-center justify-center flex-shrink-0">
                <i data-lucide="github" class="w-6 h-6"></i>
            </div>
            <div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                    <span>Sinkronisasi Repositori GitHub</span>
                    @if($latestSync && $latestSync->status === 'success')
                        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Aktif</span>
                    @else
                        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">Siap Dikonfigurasi</span>
                    @endif
                </h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Sinkronisasi otomatis repositori publik berlabel topik <code>portfolio</code>. Terakhir disinkronkan: 
                    <strong>{{ $lastSyncTime ? date('d M Y H:i:s', strtotime($lastSyncTime)) : 'Belum pernah' }}</strong>
                </p>
            </div>
        </div>

        <div class="flex items-center space-x-3">
            <form method="POST" action="{{ route('admin.github.sync') }}">
                @csrf
                <button type="submit" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all flex items-center space-x-2">
                    <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
                    <span>Sinkronkan Sekarang</span>
                </button>
            </form>
            <a href="{{ route('admin.github.index') }}" class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-500 text-xs font-medium transition-colors">
                Pengaturan
            </a>
        </div>
    </div>

    <!-- Two Column: Recent Projects & Messages -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- Recent Projects -->
        <div class="lg:col-span-7 space-y-4">
            <div class="flex items-center justify-between">
                <h2 class="text-lg font-bold text-slate-900 dark:text-white">Proyek Terbaru</h2>
                <a href="{{ route('admin.projects.create') }}" class="text-xs font-semibold text-indigo-500 hover:underline flex items-center space-x-1">
                    <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                    <span>Tambah Proyek</span>
                </a>
            </div>

            <div class="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                <table class="w-full text-left text-xs">
                    <thead class="bg-slate-50 dark:bg-slate-800/50 text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                        <tr>
                            <th class="p-3.5">Judul</th>
                            <th class="p-3.5">Sumber</th>
                            <th class="p-3.5">Status</th>
                            <th class="p-3.5 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800/80">
                        @forelse($recentProjects as $p)
                            <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                <td class="p-3.5">
                                    <div class="font-bold text-slate-900 dark:text-white">{{ $p->title }}</div>
                                    <div class="text-[11px] text-slate-400 font-mono">{{ $p->category->name ?? 'General' }}</div>
                                </td>
                                <td class="p-3.5">
                                    @if($p->source_type === 'github')
                                        <span class="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-400">
                                            <i data-lucide="github" class="w-3 h-3"></i>
                                            <span>GitHub</span>
                                        </span>
                                    @else
                                        <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-slate-500/10 text-slate-400">
                                            Manual
                                        </span>
                                    @endif
                                </td>
                                <td class="p-3.5">
                                    @if($p->is_published)
                                        <span class="text-emerald-500 font-semibold">&bull; Publik</span>
                                    @else
                                        <span class="text-slate-400">&bull; Draft</span>
                                    @endif
                                </td>
                                <td class="p-3.5 text-right space-x-2">
                                    <a href="{{ route('admin.projects.edit', $p) }}" class="text-indigo-500 hover:text-indigo-400 font-medium">Edit</a>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="4" class="p-6 text-center text-slate-400">Belum ada proyek.</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Recent Contact Messages -->
        <div class="lg:col-span-5 space-y-4">
            <div class="flex items-center justify-between">
                <h2 class="text-lg font-bold text-slate-900 dark:text-white">Pesan Masuk Terbaru</h2>
                <a href="{{ route('admin.messages.index') }}" class="text-xs font-semibold text-indigo-500 hover:underline">
                    Lihat Semua
                </a>
            </div>

            <div class="glass-card rounded-2xl divide-y divide-slate-100 dark:divide-slate-800 border border-slate-200 dark:border-slate-800">
                @forelse($recentMessages as $msg)
                    <a href="{{ route('admin.messages.show', $msg) }}" class="block p-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors space-y-1">
                        <div class="flex items-center justify-between text-xs">
                            <span class="font-bold text-slate-900 dark:text-white flex items-center space-x-1.5">
                                @if(!$msg->is_read)
                                    <span class="w-2 h-2 rounded-full bg-rose-500"></span>
                                @endif
                                <span>{{ $msg->name }}</span>
                            </span>
                            <span class="text-[11px] font-mono text-slate-400">{{ $msg->created_at->diffForHumans() }}</span>
                        </div>
                        <div class="text-xs font-semibold text-indigo-500 truncate">{{ $msg->subject }}</div>
                        <p class="text-xs text-slate-500 line-clamp-1">{{ $msg->message }}</p>
                    </a>
                @empty
                    <div class="p-8 text-center text-xs text-slate-400">
                        Belum ada pesan kontak masuk.
                    </div>
                @endforelse
            </div>
        </div>

    </div>

</div>
@endsection


@extends('layouts.admin')

@section('title', 'Integrasi GitHub REST API')
@section('header_title', 'Konfigurasi & Sinkronisasi GitHub')

@section('content')
<div class="space-y-8">
    
    <!-- Top Action & Connection Health Box -->
    <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
                <h2 class="text-xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                    <i data-lucide="github" class="w-5 h-5 text-indigo-500"></i>
                    <span>Status Koneksi GitHub REST API</span>
                </h2>
                <p class="text-xs text-slate-500 mt-1">
                    Sinkronisasi repositori otomatis untuk proyek bertopik <code class="text-indigo-400 font-mono">{{ $topic ?: 'portfolio' }}</code>.
                </p>
            </div>

            <!-- Manual Sync Button -->
            <form method="POST" action="{{ route('admin.github.sync') }}">
                @csrf
                <button type="submit" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all flex items-center space-x-2">
                    <i data-lucide="refresh-cw" class="w-4 h-4"></i>
                    <span>Tarik Data GitHub Sekarang</span>
                </button>
            </form>
        </div>

        <!-- Connection Test Box -->
        <div class="p-4 rounded-2xl border @if($connectionTest['success']) border-emerald-500/30 bg-emerald-500/5 @else border-rose-500/30 bg-rose-500/5 @endif flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-xl @if($connectionTest['success']) bg-emerald-500/20 text-emerald-500 @else bg-rose-500/20 text-rose-500 @endif flex items-center justify-center font-bold">
                    <i data-lucide="{{ $connectionTest['success'] ? 'check-circle' : 'alert-circle' }}" class="w-4 h-4"></i>
                </div>
                <div>
                    <div class="font-bold @if($connectionTest['success']) text-emerald-600 dark:text-emerald-400 @else text-rose-600 dark:text-rose-400 @endif">
                        {{ $connectionTest['message'] }}
                    </div>
                    @if($connectionTest['data'])
                        <div class="text-slate-500 mt-0.5">
                            Akun: <strong>{{ $connectionTest['data']['login'] }}</strong> &bull; Repositori Publik: {{ $connectionTest['data']['public_repos'] }}
                        </div>
                    @endif
                </div>
            </div>

            <div class="flex items-center space-x-4 font-mono text-slate-500">
                @if(isset($connectionTest['rate_limit_remaining']))
                    <span>Sisa Kuota API: <strong>{{ $connectionTest['rate_limit_remaining'] }}</strong> / {{ $connectionTest['rate_limit_limit'] }}</span>
                @endif
                @if($lastSynced)
                    <span>Terakhir Sync: <strong>{{ date('d M H:i', strtotime($lastSynced)) }}</strong></span>
                @endif
            </div>
        </div>
    </div>

    <!-- Configuration Form -->
    <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
        <div>
            <h2 class="text-lg font-bold text-slate-900 dark:text-white">Pengaturan Akun & Filter</h2>
            <p class="text-xs text-slate-500">Atur username GitHub, kata kunci topik yang disinkronkan, dan durasi cache.</p>
        </div>

        <form method="POST" action="{{ route('admin.github.settings') }}" class="space-y-4">
            @csrf

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Username GitHub *</label>
                    <input type="text" name="github_username" value="{{ old('github_username', $username) }}" placeholder="cth. torvalds" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Filter Topik Repositori</label>
                    <input type="text" name="github_topic" value="{{ old('github_topic', $topic) }}" placeholder="portfolio (kosongkan untuk semua)" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Durasi Cache (Detik)</label>
                    <input type="number" name="github_cache_ttl" value="{{ old('github_cache_ttl', $cacheTtl) }}" min="60" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>
            </div>

            <div class="pt-2">
                <button type="submit" class="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-all">
                    Simpan Pengaturan GitHub
                </button>
            </div>
        </form>
    </div>

    <!-- Detected Public Repositories List -->
    <div class="space-y-4">
        <div class="flex items-center justify-between">
            <div>
                <h2 class="text-lg font-bold text-slate-900 dark:text-white">Repositori GitHub Terdeteksi</h2>
                <p class="text-xs text-slate-500">Daftar repositori publik yang ditemukan pada akun GitHub Anda.</p>
            </div>
            @if(!empty($reposData['from_cache']))
                <span class="px-2.5 py-1 rounded-full text-[10px] font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    Data Cache Aktif
                </span>
            @endif
        </div>

        <div class="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <div class="overflow-x-auto">
                <table class="w-full text-left text-xs">
                    <thead class="bg-slate-50 dark:bg-slate-800/60 text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                        <tr>
                            <th class="p-4">Repositori</th>
                            <th class="p-4">Bahasa</th>
                            <th class="p-4">Bintang / Fork</th>
                            <th class="p-4">Topik</th>
                            <th class="p-4">Kesesuaian Portfolio</th>
                            <th class="p-4 text-right">Status Sync</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800/80">
                        @forelse($reposData['repos'] ?? [] as $repo)
                            @php 
                                $isExcluded = in_array($repo['id'], $excludedRepoIds);
                            @endphp
                            <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                <td class="p-4">
                                    <div class="font-bold text-slate-900 dark:text-white">{{ $repo['name'] }}</div>
                                    <div class="text-[11px] text-slate-400 font-mono truncate max-w-xs">{{ $repo['html_url'] }}</div>
                                </td>
                                <td class="p-4 font-mono text-slate-600 dark:text-slate-300">
                                    {{ $repo['language'] ?: '—' }}
                                </td>
                                <td class="p-4 font-mono">
                                    ★ {{ $repo['stars'] }} &bull; ⑂ {{ $repo['forks'] }}
                                </td>
                                <td class="p-4">
                                    <div class="flex flex-wrap gap-1 max-w-xs">
                                        @forelse($repo['topics'] as $t)
                                            <span class="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                                                {{ $t }}
                                            </span>
                                        @empty
                                            <span class="text-slate-400 text-[11px]">Tanpa topik</span>
                                        @endforelse
                                    </div>
                                </td>
                                <td class="p-4">
                                    @if($repo['matches_portfolio_topic'])
                                        <span class="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-500">
                                            <i data-lucide="check" class="w-3 h-3"></i>
                                            <span>Sesuai</span>
                                        </span>
                                    @else
                                        <span class="text-slate-400 text-[11px]">Tidak sesuai topik</span>
                                    @endif
                                </td>
                                <td class="p-4 text-right">
                                    <form method="POST" action="{{ route('admin.github.toggle-exclude') }}">
                                        @csrf
                                        <input type="hidden" name="repo_id" value="{{ $repo['id'] }}">
                                        <button type="submit" class="px-2.5 py-1 rounded-lg text-[10px] font-semibold {{ $isExcluded ? 'bg-rose-500/15 text-rose-500 hover:bg-rose-500/25' : 'bg-indigo-500/15 text-indigo-500 hover:bg-indigo-500/25' }}">
                                            {{ $isExcluded ? 'Dikecualikan (Klik Aktifkan)' : 'Aktif Disinkron' }}
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="6" class="p-8 text-center text-slate-400">
                                    Tidak ada repositori terdeteksi. Pastikan username GitHub telah dikonfigurasi dengan benar.
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Sync Logs Table -->
    <div class="space-y-4">
        <h2 class="text-lg font-bold text-slate-900 dark:text-white">Riwayat Sinkronisasi (Log)</h2>
        <div class="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <table class="w-full text-left text-xs">
                <thead class="bg-slate-50 dark:bg-slate-800/60 text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                    <tr>
                        <th class="p-3.5">Waktu</th>
                        <th class="p-3.5">Status</th>
                        <th class="p-3.5">Dipicu Oleh</th>
                        <th class="p-3.5">Repositori</th>
                        <th class="p-3.5">Keterangan</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800/80">
                    @forelse($syncLogs as $log)
                        <tr>
                            <td class="p-3.5 font-mono text-slate-500">{{ $log->created_at->format('d M Y H:i:s') }}</td>
                            <td class="p-3.5">
                                <span class="px-2 py-0.5 rounded text-[10px] font-bold {{ $log->status === 'success' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500' }}">
                                    {{ strtoupper($log->status) }}
                                </span>
                            </td>
                            <td class="p-3.5 font-mono text-slate-400">{{ $log->triggered_by }}</td>
                            <td class="p-3.5 font-semibold text-slate-700 dark:text-slate-300">{{ $log->repositories_count }} repo</td>
                            <td class="p-3.5 text-slate-500">{{ $log->message }}</td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="5" class="p-6 text-center text-slate-400">Belum ada riwayat log sinkronisasi.</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>

</div>
@endsection


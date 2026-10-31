@extends('layouts.admin')

@section('title', 'Kelola Pengalaman')
@section('header_title', 'Kelola Riwayat Pengalaman')

@section('content')
<div class="space-y-6">
    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-bold text-slate-900 dark:text-white">Riwayat Pengalaman</h1>
            <p class="text-xs text-slate-500">Kelola timeline karir, tanggung jawab, dan peran profesional.</p>
        </div>
        <a href="{{ route('admin.experiences.create') }}" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all flex items-center space-x-1.5">
            <i data-lucide="plus" class="w-4 h-4"></i>
            <span>Tambah Pengalaman</span>
        </a>
    </div>

    <div class="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
        <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 dark:bg-slate-800/60 text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                    <th class="p-4">Peran / Posisi</th>
                    <th class="p-4">Perusahaan / Organisasi</th>
                    <th class="p-4">Periode</th>
                    <th class="p-4">Status</th>
                    <th class="p-4 text-right">Aksi</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800/80">
                @forelse($experiences as $exp)
                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                        <td class="p-4 font-bold text-slate-900 dark:text-white">
                            {{ $exp->role }}
                            @if($exp->is_current)
                                <span class="ml-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-500">Sekarang</span>
                            @endif
                        </td>
                        <td class="p-4 text-slate-600 dark:text-slate-300">{{ $exp->company }}</td>
                        <td class="p-4 font-mono text-slate-400">{{ $exp->period }}</td>
                        <td class="p-4">
                            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold {{ $exp->is_published ? 'bg-emerald-500/15 text-emerald-500' : 'bg-slate-500/15 text-slate-400' }}">
                                {{ $exp->is_published ? 'Publik' : 'Draft' }}
                            </span>
                        </td>
                        <td class="p-4 text-right space-x-2">
                            <a href="{{ route('admin.experiences.edit', $exp) }}" class="text-indigo-500 hover:underline font-semibold">Edit</a>
                            <span class="text-slate-300 dark:text-slate-700">&bull;</span>
                            <form method="POST" action="{{ route('admin.experiences.destroy', $exp) }}" class="inline" onsubmit="return confirm('Hapus pengalaman ini?')">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="text-rose-500 hover:underline font-semibold">Hapus</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="5" class="p-8 text-center text-slate-400">Belum ada riwayat pengalaman.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection


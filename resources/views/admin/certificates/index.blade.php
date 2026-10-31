@extends('layouts.admin')

@section('title', 'Kelola Sertifikat')
@section('header_title', 'Kelola Sertifikasi & Lisensi')

@section('content')
<div class="space-y-6">
    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-bold text-slate-900 dark:text-white">Sertifikat Profesional</h1>
            <p class="text-xs text-slate-500">Kelola lisensi, penerbit, nomor kredensial, dan verifikasi.</p>
        </div>
        <a href="{{ route('admin.certificates.create') }}" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all flex items-center space-x-1.5">
            <i data-lucide="plus" class="w-4 h-4"></i>
            <span>Tambah Sertifikat</span>
        </a>
    </div>

    <div class="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
        <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 dark:bg-slate-800/60 text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                    <th class="p-4">Sertifikat</th>
                    <th class="p-4">Penerbit</th>
                    <th class="p-4">Kategori</th>
                    <th class="p-4">Tanggal Terbit</th>
                    <th class="p-4">Status</th>
                    <th class="p-4 text-right">Aksi</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800/80">
                @forelse($certificates as $cert)
                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                        <td class="p-4">
                            <div class="flex items-center space-x-3">
                                <div class="w-9 h-9 rounded-lg bg-slate-800 overflow-hidden flex items-center justify-center text-slate-400 flex-shrink-0">
                                    @if($cert->image_path)
                                        <img src="{{ asset('storage/' . $cert->image_path) }}" alt="" class="w-full h-full object-cover">
                                    @else
                                        <i data-lucide="award" class="w-4 h-4 text-indigo-400"></i>
                                    @endif
                                </div>
                                <div class="font-bold text-slate-900 dark:text-white">{{ $cert->title }}</div>
                            </div>
                        </td>
                        <td class="p-4 text-slate-600 dark:text-slate-300">{{ $cert->issuer }}</td>
                        <td class="p-4 font-mono text-slate-400">{{ $cert->category }}</td>
                        <td class="p-4 font-mono text-slate-400">{{ $cert->issue_date ? $cert->issue_date->format('d M Y') : '—' }}</td>
                        <td class="p-4">
                            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold {{ $cert->is_published ? 'bg-emerald-500/15 text-emerald-500' : 'bg-slate-500/15 text-slate-400' }}">
                                {{ $cert->is_published ? 'Publik' : 'Draft' }}
                            </span>
                        </td>
                        <td class="p-4 text-right space-x-2">
                            <a href="{{ route('admin.certificates.edit', $cert) }}" class="text-indigo-500 hover:underline font-semibold">Edit</a>
                            <span class="text-slate-300 dark:text-slate-700">&bull;</span>
                            <form method="POST" action="{{ route('admin.certificates.destroy', $cert) }}" class="inline" onsubmit="return confirm('Hapus sertifikat ini?')">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="text-rose-500 hover:underline font-semibold">Hapus</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="6" class="p-8 text-center text-slate-400">Belum ada sertifikat.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection


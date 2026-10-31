@extends('layouts.admin')

@section('title', 'Pesan Kontak Masuk')
@section('header_title', 'Kotak Masuk Pesan')

@section('content')
<div class="space-y-6">
    <div>
        <h1 class="text-xl font-bold text-slate-900 dark:text-white">Pesan Kontak</h1>
        <p class="text-xs text-slate-500">Daftar pesan masuk dari formulir kontak website.</p>
    </div>

    <div class="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
        <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 dark:bg-slate-800/60 text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                    <th class="p-4">Pengirim</th>
                    <th class="p-4">Subjek</th>
                    <th class="p-4">Tanggal</th>
                    <th class="p-4">Status</th>
                    <th class="p-4 text-right">Aksi</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800/80">
                @forelse($messages as $msg)
                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors {{ !$msg->is_read ? 'bg-indigo-50/20 dark:bg-indigo-950/20' : '' }}">
                        <td class="p-4">
                            <div class="font-bold text-slate-900 dark:text-white">{{ $msg->name }}</div>
                            <div class="text-[11px] text-slate-400 font-mono">{{ $msg->email }}</div>
                        </td>
                        <td class="p-4 font-semibold text-slate-700 dark:text-slate-300">
                            {{ $msg->subject }}
                        </td>
                        <td class="p-4 font-mono text-slate-400">{{ $msg->created_at->format('d M Y H:i') }}</td>
                        <td class="p-4">
                            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold {{ $msg->is_read ? 'bg-slate-500/10 text-slate-400' : 'bg-rose-500/15 text-rose-500' }}">
                                {{ $msg->is_read ? 'Sudah Dibaca' : 'Baru' }}
                            </span>
                        </td>
                        <td class="p-4 text-right space-x-2">
                            <a href="{{ route('admin.messages.show', $msg) }}" class="text-indigo-500 hover:underline font-semibold">Buka Pesan</a>
                            <span class="text-slate-300 dark:text-slate-700">&bull;</span>
                            <form method="POST" action="{{ route('admin.messages.destroy', $msg) }}" class="inline" onsubmit="return confirm('Hapus pesan ini?')">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="text-rose-500 hover:underline font-semibold">Hapus</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="5" class="p-8 text-center text-slate-400">Kotak masuk masih kosong.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
        <div class="p-4 border-t border-slate-100 dark:border-slate-800">
            {{ $messages->links() }}
        </div>
    </div>
</div>
@endsection


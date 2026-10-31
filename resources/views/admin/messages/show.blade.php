@extends('layouts.admin')

@section('title', 'Detail Pesan: ' . $message->subject)
@section('header_title', 'Detail Pesan Masuk')

@section('content')
<div class="max-w-3xl space-y-6">
    <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
        <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
                <span class="text-xs font-mono text-slate-400">{{ $message->created_at->format('d M Y, H:i') }} ({{ $message->created_at->diffForHumans() }})</span>
                <h1 class="text-xl font-bold text-slate-900 dark:text-white mt-1">{{ $message->subject }}</h1>
            </div>
            <a href="mailto:{{ $message->email }}?subject=Re: {{ rawurlencode($message->subject) }}" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all flex items-center space-x-1.5">
                <i data-lucide="reply" class="w-4 h-4"></i>
                <span>Balas via Email</span>
            </a>
        </div>

        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 space-y-2 text-xs">
            <div class="flex items-center justify-between">
                <span class="text-slate-500">Nama Pengirim:</span>
                <strong class="text-slate-800 dark:text-white">{{ $message->name }}</strong>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-slate-500">Email:</span>
                <a href="mailto:{{ $message->email }}" class="text-indigo-500 hover:underline font-mono">{{ $message->email }}</a>
            </div>
            @if($message->ip_address)
                <div class="flex items-center justify-between">
                    <span class="text-slate-500">IP Address:</span>
                    <span class="font-mono text-slate-400">{{ $message->ip_address }}</span>
                </div>
            @endif
        </div>

        <div class="space-y-2">
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400">Isi Pesan:</label>
            <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-line bg-white/40 dark:bg-slate-900/40">
                {{ $message->message }}
            </div>
        </div>

        <div class="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
            <a href="{{ route('admin.messages.index') }}" class="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center space-x-1">
                <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
                <span>Kembali ke Kotak Masuk</span>
            </a>

            <form method="POST" action="{{ route('admin.messages.destroy', $message) }}" onsubmit="return confirm('Hapus pesan ini?')">
                @csrf
                @method('DELETE')
                <button type="submit" class="px-3 py-1.5 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs font-semibold">
                    Hapus Pesan
                </button>
            </form>
        </div>
    </div>
</div>
@endsection


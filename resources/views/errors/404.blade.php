@extends('layouts.app')

@section('title', '404 — Halaman Tidak Ditemukan')

@section('content')
<div class="min-h-[70vh] flex items-center justify-center py-16 px-4">
    <div class="text-center space-y-6 max-w-md mx-auto glass-card p-10 rounded-3xl border border-slate-200 dark:border-slate-800">
        <div class="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mx-auto text-2xl font-bold font-mono">
            404
        </div>
        
        <div class="space-y-2">
            <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Halaman Tidak Ditemukan</h1>
            <p class="text-sm text-slate-600 dark:text-slate-400">
                Tautan yang Anda tuju mungkin telah dipindahkan atau tidak tersedia di server.
            </p>
        </div>

        <div class="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="{{ route('home') }}" class="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-md hover:bg-indigo-500 transition-colors">
                Kembali ke Beranda
            </a>
            <a href="{{ route('projects.index') }}" class="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs hover:border-indigo-500 transition-colors">
                Eksplorasi Proyek
            </a>
        </div>
    </div>
</div>
@endsection


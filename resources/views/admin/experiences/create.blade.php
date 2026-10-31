@extends('layouts.admin')

@section('title', 'Tambah Pengalaman')
@section('header_title', 'Tambah Riwayat Pengalaman')

@section('content')
<div class="max-w-2xl space-y-6">
    <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
        <div>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">Form Pengalaman</h2>
            <p class="text-xs text-slate-500">Masukkan rincian peran, perusahaan, periode, dan tanggung jawab utama.</p>
        </div>

        <form method="POST" action="{{ route('admin.experiences.store') }}" class="space-y-4">
            @csrf

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Posisi / Peran *</label>
                    <input type="text" name="role" value="{{ old('role') }}" required placeholder="Senior Backend Developer" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Nama Perusahaan / Klien *</label>
                    <input type="text" name="company" value="{{ old('company') }}" required placeholder="PT Teknologi Digital" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Periode (Teks) *</label>
                    <input type="text" name="period" value="{{ old('period') }}" required placeholder="2022 — Sekarang" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Lokasi</label>
                    <input type="text" name="location" value="{{ old('location') }}" placeholder="Jakarta (Remote)" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Website Perusahaan (Opsional)</label>
                <input type="url" name="company_url" value="{{ old('company_url') }}" placeholder="https://..." class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Deskripsi Ringkas</label>
                <textarea name="description" rows="2" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">{{ old('description') }}</textarea>
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Tanggung Jawab / Pencapaian (Satu baris per poin)</label>
                <textarea name="key_responsibilities" rows="3" placeholder="Mengurangi latensi query sebesar 40%&#10;Mengembangkan microservice pembayaran aman" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">{{ old('key_responsibilities') }}</textarea>
            </div>

            <div class="flex items-center space-x-6 pt-2">
                <label class="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                    <input type="checkbox" name="is_current" value="1" class="rounded text-indigo-600 focus:ring-indigo-500">
                    <span>Posisi Saat Ini</span>
                </label>

                <label class="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                    <input type="checkbox" name="is_published" value="1" checked class="rounded text-indigo-600 focus:ring-indigo-500">
                    <span>Publikasikan</span>
                </label>
            </div>

            <div class="pt-4 flex items-center space-x-3">
                <button type="submit" class="px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all">
                    Simpan
                </button>
                <a href="{{ route('admin.experiences.index') }}" class="px-6 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs">
                    Batal
                </a>
            </div>
        </form>
    </div>
</div>
@endsection


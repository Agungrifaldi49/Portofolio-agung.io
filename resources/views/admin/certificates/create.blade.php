@extends('layouts.admin')

@section('title', 'Tambah Sertifikat')
@section('header_title', 'Tambah Sertifikat Baru')

@section('content')
<div class="w-full space-y-6">
    <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
        <div>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">Form Sertifikat</h2>
            <p class="text-xs text-slate-500">Isi rincian lisensi, tautan verifikasi, dan gambar sertifikat.</p>
        </div>

        <form method="POST" action="{{ route('admin.certificates.store') }}" enctype="multipart/form-data" class="space-y-4">
            @csrf

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Nama Sertifikat *</label>
                    <input type="text" name="title" value="{{ old('title') }}" required class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Penyelenggara / Penerbit *</label>
                    <input type="text" name="issuer" value="{{ old('issuer') }}" required class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Kategori *</label>
                    <input type="text" name="category" value="{{ old('category', 'Backend Development') }}" required class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Tanggal Penerbitan</label>
                    <input type="date" name="issue_date" value="{{ old('issue_date') }}" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Credential ID (Nomor Lisensi)</label>
                    <input type="text" name="credential_id" value="{{ old('credential_id') }}" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>

                <div class="space-y-1.5">
                    <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Tautan Verifikasi (URL)</label>
                    <input type="url" name="credential_url" value="{{ old('credential_url') }}" placeholder="https://..." class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">
                </div>
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Gambar Sertifikat (JPG, PNG, WebP max 3MB)</label>
                <input type="file" name="image" accept="image/*" class="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 dark:file:bg-indigo-950 file:text-indigo-600 dark:file:text-indigo-400">
            </div>

            <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">Deskripsi / Ruang Lingkup Materi</label>
                <textarea name="description" rows="2" class="w-full px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white">{{ old('description') }}</textarea>
            </div>

            <div class="pt-2">
                <label class="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                    <input type="checkbox" name="is_published" value="1" checked class="rounded text-indigo-600 focus:ring-indigo-500">
                    <span>Publikasikan ke Website</span>
                </label>
            </div>

            <div class="pt-4 flex items-center space-x-3">
                <button type="submit" class="px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all">
                    Simpan
                </button>
                <a href="{{ route('admin.certificates.index') }}" class="px-6 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs">
                    Batal
                </a>
            </div>
        </form>
    </div>
</div>
@endsection


@extends('layouts.app')

@section('title', 'Tentang Saya — ' . $profile->full_name)
@section('meta_description', Str::limit(strip_tags($profile->about_text), 160))

@section('content')
<div class="py-16">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <!-- Header -->
        <div class="space-y-4 text-center max-w-3xl mx-auto">
            <span class="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Biografi & Rekam Jejak</span>
            <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">Tentang Saya</h1>
            <p class="text-base text-slate-600 dark:text-slate-400">
                Mengenal lebih dekat dedikasi, prinsip rekayasa perangkat lunak, dan latar belakang profesional.
            </p>
        </div>

        <!-- Main Bio Card -->
        <div class="glass-card rounded-3xl p-8 sm:p-12 space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div class="md:col-span-4 flex justify-center">
                    <div class="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden glass-card p-2 border border-slate-200 dark:border-slate-800 shadow-xl">
                        @if($profile->avatar_path)
                            <img src="{{ asset('storage/' . $profile->avatar_path) }}" alt="{{ $profile->full_name }}" class="w-full h-full object-cover rounded-xl">
                        @else
                            <div class="w-full h-full rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-4xl font-extrabold font-mono">
                                {{ strtoupper(substr($profile->full_name, 0, 2)) }}
                            </div>
                        @endif
                    </div>
                </div>
                <div class="md:col-span-8 space-y-4">
                    <div class="space-y-1">
                        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">{{ $profile->full_name }}</h2>
                        <p class="text-indigo-600 dark:text-indigo-400 font-mono text-sm font-semibold">{{ $profile->title }}</p>
                        @if($profile->location)
                            <p class="text-xs text-slate-500 flex items-center space-x-1 pt-1">
                                <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
                                <span>{{ $profile->location }}</span>
                            </p>
                        @endif
                    </div>
                    
                    <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                        {{ $profile->about_text ?: $profile->bio }}
                    </p>

                    <!-- Download CV Action -->
                    <div class="pt-4 flex flex-wrap gap-4">
                        @if($profile->resume_path)
                            <a href="{{ route('about.cv') }}" class="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-md transition-all">
                                <i data-lucide="download" class="w-4 h-4"></i>
                                <span>Unduh Resume Lengkap (PDF)</span>
                            </a>
                        @else
                            <button type="button" disabled class="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-400 text-sm cursor-not-allowed">
                                <i data-lucide="file-text" class="w-4 h-4"></i>
                                <span>Resume Belum Diunggah</span>
                            </button>
                        @endif
                        <a href="{{ route('contact') }}" class="inline-flex items-center space-x-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-indigo-500 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-colors">
                            <i data-lucide="mail" class="w-4 h-4"></i>
                            <span>Hubungi Langsung</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Principles & Focus -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="glass-card p-6 rounded-2xl space-y-3">
                <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                    <i data-lucide="layers" class="w-5 h-5"></i>
                </div>
                <h3 class="font-bold text-lg text-slate-900 dark:text-white">Clean Architecture</h3>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Menghasilkan struktur kode modular, teruji (testable), dan mudah dirawat jangka panjang dengan prinsip SOLID.
                </p>
            </div>
            <div class="glass-card p-6 rounded-2xl space-y-3">
                <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                    <i data-lucide="zap" class="w-5 h-5"></i>
                </div>
                <h3 class="font-bold text-lg text-slate-900 dark:text-white">High Performance</h3>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Optimasi query SQL, indexing berlapis, caching Redis, dan eliminasi bottleneck I/O untuk latensi minimal.
                </p>
            </div>
            <div class="glass-card p-6 rounded-2xl space-y-3">
                <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <i data-lucide="shield-check" class="w-5 h-5"></i>
                </div>
                <h3 class="font-bold text-lg text-slate-900 dark:text-white">Robust Security</h3>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Proteksi ketat terhadap CSRF, XSS, SQL Injection, autentikasi berbasis otorisasi, dan enkripsi data sensitif.
                </p>
            </div>
        </div>

        <!-- Education History -->
        <div class="space-y-6">
            <div class="flex items-center space-x-2">
                <i data-lucide="graduation-cap" class="w-6 h-6 text-indigo-500"></i>
                <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Riwayat Pendidikan</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                @forelse($educations as $edu)
                    <div class="glass-card p-6 rounded-2xl space-y-2">
                        <span class="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">{{ $edu->period }}</span>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white">{{ $edu->degree }}</h3>
                        <p class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $edu->institution }}</p>
                        @if($edu->field_of_study)
                            <p class="text-xs text-slate-500 dark:text-slate-400">Bidang: {{ $edu->field_of_study }}</p>
                        @endif
                        @if($edu->description)
                            <p class="text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/80 leading-relaxed">
                                {{ $edu->description }}
                            </p>
                        @endif
                    </div>
                @empty
                    <div class="col-span-2 text-center py-8 text-slate-400 text-sm">
                        Belum ada riwayat pendidikan yang dipublikasikan.
                    </div>
                @endforelse
            </div>
        </div>

    </div>
</div>
@endsection


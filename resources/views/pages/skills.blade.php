@extends('layouts.app')

@section('title', 'Keahlian Teknis & Instrumen — ' . $profile->full_name)
@section('meta_description', 'Katalog keahlian teknis pemrograman, basis data, arsitektur backend, dan perangkat DevOps.')

@section('content')
<div class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4">
            <span class="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Teknologi & Instrumen</span>
            <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">Keahlian & Penguasaan Teknis</h1>
            <p class="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Keahlian teknis yang digunakan secara nyata dalam perancangan aplikasi produksi, dipetakan secara objektif berdasarkan tingkat spesialisasi tanpa persentase fiktif.
            </p>
        </div>

        <!-- Grouped Skills by Category -->
        <div class="space-y-12">
            @foreach($skillsByCategory as $category => $skills)
                <div class="space-y-6">
                    <div class="flex items-center space-x-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                        <div class="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                            <i data-lucide="check" class="w-4 h-4"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">{{ $category }}</h2>
                        <span class="text-xs font-mono text-slate-400">({{ count($skills) }} teknologi)</span>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        @foreach($skills as $skill)
                            <div class="glass-card spotlight-card card-hover-3d p-6 rounded-2xl space-y-3 group hover:border-indigo-500/50 hover:shadow-lg transition-all duration-300 reveal-on-scroll reveal-delay-{{ ($loop->index % 3) + 1 }}">
                                <div class="flex items-start justify-between">
                                    <div class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <i data-lucide="{{ $skill->icon ?: 'code' }}" class="w-5 h-5"></i>
                                    </div>
                                    @if($skill->level_label)
                                        <span class="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                                            {{ $skill->level_label }}
                                        </span>
                                    @endif
                                </div>

                                <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                                    {{ $skill->name }}
                                </h3>

                                @if($skill->description)
                                    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {{ $skill->description }}
                                    </p>
                                @endif
                            </div>
                        @endforeach
                    </div>
                </div>
            @endforeach
        </div>

    </div>
</div>
@endsection


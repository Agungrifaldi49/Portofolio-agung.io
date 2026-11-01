@extends('layouts.app')

@section('title', $project->title . ' — Studi Kasus Portofolio')
@section('meta_description', $project->excerpt ?: Str::limit(strip_tags($project->description), 160))

@section('content')
<div class="py-12 sm:py-16">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <!-- Breadcrumbs & Meta -->
        <div class="space-y-4">
            <nav class="flex items-center space-x-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                <a href="{{ route('home') }}" class="hover:text-indigo-600">Home</a>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                <a href="{{ route('projects.index') }}" class="hover:text-indigo-600">Projects</a>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                <span class="text-slate-800 dark:text-slate-200 truncate">{{ $project->title }}</span>
            </nav>

            <div class="flex flex-wrap items-center gap-2">
                @if($project->category)
                    <span class="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                        {{ $project->category->name }}
                    </span>
                @endif
                @if($project->is_featured)
                    <span class="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/30 flex items-center space-x-1">
                        <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
                        <span>Featured Project</span>
                    </span>
                @endif
                @if($project->source_type === 'github')
                    <span class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center space-x-1">
                        <i data-lucide="github" class="w-3.5 h-3.5"></i>
                        <span>GitHub Repository</span>
                    </span>
                @endif
            </div>

            <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {{ $project->title }}
            </h1>

            <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {{ $project->excerpt }}
            </p>
        </div>

        <!-- Cover Media / Web Index Preview -->
        @php $coverUrl = $project->cover_image_url; @endphp
        @if($coverUrl)
            <div class="rounded-3xl overflow-hidden glass-card border border-slate-200 dark:border-slate-800 shadow-2xl w-full bg-slate-950">
                <!-- Browser Window Bar -->
                <div class="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs select-none">
                    <div class="flex items-center space-x-2">
                        <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                        <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                        <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    </div>
                    <div class="flex items-center space-x-2 px-4 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 max-w-md truncate">
                        <i data-lucide="lock" class="w-3.5 h-3.5 text-emerald-400 flex-shrink-0"></i>
                        <span class="truncate">{{ $project->demo_url ?: ($project->repo_url ?: 'https://' . Str::slug($project->title) . '.dev') }}</span>
                    </div>
                    <div class="text-[11px] font-mono text-slate-500">
                        {{ $project->source_type === 'github' ? 'GitHub Live Preview' : 'Tampilan Proyek' }}
                    </div>
                </div>
                <!-- Preview Image -->
                <div class="aspect-video w-full overflow-hidden bg-slate-950">
                    <img src="{{ $coverUrl }}" alt="{{ $project->title }}" class="w-full h-full object-cover object-top">
                </div>
            </div>
        @endif

        <!-- Action Links Toolbar -->
        <div class="glass-card rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
            <div class="flex flex-wrap items-center gap-3">
                @if($project->demo_url)
                    <a href="{{ $project->demo_url }}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center space-x-2 shadow-md transition-all">
                        <span>Buka Live Demo</span>
                        <i data-lucide="external-link" class="w-4 h-4"></i>
                    </a>
                @endif
                @if($project->repo_url)
                    <a href="{{ $project->repo_url }}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-indigo-500 text-slate-700 dark:text-slate-200 font-semibold text-sm flex items-center space-x-2 transition-all">
                        <i data-lucide="github" class="w-4 h-4"></i>
                        <span>Source Code</span>
                    </a>
                @endif
                @if($project->documentation_url)
                    <a href="{{ $project->documentation_url }}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm flex items-center space-x-2">
                        <i data-lucide="book-open" class="w-4 h-4"></i>
                        <span>Dokumentasi</span>
                    </a>
                @endif
            </div>

            <!-- GitHub Metrics if Synced -->
            @if($project->source_type === 'github' || $project->github_stars > 0)
                <div class="flex items-center space-x-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span class="flex items-center space-x-1">
                        <i data-lucide="star" class="w-4 h-4 text-amber-500 fill-amber-500"></i>
                        <span>{{ $project->github_stars }} stars</span>
                    </span>
                    <span class="flex items-center space-x-1">
                        <i data-lucide="git-fork" class="w-4 h-4 text-slate-400"></i>
                        <span>{{ $project->github_forks }} forks</span>
                    </span>
                </div>
            @endif
        </div>

        <!-- Tech Stack Used -->
        @if($project->technologies->isNotEmpty())
            <div class="space-y-3">
                <h3 class="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Teknologi yang Digunakan</h3>
                <div class="flex flex-wrap gap-2">
                    @foreach($project->technologies as $tech)
                        <span class="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                            <i data-lucide="{{ $tech->icon ?: 'code' }}" class="w-3.5 h-3.5 text-indigo-500"></i>
                            <span>{{ $tech->name }}</span>
                        </span>
                    @endforeach
                </div>
            </div>
        @endif

        <!-- Case Study Sections -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Problem Statement -->
            @if($project->problem_statement)
                <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-3">
                    <div class="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">
                        <i data-lucide="help-circle" class="w-5 h-5"></i>
                    </div>
                    <h2 class="text-xl font-bold text-slate-900 dark:text-white">Latar Belakang Masalah</h2>
                    <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                        {{ $project->problem_statement }}
                    </p>
                </div>
            @endif

            <!-- Project Goal -->
            @if($project->project_goal)
                <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-3">
                    <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
                        <i data-lucide="target" class="w-5 h-5"></i>
                    </div>
                    <h2 class="text-xl font-bold text-slate-900 dark:text-white">Tujuan Proyek</h2>
                    <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                        {{ $project->project_goal }}
                    </p>
                </div>
            @endif
        </div>

        <!-- Key Features -->
        @if(!empty($project->key_features))
            <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-4">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                        <i data-lucide="check-circle" class="w-5 h-5"></i>
                    </div>
                    <h2 class="text-xl font-bold text-slate-900 dark:text-white">Fitur Utama & Keunggulan Arsitektur</h2>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    @foreach($project->key_features as $feature)
                        <div class="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            <i data-lucide="arrow-right-circle" class="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5"></i>
                            <span>{{ $feature }}</span>
                        </div>
                    @endforeach
                </div>
            </div>
        @endif

        <!-- Challenges & Solutions -->
        @if($project->challenges || $project->solutions)
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                @if($project->challenges)
                    <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-3">
                        <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                            <i data-lucide="alert-octagon" class="w-5 h-5"></i>
                        </div>
                        <h2 class="text-xl font-bold text-slate-900 dark:text-white">Tantangan Teknis</h2>
                        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                            {{ $project->challenges }}
                        </p>
                    </div>
                @endif

                @if($project->solutions)
                    <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-3">
                        <div class="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                            <i data-lucide="lightbulb" class="w-5 h-5"></i>
                        </div>
                        <h2 class="text-xl font-bold text-slate-900 dark:text-white">Solusi yang Diterapkan</h2>
                        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                            {{ $project->solutions }}
                        </p>
                    </div>
                @endif
            </div>
        @endif

        <!-- Full Detailed Description -->
        @if($project->description)
            <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-4">
                <h2 class="text-xl font-bold text-slate-900 dark:text-white">Deskripsi Lengkap</h2>
                <div class="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
                    {{ $project->description }}
                </div>
            </div>
        @endif

        <!-- Related Projects -->
        @if($relatedProjects->isNotEmpty())
            <div class="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
                <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Proyek Terkait Lainnya</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    @foreach($relatedProjects as $rel)
                        @include('components.project-card', ['project' => $rel])
                    @endforeach
                </div>
            </div>
        @endif

    </div>
</div>
@endsection


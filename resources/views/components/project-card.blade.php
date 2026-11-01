@props(['project'])

@php
    $coverUrl = $project->cover_image_url;
    $displayDomain = $project->demo_url 
        ? (parse_url($project->demo_url, PHP_URL_HOST) ?: $project->demo_url)
        : ($project->github_full_name ? 'github.com/' . $project->github_full_name : Str::slug($project->title) . '.app');
@endphp

<article class="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
    <!-- Window / Index Browser Header & Cover Preview -->
    <div class="relative w-full overflow-hidden bg-slate-950 border-b border-slate-200/60 dark:border-slate-800/80 flex flex-col">
        
        <!-- Simulated Browser / App Window Topbar -->
        <div class="px-3.5 py-2.5 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between text-xs select-none z-10">
            <!-- Window controls -->
            <div class="flex items-center space-x-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>

            <!-- Simulated Address Bar (Index Page URL) -->
            <div class="flex items-center space-x-1.5 px-3 py-0.5 rounded-md bg-slate-950/70 border border-slate-800 text-[11px] font-mono text-slate-400 max-w-[200px] sm:max-w-[240px] truncate">
                <i data-lucide="lock" class="w-3 h-3 text-emerald-400 flex-shrink-0"></i>
                <span class="truncate">{{ $displayDomain }}</span>
            </div>

            <!-- Featured / GitHub Indicator -->
            <div class="flex items-center space-x-1">
                @if($project->is_featured)
                    <span class="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        <i data-lucide="sparkles" class="w-2.5 h-2.5 fill-current"></i>
                        <span>Featured</span>
                    </span>
                @elseif($project->source_type === 'github')
                    <span class="text-slate-400 hover:text-white" title="GitHub Repo">
                        <i data-lucide="github" class="w-3.5 h-3.5"></i>
                    </span>
                @endif
            </div>
        </div>

        <!-- Viewport Area: Image or Simulated Web App Index Screen -->
        <div class="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
            @if($coverUrl)
                <!-- Real Screenshot / OpenGraph Banner -->
                <img 
                    src="{{ $coverUrl }}" 
                    alt="{{ $project->title }}" 
                    class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onerror="this.classList.add('hidden'); this.nextElementSibling.classList.remove('hidden');"
                >
            @endif

            <!-- Simulated Web Application Index Page Mockup (Fallback or Default) -->
            <div class="{{ $coverUrl ? 'hidden' : '' }} w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/50 p-4 flex flex-col justify-between font-mono text-[10px] select-none text-slate-400">
                <!-- Mini Index Navbar -->
                <div class="flex items-center justify-between pb-2 border-b border-slate-800/80">
                    <div class="flex items-center space-x-2">
                        <div class="w-4 h-4 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold text-[9px]">
                            {{ strtoupper(substr($project->title, 0, 1)) }}
                        </div>
                        <span class="font-bold text-slate-200 text-xs truncate max-w-[140px]">{{ $project->title }}</span>
                    </div>
                    <div class="flex items-center space-x-2 text-[9px] text-slate-500">
                        <span class="px-1.5 py-0.5 rounded bg-slate-800">Index</span>
                        <span class="hidden sm:inline px-1.5 py-0.5 rounded bg-slate-800">Docs</span>
                        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="System Online"></span>
                    </div>
                </div>

                <!-- Mini Hero / Index Metric Cards -->
                <div class="grid grid-cols-3 gap-2 py-2">
                    <div class="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                        <div class="text-[9px] text-slate-500">Status</div>
                        <div class="font-bold text-emerald-400 text-[11px] truncate mt-0.5">Active</div>
                    </div>
                    <div class="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                        <div class="text-[9px] text-slate-500">Stack</div>
                        <div class="font-bold text-indigo-400 text-[11px] truncate mt-0.5">{{ $project->github_language ?: 'PHP / Web' }}</div>
                    </div>
                    <div class="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                        <div class="text-[9px] text-slate-500">Stars</div>
                        <div class="font-bold text-amber-400 text-[11px] truncate mt-0.5">★ {{ $project->github_stars ?: 0 }}</div>
                    </div>
                </div>

                <!-- Mini Index Content Preview / Terminal lines -->
                <div class="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1">
                    <div class="flex items-center justify-between text-[9px]">
                        <span class="text-indigo-400 font-semibold truncate">{{ $project->title }} v1.0</span>
                        <span class="text-slate-500">HTTP/2 200 OK</span>
                    </div>
                    <div class="h-1.5 w-3/4 rounded-full bg-slate-800"></div>
                    <div class="h-1.5 w-1/2 rounded-full bg-slate-800/60"></div>
                </div>
            </div>

            <!-- Soft Gradient Overlay on hover -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none"></div>
        </div>
    </div>

    <!-- Content Body -->
    <div class="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div class="space-y-2.5">
            <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span class="font-medium text-indigo-600 dark:text-indigo-400">
                    {{ $project->category->name ?? 'Open Source' }}
                </span>
                @if($project->github_stars > 0)
                    <span class="inline-flex items-center space-x-1 text-amber-500 font-mono">
                        <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-500"></i>
                        <span>{{ $project->github_stars }}</span>
                    </span>
                @endif
            </div>

            <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                <a href="{{ route('projects.show', $project->slug) }}">
                    {{ $project->title }}
                </a>
            </h3>

            <p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {{ $project->excerpt ?: Str::limit(strip_tags($project->description), 120) }}
            </p>
        </div>

        <!-- Tech Badges -->
        @if($project->technologies->isNotEmpty())
            <div class="flex flex-wrap gap-1.5 pt-1">
                @foreach($project->technologies->take(4) as $tech)
                    <span class="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50">
                        {{ $tech->name }}
                    </span>
                @endforeach
                @if($project->technologies->count() > 4)
                    <span class="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-mono text-slate-500">
                        +{{ $project->technologies->count() - 4 }}
                    </span>
                @endif
            </div>
        @endif

        <!-- Card Footer Actions -->
        <div class="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-medium">
            <a href="{{ route('projects.show', $project->slug) }}" class="inline-flex items-center space-x-1 text-indigo-600 dark:text-indigo-400 hover:underline">
                <span>Detail Studi Kasus</span>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            </a>

            <div class="flex items-center space-x-2">
                @if($project->repo_url)
                    <a href="{{ $project->repo_url }}" target="_blank" rel="noopener noreferrer" class="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors" title="Lihat Source Code di GitHub">
                        <i data-lucide="github" class="w-4 h-4"></i>
                    </a>
                @endif
                @if($project->demo_url)
                    <a href="{{ $project->demo_url }}" target="_blank" rel="noopener noreferrer" class="p-1.5 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors" title="Kunjungi Live Demo">
                        <i data-lucide="external-link" class="w-4 h-4"></i>
                    </a>
                @endif
            </div>
        </div>
    </div>
</article>

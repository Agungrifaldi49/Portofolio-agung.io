@props(['project'])

<article class="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
    <!-- Cover Image or Sleek Gradient Header -->
    <div class="relative h-48 w-full overflow-hidden bg-slate-900 border-b border-slate-200/60 dark:border-slate-800/80">
        @if($project->cover_image)
            <img 
                src="{{ asset('storage/' . $project->cover_image) }}" 
                alt="{{ $project->title }}" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
            >
        @else
            <!-- Elegant Code/Terminal Placeholder Pattern -->
            <div class="w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 flex flex-col justify-between p-4 font-mono text-xs text-slate-400 select-none">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-1.5">
                        <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                        <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    </div>
                    @if($project->source_type === 'github')
                        <span class="inline-flex items-center space-x-1 text-[11px] text-slate-400">
                            <i data-lucide="github" class="w-3.5 h-3.5"></i>
                            <span>GitHub Sync</span>
                        </span>
                    @endif
                </div>
                <div class="space-y-1">
                    <div class="text-indigo-400 text-sm font-semibold truncate">{{ $project->title }}</div>
                    <div class="text-[11px] text-slate-500 truncate">// {{ $project->github_language ?? 'Laravel / Full-Stack' }}</div>
                </div>
            </div>
        @endif

        <!-- Floating Badges -->
        <div class="absolute top-3 right-3 flex items-center space-x-1.5">
            @if($project->is_featured)
                <span class="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/90 text-white shadow-sm backdrop-blur-sm">
                    <i data-lucide="sparkles" class="w-3 h-3"></i>
                    <span>Featured</span>
                </span>
            @endif
        </div>
    </div>

    <!-- Content Body -->
    <div class="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div class="space-y-2.5">
            <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span class="font-medium text-indigo-600 dark:text-indigo-400">
                    {{ $project->category->name ?? 'General Project' }}
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
                    <a href="{{ $project->repo_url }}" target="_blank" rel="noopener noreferrer" class="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors" title="Lihat Source Code">
                        <i data-lucide="github" class="w-4 h-4"></i>
                    </a>
                @endif
                @if($project->demo_url)
                    <a href="{{ $project->demo_url }}" target="_blank" rel="noopener noreferrer" class="p-1.5 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" title="Live Demo">
                        <i data-lucide="external-link" class="w-4 h-4"></i>
                    </a>
                @endif
            </div>
        </div>
    </div>
</article>


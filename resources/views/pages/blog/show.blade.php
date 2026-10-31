@extends('layouts.app')

@section('title', $article->title . ' — Artikel Teknis')
@section('meta_description', $article->meta_description ?: ($article->excerpt ?: Str::limit(strip_tags($article->content), 160)))
@section('meta_keywords', $article->meta_keywords)
@section('og_type', 'article')

@section('content')
<div class="py-12 sm:py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <!-- Breadcrumb & Header -->
        <div class="space-y-4">
            <nav class="flex items-center space-x-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                <a href="{{ route('home') }}" class="hover:text-indigo-600">Home</a>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                <a href="{{ route('blog.index') }}" class="hover:text-indigo-600">Blog</a>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                <span class="text-slate-800 dark:text-slate-200 truncate">{{ $article->title }}</span>
            </nav>

            <div class="flex items-center space-x-3 text-xs">
                @if($article->category)
                    <span class="px-3 py-1 rounded-full font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                        {{ $article->category->name }}
                    </span>
                @endif
                <span class="flex items-center space-x-1 text-slate-500 font-mono">
                    <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                    <span>{{ $article->reading_time }} menit baca</span>
                </span>
                <span class="text-slate-400">&bull;</span>
                <span class="text-slate-500">{{ $article->published_at ? $article->published_at->format('d M Y') : 'Baru' }}</span>
            </div>

            <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {{ $article->title }}
            </h1>

            @if($article->excerpt)
                <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-4 border-indigo-500 pl-4 py-1">
                    {{ $article->excerpt }}
                </p>
            @endif
        </div>

        <!-- Cover Image -->
        @if($article->cover_image)
            <div class="rounded-3xl overflow-hidden glass-card border border-slate-200 dark:border-slate-800 shadow-xl aspect-video w-full bg-slate-950">
                <img src="{{ asset('storage/' . $article->cover_image) }}" alt="{{ $article->title }}" class="w-full h-full object-cover">
            </div>
        @endif

        <!-- Safe Parsed Markdown Content -->
        <div class="glass-card rounded-3xl p-6 sm:p-12 prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 leading-relaxed font-sans prose-headings:font-bold prose-headings:tracking-tight prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-pre:bg-slate-900 dark:prose-pre:bg-black/80 prose-pre:border prose-pre:border-slate-800 prose-code:font-mono prose-code:text-indigo-500">
            {!! $parsedContent !!}
        </div>

        <!-- Tags -->
        @if($article->tags->isNotEmpty())
            <div class="flex flex-wrap items-center gap-2 pt-4">
                <span class="text-xs font-semibold text-slate-400 mr-2">Topik Terkait:</span>
                @foreach($article->tags as $tag)
                    <a href="{{ route('blog.index', ['tag' => $tag->slug]) }}" class="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-500 transition-colors">
                        #{{ $tag->name }}
                    </a>
                @endforeach
            </div>
        @endif

        <!-- Author Bio Card -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 flex items-center space-x-6 border border-slate-200 dark:border-slate-800">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl font-bold font-mono flex-shrink-0">
                {{ strtoupper(substr(\App\Models\ProfileSetting::current()->full_name, 0, 2)) }}
            </div>
            <div class="space-y-1">
                <h4 class="text-base font-bold text-slate-900 dark:text-white">{{ \App\Models\ProfileSetting::current()->full_name }}</h4>
                <p class="text-xs text-indigo-600 dark:text-indigo-400 font-mono">{{ \App\Models\ProfileSetting::current()->title }}</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 max-w-xl">{{ \App\Models\ProfileSetting::current()->bio }}</p>
            </div>
        </div>

        <!-- Related Articles -->
        @if($relatedArticles->isNotEmpty())
            <div class="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
                <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Artikel Lainnya</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    @foreach($relatedArticles as $rel)
                        <div class="glass-card p-5 rounded-2xl space-y-2">
                            <span class="text-[11px] font-medium text-indigo-500">{{ $rel->category->name ?? 'Article' }}</span>
                            <h3 class="text-sm font-bold text-slate-900 dark:text-white line-clamp-2">
                                <a href="{{ route('blog.show', $rel->slug) }}" class="hover:text-indigo-500">
                                    {{ $rel->title }}
                                </a>
                            </h3>
                            <p class="text-xs text-slate-500 line-clamp-2">{{ $rel->excerpt ?: Str::limit(strip_tags($rel->content), 80) }}</p>
                        </div>
                    @endforeach
                </div>
            </div>
        @endif

    </div>
</div>
@endsection


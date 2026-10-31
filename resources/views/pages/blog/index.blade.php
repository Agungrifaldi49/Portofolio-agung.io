@extends('layouts.app')

@section('title', 'Artikel & Publikasi Teknis — ' . \App\Models\ProfileSetting::current()->full_name)
@section('meta_description', 'Artikel teknis seputar arsitektur Laravel, basis data, keamanan web, dan praktik Clean Code.')

@section('content')
<div class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4">
            <span class="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Publikasi & Insight</span>
            <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">Artikel & Blog Teknis</h1>
            <p class="text-base text-slate-600 dark:text-slate-400">
                Eksplorasi wawasan, dokumentasi solusi arsitektur, dan tutorial rekayasa perangkat lunak.
            </p>
        </div>

        <!-- Search & Filter Bar -->
        <div class="glass-card rounded-2xl p-4 sm:p-6">
            <form method="GET" action="{{ route('blog.index') }}" class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div class="sm:col-span-6 relative">
                    <i data-lucide="search" class="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
                    <input 
                        type="text" 
                        name="search" 
                        value="{{ request('search') }}" 
                        placeholder="Cari artikel berdasarkan judul atau topik..." 
                        class="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                </div>
                <div class="sm:col-span-4">
                    <select name="category" onchange="this.form.submit()" class="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-200">
                        <option value="">Semua Kategori</option>
                        @foreach($categories as $cat)
                            <option value="{{ $cat->slug }}" {{ request('category') === $cat->slug ? 'selected' : '' }}>
                                {{ $cat->name }}
                            </option>
                        @endforeach
                    </select>
                </div>
                <div class="sm:col-span-2">
                    <button type="submit" class="w-full py-2 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors">
                        Cari
                    </button>
                </div>
            </form>
        </div>

        <!-- Articles Grid -->
        @if($articles->isEmpty())
            <div class="glass-card rounded-3xl p-16 text-center space-y-3">
                <i data-lucide="book-open" class="w-12 h-12 mx-auto text-slate-400"></i>
                <h3 class="text-lg font-bold text-slate-800 dark:text-white">Tidak ada artikel ditemukan</h3>
                <p class="text-sm text-slate-500">Coba ubah kata kunci pencarian atau reset filter.</p>
            </div>
        @else
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @foreach($articles as $article)
                    <article class="glass-card rounded-3xl overflow-hidden flex flex-col group hover:border-indigo-500/50 hover:shadow-xl transition-all duration-300">
                        @if($article->cover_image)
                            <div class="h-48 w-full bg-slate-900 overflow-hidden">
                                <img src="{{ asset('storage/' . $article->cover_image) }}" alt="{{ $article->title }}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
                            </div>
                        @else
                            <div class="h-44 w-full bg-gradient-to-br from-slate-900 via-indigo-950/60 to-purple-950 flex flex-col justify-between p-6">
                                <span class="text-xs font-mono text-indigo-400">&lt;technical-article /&gt;</span>
                                <div class="text-white font-bold text-base line-clamp-2">{{ $article->title }}</div>
                            </div>
                        @endif

                        <div class="p-6 flex flex-col flex-grow justify-between space-y-4">
                            <div class="space-y-3">
                                <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                                    <span class="font-medium text-indigo-600 dark:text-indigo-400">
                                        {{ $article->category->name ?? 'Article' }}
                                    </span>
                                    <span class="flex items-center space-x-1 font-mono text-[11px]">
                                        <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                                        <span>{{ $article->reading_time }} mnt baca</span>
                                    </span>
                                </div>

                                <h2 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors line-clamp-2">
                                    <a href="{{ route('blog.show', $article->slug) }}">
                                        {{ $article->title }}
                                    </a>
                                </h2>

                                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                                    {{ $article->excerpt ?: Str::limit(strip_tags($article->content), 140) }}
                                </p>
                            </div>

                            <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                                <span>{{ $article->published_at ? $article->published_at->format('d M Y') : 'Baru saja' }}</span>
                                <a href="{{ route('blog.show', $article->slug) }}" class="inline-flex items-center space-x-1 font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                                    <span>Baca Lengkap</span>
                                    <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                                </a>
                            </div>
                        </div>
                    </article>
                @endforeach
            </div>

            <div class="pt-6">
                {{ $articles->links() }}
            </div>
        @endif

    </div>
</div>
@endsection


@extends('layouts.app')

@section('title', 'Katalog Proyek & Portofolio — ' . \App\Models\ProfileSetting::current()->full_name)
@section('meta_description', 'Eksplorasi kumpulan proyek aplikasi web, API, arsitektur database, dan repositori open-source GitHub.')

@section('content')
<div class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4">
            <span class="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Portofolio & Repositori</span>
            <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">Katalog Proyek</h1>
            <p class="text-base text-slate-600 dark:text-slate-400">
                Koleksi sistem perangkat lunak, pustaka open-source terintegrasi GitHub, dan studi kasus rekayasa backend/frontend.
            </p>
        </div>

        <!-- Filters & Search Toolbar -->
        <div class="glass-card rounded-2xl p-4 sm:p-6 space-y-4">
            <form method="GET" action="{{ route('projects.index') }}" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-center">
                <!-- Search Keyword -->
                <div class="lg:col-span-4 relative">
                    <i data-lucide="search" class="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
                    <input 
                        type="text" 
                        name="search" 
                        value="{{ request('search') }}" 
                        placeholder="Cari judul, topik, atau bahasa..." 
                        class="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                </div>

                <!-- Category Filter -->
                <div class="lg:col-span-3">
                    <select 
                        name="category" 
                        onchange="this.form.submit()" 
                        class="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">Semua Kategori</option>
                        @foreach($categories as $cat)
                            <option value="{{ $cat->slug }}" {{ request('category') === $cat->slug ? 'selected' : '' }}>
                                {{ $cat->name }}
                            </option>
                        @endforeach
                    </select>
                </div>

                <!-- Technology Filter -->
                <div class="lg:col-span-3">
                    <select 
                        name="tech" 
                        onchange="this.form.submit()" 
                        class="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">Semua Stack / Teknologi</option>
                        @foreach($technologies as $tech)
                            <option value="{{ $tech->slug }}" {{ request('tech') === $tech->slug ? 'selected' : '' }}>
                                {{ $tech->name }}
                            </option>
                        @endforeach
                    </select>
                </div>

                <!-- Quick Buttons / Submit -->
                <div class="lg:col-span-2 flex items-center space-x-2">
                    <button type="submit" class="w-full py-2 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors">
                        Filter
                    </button>
                    @if(request()->hasAny(['search', 'category', 'tech', 'featured', 'source']))
                        <a href="{{ route('projects.index') }}" class="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white" title="Reset Filter">
                            <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
                        </a>
                    @endif
                </div>
            </form>

            <!-- Quick Pill Toggles (Featured, GitHub Only, Manual) -->
            <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs">
                <span class="text-slate-400">Pintasan:</span>
                <a href="{{ route('projects.index', array_merge(request()->except('page', 'featured'), request('featured') ? [] : ['featured' => 1])) }}" class="px-2.5 py-1 rounded-lg border {{ request('featured') ? 'bg-indigo-600 text-white border-indigo-600' : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-indigo-500' }}">
                    Unggulan (Featured)
                </a>
                <a href="{{ route('projects.index', array_merge(request()->except('page', 'source'), request('source') === 'github' ? [] : ['source' => 'github'])) }}" class="px-2.5 py-1 rounded-lg border {{ request('source') === 'github' ? 'bg-indigo-600 text-white border-indigo-600' : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-indigo-500' }}">
                    Repositori GitHub
                </a>
                <a href="{{ route('projects.index', array_merge(request()->except('page', 'source'), request('source') === 'manual' ? [] : ['source' => 'manual'])) }}" class="px-2.5 py-1 rounded-lg border {{ request('source') === 'manual' ? 'bg-indigo-600 text-white border-indigo-600' : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-indigo-500' }}">
                    Proyek Mandiri
                </a>
            </div>
        </div>

        <!-- Projects Grid -->
        @if($projects->isEmpty())
            <div class="glass-card rounded-2xl p-16 text-center space-y-4">
                <i data-lucide="layers" class="w-12 h-12 mx-auto text-slate-400"></i>
                <h3 class="text-lg font-bold text-slate-800 dark:text-white">Tidak ada proyek yang sesuai kriteria</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                    Coba sesuaikan kata kunci pencarian Anda atau reset filter untuk menampilkan kembali semua proyek.
                </p>
                <div class="pt-2">
                    <a href="{{ route('projects.index') }}" class="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold">
                        <span>Tampilkan Semua Proyek</span>
                    </a>
                </div>
            </div>
        @else
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @foreach($projects as $project)
                    @include('components.project-card', ['project' => $project])
                @endforeach
            </div>

            <!-- Pagination -->
            <div class="pt-8">
                {{ $projects->links() }}
            </div>
        @endif

    </div>
</div>
@endsection


<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark" x-data :class="$store.theme.dark ? 'dark' : ''">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title', config('app.name', 'Developer Portfolio'))</title>
    <meta name="description" content="@yield('meta_description', \App\Models\SiteSetting::get('site_description', 'Portfolio profesional Senior Full-Stack Developer'))">
    <meta name="keywords" content="@yield('meta_keywords', \App\Models\SiteSetting::get('seo_keywords', 'developer, full-stack, laravel, php, portfolio'))">
    <link rel="canonical" href="{{ url()->current() }}">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="@yield('og_type', 'website')">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:title" content="@yield('title', config('app.name'))">
    <meta property="og:description" content="@yield('meta_description', \App\Models\SiteSetting::get('site_description', 'Portfolio profesional Senior Full-Stack Developer'))">
    <meta property="og:image" content="@yield('og_image', asset('storage/' . (\App\Models\ProfileSetting::current()->avatar_path ?? '')))">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="{{ url()->current() }}">
    <meta name="twitter:title" content="@yield('title', config('app.name'))">
    <meta name="twitter:description" content="@yield('meta_description', \App\Models\SiteSetting::get('site_description', 'Portfolio profesional Senior Full-Stack Developer'))">

    <!-- Preconnect Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Assets -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    @stack('styles')
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-[#0b0f19] dark:text-slate-100 flex flex-col min-h-screen selection:bg-indigo-500 selection:text-white">
    <!-- Dynamic Animated Background Glows & Tech Grid -->
    <div class="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <!-- Developer Subtle Dot Grid Pattern with Center Mask -->
        <div class="absolute inset-0 bg-grid-tech [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_65%,transparent_100%)] opacity-80"></div>
        
        <!-- Animated Aurora Glow Blobs -->
        <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-indigo-600/25 via-purple-600/20 to-cyan-500/20 blur-[130px] rounded-full animate-aurora dark:opacity-70 opacity-40"></div>
        <div class="absolute top-[35%] -right-40 w-[600px] h-[450px] bg-gradient-to-br from-purple-600/20 to-pink-600/15 blur-[140px] rounded-full animate-float-2 dark:opacity-50 opacity-30"></div>
        <div class="absolute -bottom-40 -left-40 w-[600px] h-[450px] bg-gradient-to-tr from-indigo-600/20 to-cyan-600/15 blur-[140px] rounded-full animate-float-1 dark:opacity-50 opacity-30"></div>
    </div>

    <!-- Navigation Header -->
    @include('components.navbar')

    <!-- Flash Notifications -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        @if(session('success'))
            <div class="p-4 mb-4 text-sm text-emerald-800 bg-emerald-50 rounded-xl border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60 flex items-center justify-between" role="alert">
                <div class="flex items-center space-x-3">
                    <i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-500"></i>
                    <span>{{ session('success') }}</span>
                </div>
                <button type="button" @click="$el.parentElement.remove()" class="text-emerald-600 hover:text-emerald-800 dark:hover:text-emerald-200">
                    <i data-lucide="x" class="w-4 h-4"></i>
                </button>
            </div>
        @endif

        @if(session('error'))
            <div class="p-4 mb-4 text-sm text-rose-800 bg-rose-50 rounded-xl border border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800/60 flex items-center justify-between" role="alert">
                <div class="flex items-center space-x-3">
                    <i data-lucide="alert-triangle" class="w-5 h-5 text-rose-500"></i>
                    <span>{{ session('error') }}</span>
                </div>
                <button type="button" @click="$el.parentElement.remove()" class="text-rose-600 hover:text-rose-800 dark:hover:text-rose-200">
                    <i data-lucide="x" class="w-4 h-4"></i>
                </button>
            </div>
        @endif
    </div>

    <!-- Main Content -->
    <main class="flex-grow">
        @yield('content')
    </main>

    <!-- Professional Footer -->
    @include('components.footer')

    @stack('scripts')
</body>
</html>


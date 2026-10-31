<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark" x-data :class="$store.theme.dark ? 'dark' : ''">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title', 'Admin Dashboard') — Portfolio Console</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-[#080d16] dark:text-slate-100 flex min-h-screen selection:bg-indigo-500 selection:text-white" x-data="{ sidebarOpen: false }">
    
    <!-- Mobile Sidebar Backdrop -->
    <div 
        x-show="sidebarOpen" 
        @click="sidebarOpen = false" 
        class="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden"
        style="display: none;"
    ></div>

    <!-- Sidebar -->
    <aside 
        class="fixed top-0 bottom-0 left-0 z-50 w-64 border-r border-slate-200 dark:border-slate-800/80 bg-white/95 dark:bg-[#0b0f19]/95 backdrop-blur-xl flex flex-col justify-between transition-transform duration-200 lg:translate-x-0"
        :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
    >
        <div class="p-6 space-y-6 overflow-y-auto">
            <!-- Brand -->
            <div class="flex items-center justify-between">
                <a href="{{ route('admin.dashboard') }}" class="flex items-center space-x-3">
                    <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                        P
                    </div>
                    <div>
                        <div class="font-extrabold text-sm text-slate-900 dark:text-white">Admin Console</div>
                        <div class="text-[10px] font-mono text-slate-500">v1.0 &bull; Laravel 10</div>
                    </div>
                </a>
                <button @click="sidebarOpen = false" class="lg:hidden text-slate-400 hover:text-white">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
            </div>

            <!-- Navigation Links -->
            <nav class="space-y-1 text-sm font-medium">
                <a href="{{ route('admin.dashboard') }}" class="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl transition-colors {{ request()->routeIs('admin.dashboard') ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white' }}">
                    <i data-lucide="layout-dashboard" class="w-4 h-4"></i>
                    <span>Dashboard</span>
                </a>

                <div class="pt-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3">Konten Portfolio</div>

                <a href="{{ route('admin.profile.edit') }}" class="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl transition-colors {{ request()->routeIs('admin.profile.*') ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white' }}">
                    <i data-lucide="user" class="w-4 h-4"></i>
                    <span>Profil & Resume</span>
                </a>

                <a href="{{ route('admin.projects.index') }}" class="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl transition-colors {{ request()->routeIs('admin.projects.*') ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white' }}">
                    <i data-lucide="folder-git-2" class="w-4 h-4"></i>
                    <span>Kelola Proyek</span>
                </a>

                <a href="{{ route('admin.github.index') }}" class="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl transition-colors {{ request()->routeIs('admin.github.*') ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white' }}">
                    <i data-lucide="github" class="w-4 h-4"></i>
                    <span>Integrasi GitHub</span>
                </a>

                <a href="{{ route('admin.skills.index') }}" class="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl transition-colors {{ request()->routeIs('admin.skills.*') ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white' }}">
                    <i data-lucide="cpu" class="w-4 h-4"></i>
                    <span>Keahlian (Skills)</span>
                </a>

                <a href="{{ route('admin.experiences.index') }}" class="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl transition-colors {{ request()->routeIs('admin.experiences.*') ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white' }}">
                    <i data-lucide="briefcase" class="w-4 h-4"></i>
                    <span>Pengalaman</span>
                </a>

                <a href="{{ route('admin.educations.index') }}" class="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl transition-colors {{ request()->routeIs('admin.educations.*') ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white' }}">
                    <i data-lucide="graduation-cap" class="w-4 h-4"></i>
                    <span>Pendidikan</span>
                </a>

                <a href="{{ route('admin.certificates.index') }}" class="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl transition-colors {{ request()->routeIs('admin.certificates.*') ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white' }}">
                    <i data-lucide="award" class="w-4 h-4"></i>
                    <span>Sertifikat</span>
                </a>

                <a href="{{ route('admin.articles.index') }}" class="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl transition-colors {{ request()->routeIs('admin.articles.*') ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white' }}">
                    <i data-lucide="newspaper" class="w-4 h-4"></i>
                    <span>Artikel & Blog</span>
                </a>

                <div class="pt-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3">Komunikasi & Konfigurasi</div>

                <a href="{{ route('admin.messages.index') }}" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-colors {{ request()->routeIs('admin.messages.*') ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white' }}">
                    <div class="flex items-center space-x-3">
                        <i data-lucide="inbox" class="w-4 h-4"></i>
                        <span>Pesan Kontak</span>
                    </div>
                    @php $unread = \App\Models\ContactMessage::where('is_read', false)->count(); @endphp
                    @if($unread > 0)
                        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500 text-white">
                            {{ $unread }}
                        </span>
                    @endif
                </a>

                <a href="{{ route('admin.settings.index') }}" class="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl transition-colors {{ request()->routeIs('admin.settings.*') ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white' }}">
                    <i data-lucide="settings" class="w-4 h-4"></i>
                    <span>Pengaturan Website</span>
                </a>
            </nav>
        </div>

        <!-- Sidebar Footer -->
        <div class="p-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
            <a href="{{ route('home') }}" target="_blank" class="flex items-center justify-center space-x-2 w-full py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 hover:border-indigo-500 transition-colors">
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                <span>Lihat Website Publik</span>
            </a>

            <form method="POST" action="{{ route('admin.logout') }}">
                @csrf
                <button type="submit" class="flex items-center justify-center space-x-2 w-full py-2 px-3 rounded-xl text-xs text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors">
                    <i data-lucide="log-out" class="w-3.5 h-3.5"></i>
                    <span>Keluar (Logout)</span>
                </button>
            </form>
        </div>
    </aside>

    <!-- Main Container -->
    <div class="lg:pl-64 flex flex-col flex-grow min-w-0">
        
        <!-- Topbar -->
        <header class="sticky top-0 z-30 glass-nav h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800/80">
            <div class="flex items-center space-x-3">
                <button @click="sidebarOpen = true" class="lg:hidden p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-white">
                    <i data-lucide="menu" class="w-5 h-5"></i>
                </button>
                <div class="text-sm font-semibold text-slate-900 dark:text-white">
                    @yield('header_title', 'Console Management')
                </div>
            </div>

            <div class="flex items-center space-x-3">
                <!-- Theme toggle -->
                <button 
                    type="button" 
                    @click="$store.theme.toggle()" 
                    class="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    aria-label="Toggle Theme"
                >
                    <template x-if="$store.theme.dark">
                        <i data-lucide="sun" class="w-4 h-4 text-amber-400"></i>
                    </template>
                    <template x-if="!$store.theme.dark">
                        <i data-lucide="moon" class="w-4 h-4 text-indigo-600"></i>
                    </template>
                </button>

                <!-- Admin user badge -->
                <div class="flex items-center space-x-2.5 pl-3 border-l border-slate-200 dark:border-slate-800 text-xs">
                    <div class="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
                        {{ strtoupper(substr(auth()->user()->name ?? 'A', 0, 1)) }}
                    </div>
                    <span class="font-medium text-slate-700 dark:text-slate-300 hidden sm:inline">
                        {{ auth()->user()->name ?? 'Admin' }}
                    </span>
                </div>
            </div>
        </header>

        <!-- Main Body -->
        <main class="p-4 sm:p-6 lg:p-8 flex-grow">
            <!-- Alert Messages -->
            @if(session('success'))
                <div class="p-4 mb-6 text-sm text-emerald-800 bg-emerald-50 rounded-2xl border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800 flex items-center justify-between" role="alert">
                    <div class="flex items-center space-x-2.5">
                        <i data-lucide="check-circle" class="w-5 h-5 text-emerald-500"></i>
                        <span>{{ session('success') }}</span>
                    </div>
                    <button type="button" @click="$el.parentElement.remove()" class="text-emerald-600 hover:text-emerald-800 dark:hover:text-emerald-200">
                        <i data-lucide="x" class="w-4 h-4"></i>
                    </button>
                </div>
            @endif

            @if(session('error'))
                <div class="p-4 mb-6 text-sm text-rose-800 bg-rose-50 rounded-2xl border border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800 flex items-center justify-between" role="alert">
                    <div class="flex items-center space-x-2.5">
                        <i data-lucide="alert-octagon" class="w-5 h-5 text-rose-500"></i>
                        <span>{{ session('error') }}</span>
                    </div>
                    <button type="button" @click="$el.parentElement.remove()" class="text-rose-600 hover:text-rose-800 dark:hover:text-rose-200">
                        <i data-lucide="x" class="w-4 h-4"></i>
                    </button>
                </div>
            @endif

            @yield('content')
        </main>
    </div>

    @stack('scripts')
</body>
</html>


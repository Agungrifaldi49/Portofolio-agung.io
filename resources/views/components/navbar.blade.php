<header class="sticky top-0 z-50 glass-nav transition-all duration-200" x-data="{ mobileOpen: false }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
            <!-- Brand / Logo -->
            <a href="{{ route('home') }}" class="flex items-center space-x-3 group">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
                    &lt;/&gt;
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {{ \App\Models\ProfileSetting::current()->full_name }}
                    </span>
                    <span class="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        {{ \App\Models\ProfileSetting::current()->title }}
                    </span>
                </div>
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center space-x-1 lg:space-x-2">
                <a href="{{ route('home') }}" class="px-3 py-2 text-sm font-medium rounded-lg transition-colors {{ request()->routeIs('home') ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/40' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50' }}">
                    Home
                </a>
                <a href="{{ route('about') }}" class="px-3 py-2 text-sm font-medium rounded-lg transition-colors {{ request()->routeIs('about') ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/40' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50' }}">
                    About
                </a>
                <a href="{{ route('skills') }}" class="px-3 py-2 text-sm font-medium rounded-lg transition-colors {{ request()->routeIs('skills') ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/40' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50' }}">
                    Skills
                </a>
                <a href="{{ route('projects.index') }}" class="px-3 py-2 text-sm font-medium rounded-lg transition-colors {{ request()->routeIs('projects.*') ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/40' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50' }}">
                    Projects
                </a>
                <a href="{{ route('experience') }}" class="px-3 py-2 text-sm font-medium rounded-lg transition-colors {{ request()->routeIs('experience') ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/40' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50' }}">
                    Experience
                </a>
                <a href="{{ route('certificates') }}" class="px-3 py-2 text-sm font-medium rounded-lg transition-colors {{ request()->routeIs('certificates') ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/40' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50' }}">
                    Certificates
                </a>
                <a href="{{ route('blog.index') }}" class="px-3 py-2 text-sm font-medium rounded-lg transition-colors {{ request()->routeIs('blog.*') ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/40' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50' }}">
                    Blog
                </a>
                <a href="{{ route('contact') }}" class="px-3 py-2 text-sm font-medium rounded-lg transition-colors {{ request()->routeIs('contact') ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/40' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50' }}">
                    Contact
                </a>
            </nav>

            <!-- Actions & Theme Toggle -->
            <div class="hidden md:flex items-center space-x-3">
                <!-- Dark / Light Mode Switcher -->
                <button 
                    type="button" 
                    @click="$store.theme.toggle()" 
                    class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 focus:outline-none transition-colors"
                    aria-label="Ganti mode tampilan"
                >
                    <template x-if="$store.theme.dark">
                        <i data-lucide="sun" class="w-4 h-4 text-amber-400"></i>
                    </template>
                    <template x-if="!$store.theme.dark">
                        <i data-lucide="moon" class="w-4 h-4 text-indigo-600"></i>
                    </template>
                </button>

                @if(\App\Models\ProfileSetting::current()->resume_path)
                    <a href="{{ route('about.cv') }}" class="inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-xl border border-indigo-500/30 text-indigo-600 dark:text-indigo-300 bg-indigo-50/50 dark:bg-indigo-950/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors">
                        <i data-lucide="download" class="w-4 h-4"></i>
                        <span>Resume</span>
                    </a>
                @endif

                <a href="{{ route('contact') }}" class="inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-sm shadow-indigo-500/25 transition-all">
                    <span>Hire Me</span>
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
            </div>

            <!-- Mobile Hamburger Button -->
            <div class="flex items-center space-x-2 md:hidden">
                <button 
                    type="button" 
                    @click="$store.theme.toggle()" 
                    class="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300"
                    aria-label="Toggle Theme"
                >
                    <template x-if="$store.theme.dark">
                        <i data-lucide="sun" class="w-4 h-4 text-amber-400"></i>
                    </template>
                    <template x-if="!$store.theme.dark">
                        <i data-lucide="moon" class="w-4 h-4 text-indigo-600"></i>
                    </template>
                </button>

                <button 
                    type="button" 
                    @click="mobileOpen = !mobileOpen" 
                    class="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none"
                    aria-label="Buka menu navigasi"
                >
                    <i data-lucide="menu" class="w-6 h-6" x-show="!mobileOpen"></i>
                    <i data-lucide="x" class="w-6 h-6" x-show="mobileOpen" style="display: none;"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Drawer -->
    <div 
        x-show="mobileOpen" 
        x-transition:enter="transition ease-out duration-200"
        x-transition:enter-start="opacity-0 -translate-y-2"
        x-transition:enter-end="opacity-100 translate-y-0"
        x-transition:leave="transition ease-in duration-150"
        x-transition:leave-start="opacity-100 translate-y-0"
        x-transition:leave-end="opacity-0 -translate-y-2"
        class="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0b0f19]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-xl"
        style="display: none;"
    >
        <a href="{{ route('home') }}" class="block px-3 py-2.5 rounded-lg text-base font-medium {{ request()->routeIs('home') ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-200' }}">Home</a>
        <a href="{{ route('about') }}" class="block px-3 py-2.5 rounded-lg text-base font-medium {{ request()->routeIs('about') ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-200' }}">About</a>
        <a href="{{ route('skills') }}" class="block px-3 py-2.5 rounded-lg text-base font-medium {{ request()->routeIs('skills') ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-200' }}">Skills</a>
        <a href="{{ route('projects.index') }}" class="block px-3 py-2.5 rounded-lg text-base font-medium {{ request()->routeIs('projects.*') ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-200' }}">Projects</a>
        <a href="{{ route('experience') }}" class="block px-3 py-2.5 rounded-lg text-base font-medium {{ request()->routeIs('experience') ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-200' }}">Experience</a>
        <a href="{{ route('certificates') }}" class="block px-3 py-2.5 rounded-lg text-base font-medium {{ request()->routeIs('certificates') ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-200' }}">Certificates</a>
        <a href="{{ route('blog.index') }}" class="block px-3 py-2.5 rounded-lg text-base font-medium {{ request()->routeIs('blog.*') ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-200' }}">Blog</a>
        <a href="{{ route('contact') }}" class="block px-3 py-2.5 rounded-lg text-base font-medium {{ request()->routeIs('contact') ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-200' }}">Contact</a>
        
        <div class="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
            @if(\App\Models\ProfileSetting::current()->resume_path)
                <a href="{{ route('about.cv') }}" class="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-medium rounded-xl border border-indigo-500/30 text-indigo-600 dark:text-indigo-300">
                    <i data-lucide="download" class="w-4 h-4"></i>
                    <span>Unduh Resume (PDF)</span>
                </a>
            @endif
            <a href="{{ route('contact') }}" class="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-medium rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <span>Hubungi Saya</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
        </div>
    </div>
</header>


<footer class="border-t border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-[#070b12] py-12 transition-colors mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <!-- Brand Column -->
            <div class="md:col-span-2 space-y-4">
                <div class="flex items-center space-x-3">
                    <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-indigo-500/20">
                        &lt;/&gt;
                    </div>
                    <span class="font-bold text-lg text-slate-900 dark:text-white">
                        {{ \App\Models\ProfileSetting::current()->full_name }}
                    </span>
                </div>
                <p class="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
                    {{ \App\Models\ProfileSetting::current()->bio }}
                </p>
                <div class="flex items-center space-x-3 text-slate-500 dark:text-slate-400 pt-2">
                    @if($github = \App\Models\ProfileSetting::current()->github_url)
                        <a href="{{ $github }}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 transition-colors" aria-label="GitHub Profile">
                            <i data-lucide="github" class="w-4 h-4"></i>
                        </a>
                    @endif
                    @if($linkedin = \App\Models\ProfileSetting::current()->linkedin_url)
                        <a href="{{ $linkedin }}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 transition-colors" aria-label="LinkedIn Profile">
                            <i data-lucide="linkedin" class="w-4 h-4"></i>
                        </a>
                    @endif
                    @if($twitter = \App\Models\ProfileSetting::current()->twitter_url)
                        <a href="{{ $twitter }}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 transition-colors" aria-label="Twitter Profile">
                            <i data-lucide="twitter" class="w-4 h-4"></i>
                        </a>
                    @endif
                    @if($email = \App\Models\ProfileSetting::current()->contact_email)
                        <a href="mailto:{{ $email }}" class="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 transition-colors" aria-label="Email Me">
                            <i data-lucide="mail" class="w-4 h-4"></i>
                        </a>
                    @endif
                </div>
            </div>

            <!-- Fast Navigation -->
            <div class="space-y-3">
                <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Navigasi Utama</h4>
                <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li><a href="{{ route('about') }}" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Tentang Pengembang</a></li>
                    <li><a href="{{ route('projects.index') }}" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Katalog Proyek</a></li>
                    <li><a href="{{ route('skills') }}" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Keahlian & Teknologi</a></li>
                    <li><a href="{{ route('experience') }}" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Riwayat Pengalaman</a></li>
                    <li><a href="{{ route('blog.index') }}" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Artikel & Publikasi</a></li>
                </ul>
            </div>

            <!-- Meta & Legal -->
            <div class="space-y-3">
                <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Arsitektur & Keamanan</h4>
                <div class="text-xs text-slate-500 dark:text-slate-400 space-y-2">
                    <p>Dibangun menggunakan arsitektur Laravel 10 Blade, Tailwind CSS, MySQL, dan terintegrasi otomatis dengan GitHub REST API.</p>
                    <div class="pt-2 flex flex-wrap gap-1.5">
                        <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">PHP 8.1+</span>
                        <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Laravel 10</span>
                        <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="pt-8 mt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <p>&copy; {{ date('Y') }} {{ \App\Models\ProfileSetting::current()->full_name }}. All rights reserved.</p>
            <div class="flex items-center space-x-4 mt-4 sm:mt-0">
                <a href="{{ route('sitemap') }}" class="hover:text-slate-700 dark:hover:text-slate-300">Sitemap XML</a>
                <span>&bull;</span>
                <a href="{{ route('robots') }}" class="hover:text-slate-700 dark:hover:text-slate-300">Robots.txt</a>
                <span>&bull;</span>
                <a href="{{ route('admin.dashboard') }}" class="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">Dashboard Admin</a>
            </div>
        </div>
    </div>
</footer>


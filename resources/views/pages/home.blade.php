@extends('layouts.app')

@section('title', $profile->full_name . ' — ' . $profile->title)
@section('meta_description', $profile->bio)

@section('content')
<!-- Hero Section -->
<section class="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <!-- Left Column: Copy & CTAs -->
            <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
                <!-- Status Badge -->
                @if($profile->available_for_hire)
                    <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>{{ $profile->hero_badge ?: 'Available for High-Impact Projects' }}</span>
                    </div>
                @endif

                <!-- Main Heading & Dynamic Role Typing -->
                <div class="space-y-2">
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                        Hi, I'm <span class="text-gradient">{{ $profile->full_name }}</span>
                    </h1>
                    
                    <!-- Alpine.js Dynamic Role Switcher -->
                    <div 
                        x-data="{ 
                            titles: {{ json_encode($profile->hero_titles ?: ['Full-Stack Developer', 'Laravel Architect', 'Database Engineer']) }},
                            currentIndex: 0,
                            timer: null,
                            start() {
                                this.timer = setInterval(() => {
                                    this.currentIndex = (this.currentIndex + 1) % this.titles.length;
                                }, 3000);
                            }
                        }" 
                        x-init="start()"
                        class="text-xl sm:text-2xl font-mono text-indigo-600 dark:text-indigo-400 font-semibold h-8 flex items-center justify-center lg:justify-start"
                    >
                        <span>&gt;&nbsp;</span>
                        <span x-text="titles[currentIndex]" class="border-r-2 border-indigo-500 pr-1 animate-pulse"></span>
                    </div>
                </div>

                <!-- Professional Summary -->
                <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    {{ $profile->bio }}
                </p>

                <!-- CTAs -->
                <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                    <a href="{{ route('projects.index') }}" class="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 transition-all flex items-center space-x-2">
                        <span>Lihat Portfolio Proyek</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </a>

                    <a href="{{ route('contact') }}" class="px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-indigo-500 text-slate-700 dark:text-slate-200 font-semibold text-sm bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-all flex items-center space-x-2">
                        <i data-lucide="send" class="w-4 h-4 text-indigo-500"></i>
                        <span>Hubungi Saya</span>
                    </a>

                    @if($profile->resume_path)
                        <a href="{{ route('about.cv') }}" class="px-4 py-3.5 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-indigo-600 text-sm font-medium transition-colors flex items-center space-x-1.5" title="Unduh Curriculum Vitae">
                            <i data-lucide="file-text" class="w-4 h-4"></i>
                            <span>CV (PDF)</span>
                        </a>
                    @endif
                </div>

                <!-- Social Proof & Quick Links -->
                <div class="pt-4 flex items-center justify-center lg:justify-start space-x-4 text-sm text-slate-500 dark:text-slate-400">
                    <span>Connect:</span>
                    @if($profile->github_url)
                        <a href="{{ $profile->github_url }}" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 dark:hover:text-white flex items-center space-x-1">
                            <i data-lucide="github" class="w-4 h-4"></i>
                            <span>GitHub</span>
                        </a>
                    @endif
                    @if($profile->linkedin_url)
                        <a href="{{ $profile->linkedin_url }}" target="_blank" rel="noopener noreferrer" class="hover:text-indigo-500 flex items-center space-x-1">
                            <i data-lucide="linkedin" class="w-4 h-4"></i>
                            <span>LinkedIn</span>
                        </a>
                    @endif
                    @if($profile->location)
                        <span class="flex items-center space-x-1 text-xs">
                            <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
                            <span>{{ $profile->location }}</span>
                        </span>
                    @endif
                </div>
            </div>

            <!-- Right Column: Avatar / Visual Identity Card -->
            <div class="lg:col-span-5 flex justify-center">
                <div class="relative w-72 sm:w-80 aspect-square">
                    <!-- Ambient Glow Behind -->
                    <div class="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-30 dark:opacity-40 animate-pulse"></div>
                    
                    <div class="relative w-full h-full rounded-3xl glass-card overflow-hidden p-3 shadow-2xl border border-white/20 dark:border-white/10 flex flex-col justify-between">
                        @if($profile->avatar_path)
                            <img 
                                src="{{ asset('storage/' . $profile->avatar_path) }}" 
                                alt="{{ $profile->full_name }}" 
                                class="w-full h-full object-cover rounded-2xl"
                            >
                        @else
                            <!-- Sleek Tech Graphic Card if no avatar uploaded -->
                            <div class="w-full h-full rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 p-6 flex flex-col justify-between font-mono text-xs text-slate-300">
                                <div class="flex items-center justify-between pb-3 border-b border-slate-800">
                                    <div class="flex items-center space-x-2">
                                        <span class="w-3 h-3 rounded-full bg-rose-500"></span>
                                        <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                                        <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                                    </div>
                                    <span class="text-indigo-400">architect.php</span>
                                </div>
                                <div class="space-y-2 py-4">
                                    <p class="text-emerald-400">&lt;?php</p>
                                    <p class="text-slate-400">class <span class="text-amber-300">SeniorDeveloper</span> {</p>
                                    <p class="pl-4 text-slate-300">public string $focus = '<span class="text-cyan-300">Scalable Systems</span>';</p>
                                    <p class="pl-4 text-slate-300">public array $stack = [<span class="text-purple-300">'Laravel', 'MySQL', 'API'</span>];</p>
                                    <p class="text-slate-400">}</p>
                                </div>
                                <div class="pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
                                    <span>// Production Ready</span>
                                    <span class="text-emerald-400 flex items-center space-x-1">
                                        <i data-lucide="shield-check" class="w-3 h-3"></i>
                                        <span>Secured</span>
                                    </span>
                                </div>
                            </div>
                        @endif
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- GitHub & Repository Real Statistics Showcase -->
<section class="py-12 border-y border-slate-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
                <div class="flex items-center space-x-2">
                    <i data-lucide="github" class="w-5 h-5 text-indigo-500"></i>
                    <h2 class="text-lg font-bold text-slate-900 dark:text-white">Statistik Repositori GitHub</h2>
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400">
                    Data repositori publik yang disinkronkan dari akun GitHub <strong class="text-indigo-500">{{ $githubStats['username'] ?: 'Developer' }}</strong>
                </p>
            </div>
            @if($githubStats['last_synced'])
                <div class="text-xs font-mono text-slate-400">
                    Sinkronisasi terakhir: {{ date('d M Y H:i', strtotime($githubStats['last_synced'])) }}
                </div>
            @endif
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="glass-card p-5 rounded-2xl">
                <div class="text-xs font-medium text-slate-500 dark:text-slate-400">Repositori Tersinkron</div>
                <div class="text-3xl font-extrabold text-slate-900 dark:text-white mt-2">{{ $githubStats['repos_count'] }}</div>
                <div class="text-[11px] text-indigo-500 font-mono mt-1">Status: Terhubung</div>
            </div>
            <div class="glass-card p-5 rounded-2xl">
                <div class="text-xs font-medium text-slate-500 dark:text-slate-400">Total GitHub Stars</div>
                <div class="text-3xl font-extrabold text-amber-500 mt-2">{{ $githubStats['total_stars'] }}</div>
                <div class="text-[11px] text-slate-400 font-mono mt-1">Stargazers total</div>
            </div>
            <div class="glass-card p-5 rounded-2xl">
                <div class="text-xs font-medium text-slate-500 dark:text-slate-400">Total Forks</div>
                <div class="text-3xl font-extrabold text-slate-900 dark:text-white mt-2">{{ $githubStats['total_forks'] }}</div>
                <div class="text-[11px] text-slate-400 font-mono mt-1">Community forks</div>
            </div>
            <div class="glass-card p-5 rounded-2xl">
                <div class="text-xs font-medium text-slate-500 dark:text-slate-400">Bahasa Terdeteksi</div>
                <div class="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mt-2">{{ count($githubStats['languages']) }}</div>
                <div class="text-[11px] text-slate-400 font-mono mt-1 truncate">
                    {{ implode(', ', array_slice($githubStats['languages'], 0, 3)) ?: 'PHP, JS, SQL' }}
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Featured Projects Section -->
<section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div class="space-y-2">
                <span class="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Portfolio</span>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Proyek Unggulan</h2>
                <p class="text-slate-600 dark:text-slate-400 text-sm max-w-xl">
                    Implementasi nyata arsitektur perangkat lunak dengan fokus pada skalabilitas, efisiensi database, dan pengalaman pengguna.
                </p>
            </div>
            <a href="{{ route('projects.index') }}" class="inline-flex items-center space-x-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 mt-4 md:mt-0 group">
                <span>Lihat Semua Proyek</span>
                <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
            </a>
        </div>

        @if($featuredProjects->isEmpty())
            <div class="glass-card rounded-2xl p-12 text-center text-slate-500 dark:text-slate-400">
                <i data-lucide="folder-search" class="w-12 h-12 mx-auto mb-3 text-slate-400"></i>
                <h3 class="text-lg font-semibold text-slate-700 dark:text-slate-200">Belum ada proyek yang ditampilkan</h3>
                <p class="text-sm mt-1">Tambahkan proyek melalui dashboard admin atau lakukan sinkronisasi repositori GitHub.</p>
            </div>
        @else
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @foreach($featuredProjects as $project)
                    @include('components.project-card', ['project' => $project])
                @endforeach
            </div>
        @endif
    </div>
</section>

<!-- Core Skills Overview -->
<section class="py-20 bg-slate-100/50 dark:bg-slate-900/20 border-t border-slate-200/80 dark:border-slate-800/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span class="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Stack & Teknologi</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Keahlian Teknis</h2>
            <p class="text-sm text-slate-600 dark:text-slate-400">
                Penguasaan instrumen pengembangan modern yang digunakan dalam rekayasa perangkat lunak enterprise.
            </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            @foreach($coreSkills as $skill)
                <div class="glass-card p-6 rounded-2xl space-y-3 group hover:border-indigo-500/40 transition-all duration-300">
                    <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <i data-lucide="{{ $skill->icon ?: 'code' }}" class="w-5 h-5"></i>
                    </div>
                    <div class="space-y-1">
                        <div class="text-xs font-medium text-slate-400 dark:text-slate-500">{{ $skill->category }}</div>
                        <h3 class="text-base font-bold text-slate-900 dark:text-white">{{ $skill->name }}</h3>
                    </div>
                    @if($skill->level_label)
                        <span class="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400">
                            {{ $skill->level_label }}
                        </span>
                    @endif
                    @if($skill->description)
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            {{ $skill->description }}
                        </p>
                    @endif
                </div>
            @endforeach
        </div>

        <div class="text-center mt-12">
            <a href="{{ route('skills') }}" class="inline-flex items-center space-x-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                <span>Eksplorasi Seluruh Kategori Keahlian</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
        </div>
    </div>
</section>

<!-- Experience Timeline Preview -->
<section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div class="lg:col-span-5 space-y-4">
                <span class="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Perjalanan Karir</span>
                <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white">Pengalaman Profesional</h2>
                <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Rekam jejak kontribusi dalam perancangan aplikasi, peningkatan performa query, dan kolaborasi tim teknik lintas disiplin.
                </p>
                <div class="pt-4">
                    <a href="{{ route('experience') }}" class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 text-sm font-medium transition-colors">
                        <span>Lihat Riwayat & Pendidikan Lengkap</span>
                        <i data-lucide="chevron-right" class="w-4 h-4"></i>
                    </a>
                </div>
            </div>

            <div class="lg:col-span-7 space-y-8">
                @foreach($recentExperiences as $exp)
                    <div class="relative pl-8 border-l-2 border-indigo-500/30 dark:border-indigo-500/20 pb-2">
                        <!-- Dot Indicator -->
                        <span class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-white dark:ring-[#0b0f19]"></span>
                        
                        <div class="glass-card p-6 rounded-2xl space-y-2">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                                <h3 class="text-lg font-bold text-slate-900 dark:text-white">{{ $exp->role }}</h3>
                                <span class="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                                    {{ $exp->period }}
                                </span>
                            </div>
                            <div class="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                {{ $exp->company }} &bull; <span class="text-xs text-slate-500 font-normal">{{ $exp->location }}</span>
                            </div>
                            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                                {{ $exp->description }}
                            </p>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</section>

<!-- Call to Action Banner -->
<section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-3xl bg-gradient-to-r from-indigo-900/60 via-purple-900/40 to-slate-900/80 border border-indigo-500/30 p-8 sm:p-14 text-center space-y-6 relative overflow-hidden backdrop-blur-xl">
            <h2 class="text-3xl sm:text-4xl font-extrabold text-white">Tertarik Bekerja Sama atau Membangun Solusi?</h2>
            <p class="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Saya terbuka untuk peluang kolaborasi proyek, perancangan arsitektur software, serta konsultasi teknis.
            </p>
            <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a href="{{ route('contact') }}" class="px-8 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm shadow-xl transition-all">
                    Kirim Pesan Sekarang
                </a>
                @if($profile->contact_email)
                    <a href="mailto:{{ $profile->contact_email }}" class="px-8 py-3.5 rounded-xl border border-white/20 text-white hover:bg-white/10 font-medium text-sm transition-all">
                        {{ $profile->contact_email }}
                    </a>
                @endif
            </div>
        </div>
    </div>
</section>
@endsection


@extends('layouts.app')

@section('title', 'Riwayat Pengalaman & Karir — ' . \App\Models\ProfileSetting::current()->full_name)
@section('meta_description', 'Riwayat perjalanan profesional, tanggung jawab, dan pencapaian dalam rekayasa perangkat lunak.')

@section('content')
<div class="py-16">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4">
            <span class="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Karir & Pendidikan</span>
            <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">Pengalaman & Rekam Jejak</h1>
            <p class="text-base text-slate-600 dark:text-slate-400">
                Timeline perjalanan profesional dalam membangun sistem, memimpin inisiatif teknik, dan menyelesaikan tantangan komputasi.
            </p>
        </div>

        <!-- Experience Timeline -->
        <div class="space-y-8">
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                    <i data-lucide="briefcase" class="w-5 h-5"></i>
                </div>
                <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Pengalaman Kerja</h2>
            </div>

            <div class="space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
                @forelse($experiences as $exp)
                    <div class="relative pl-12">
                        <!-- Marker -->
                        <span class="absolute left-3 top-2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-indigo-600 bg-white dark:bg-[#0b0f19] ring-4 ring-indigo-500/10"></span>

                        <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-4">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                                <div>
                                    <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ $exp->role }}</h3>
                                    <div class="flex items-center space-x-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                                        @if($exp->company_url)
                                            <a href="{{ $exp->company_url }}" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 hover:underline">
                                                {{ $exp->company }}
                                            </a>
                                        @else
                                            <span>{{ $exp->company }}</span>
                                        @endif
                                        @if($exp->location)
                                            <span class="text-slate-400 font-normal">&bull; {{ $exp->location }}</span>
                                        @endif
                                    </div>
                                </div>

                                <div class="flex items-center space-x-2">
                                    @if($exp->is_current)
                                        <span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                            Posisi Sekarang
                                        </span>
                                    @endif
                                    <span class="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                        {{ $exp->period }}
                                    </span>
                                </div>
                            </div>

                            @if($exp->description)
                                <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {{ $exp->description }}
                                </p>
                            @endif

                            @if(!empty($exp->key_responsibilities))
                                <div class="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                                    <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400">Kontribusi & Tanggung Jawab Utama:</h4>
                                    <ul class="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                                        @foreach($exp->key_responsibilities as $item)
                                            <li class="flex items-start space-x-2">
                                                <i data-lucide="check" class="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5"></i>
                                                <span>{{ $item }}</span>
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif
                        </div>
                    </div>
                @empty
                    <div class="p-8 text-center text-slate-400 text-sm">
                        Belum ada data pengalaman yang dipublikasikan.
                    </div>
                @endforelse
            </div>
        </div>

        <!-- Education Section -->
        <div class="space-y-8 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                    <i data-lucide="graduation-cap" class="w-5 h-5"></i>
                </div>
                <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Riwayat Pendidikan</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                @foreach($educations as $edu)
                    <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-3">
                        <span class="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">{{ $edu->period }}</span>
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ $edu->degree }}</h3>
                        <p class="text-sm font-semibold text-slate-700 dark:text-slate-300">{{ $edu->institution }}</p>
                        @if($edu->field_of_study)
                            <p class="text-xs text-slate-500">Konsentrasi: {{ $edu->field_of_study }}</p>
                        @endif
                        @if($edu->description)
                            <p class="text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/80 leading-relaxed">
                                {{ $edu->description }}
                            </p>
                        @endif
                    </div>
                @endforeach
            </div>
        </div>

    </div>
</div>
@endsection


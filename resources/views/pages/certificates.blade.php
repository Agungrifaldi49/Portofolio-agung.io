@extends('layouts.app')

@section('title', 'Sertifikasi & Lisensi Profesional — ' . \App\Models\ProfileSetting::current()->full_name)
@section('meta_description', 'Daftar sertifikasi kompetensi resmi dalam bidang rekayasa perangkat lunak, arsitektur basis data, dan framework.')

@section('content')
<div class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4">
            <span class="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Validasi Kompetensi</span>
            <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">Sertifikasi & Lisensi</h1>
            <p class="text-base text-slate-600 dark:text-slate-400">
                Bukti kompetensi teknis terverifikasi dari lembaga dan platform rekayasa perangkat lunak internasional.
            </p>
        </div>

        <!-- Category Filters -->
        @if($categories->count() > 1)
            <div class="flex flex-wrap items-center justify-center gap-2">
                <a href="{{ route('certificates') }}" class="px-4 py-2 rounded-xl text-xs font-semibold border {{ !request('category') ? 'bg-indigo-600 text-white border-indigo-600' : 'glass-card text-slate-600 dark:text-slate-300 hover:border-indigo-500' }}">
                    Semua Kategori
                </a>
                @foreach($categories as $cat)
                    <a href="{{ route('certificates', ['category' => $cat]) }}" class="px-4 py-2 rounded-xl text-xs font-semibold border {{ request('category') === $cat ? 'bg-indigo-600 text-white border-indigo-600' : 'glass-card text-slate-600 dark:text-slate-300 hover:border-indigo-500' }}">
                        {{ $cat }}
                    </a>
                @endforeach
            </div>
        @endif

        <!-- Grid of Certificates -->
        @if($certificates->isEmpty())
            <div class="glass-card rounded-3xl p-16 text-center space-y-3">
                <i data-lucide="award" class="w-12 h-12 mx-auto text-slate-400"></i>
                <h3 class="text-lg font-bold text-slate-800 dark:text-white">Belum ada sertifikat yang ditampilkan</h3>
                <p class="text-sm text-slate-500">Sertifikat dapat ditambahkan melalui panel administrasi.</p>
            </div>
        @else
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @foreach($certificates as $cert)
                    <div class="glass-card rounded-3xl overflow-hidden flex flex-col group hover:border-indigo-500/50 hover:shadow-xl transition-all duration-300">
                        <div class="h-44 w-full bg-slate-900 overflow-hidden relative border-b border-slate-100 dark:border-slate-800">
                            @if($cert->image_path)
                                <img src="{{ asset('storage/' . $cert->image_path) }}" alt="{{ $cert->title }}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                            @else
                                <div class="w-full h-full bg-gradient-to-tr from-indigo-950 via-slate-900 to-purple-950 flex flex-col items-center justify-center text-slate-400 p-4 space-y-2">
                                    <i data-lucide="award" class="w-10 h-10 text-indigo-400"></i>
                                    <span class="text-xs font-mono uppercase tracking-wider text-slate-300 text-center">{{ $cert->issuer }}</span>
                                </div>
                            @endif

                            <div class="absolute top-3 right-3">
                                <span class="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/90 dark:bg-slate-900/90 text-indigo-600 dark:text-indigo-400 backdrop-blur-sm border border-white/20">
                                    {{ $cert->category }}
                                </span>
                            </div>
                        </div>

                        <div class="p-6 flex flex-col flex-grow justify-between space-y-4">
                            <div class="space-y-2">
                                <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                                    {{ $cert->title }}
                                </h3>
                                <p class="text-xs font-semibold text-slate-600 dark:text-slate-300">
                                    Penerbit: {{ $cert->issuer }}
                                </p>
                                @if($cert->issue_date)
                                    <p class="text-[11px] font-mono text-slate-400">
                                        Tanggal: {{ $cert->issue_date->format('d M Y') }}
                                    </p>
                                @endif
                                @if($cert->description)
                                    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                                        {{ $cert->description }}
                                    </p>
                                @endif
                            </div>

                            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                                @if($cert->credential_id)
                                    <span class="text-[11px] font-mono text-slate-400 truncate max-w-[150px]">
                                        ID: {{ $cert->credential_id }}
                                    </span>
                                @else
                                    <span></span>
                                @endif

                                @if($cert->credential_url)
                                    <a href="{{ $cert->credential_url }}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center space-x-1 font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                                        <span>Verifikasi</span>
                                        <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                                    </a>
                                @endif
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>

            <div class="pt-6">
                {{ $certificates->links() }}
            </div>
        @endif

    </div>
</div>
@endsection


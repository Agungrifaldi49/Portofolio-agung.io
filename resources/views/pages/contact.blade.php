@extends('layouts.app')

@section('title', 'Hubungi Saya — ' . $profile->full_name)
@section('meta_description', 'Kirim pesan langsung kepada pengembang untuk diskusi proyek, konsultasi arsitektur, atau peluang kerja sama.')

@section('content')
<div class="py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4">
            <span class="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Komunikasi & Kolaborasi</span>
            <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">Hubungi Saya</h1>
            <p class="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Punya ide proyek, kebutuhan arsitektur sistem, atau pertanyaan teknis? Silakan kirimkan pesan melalui formulir di bawah ini.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <!-- Left: Contact Information & Direct Channels -->
            <div class="lg:col-span-5 space-y-6">
                <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
                    <h2 class="text-xl font-bold text-slate-900 dark:text-white">Saluran Komunikasi</h2>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Setiap pesan yang Anda kirim akan disimpan secara aman di database dan langsung dinotifikasi kepada administrator.
                    </p>

                    <div class="space-y-4 pt-2">
                        @if($profile->contact_email)
                            <div class="flex items-center space-x-3 text-sm">
                                <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="mail" class="w-5 h-5"></i>
                                </div>
                                <div>
                                    <div class="text-xs text-slate-400">Email Resmi</div>
                                    <a href="mailto:{{ $profile->contact_email }}" class="font-medium text-slate-900 dark:text-white hover:text-indigo-500">
                                        {{ $profile->contact_email }}
                                    </a>
                                </div>
                            </div>
                        @endif

                        @if($profile->location)
                            <div class="flex items-center space-x-3 text-sm">
                                <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="map-pin" class="w-5 h-5"></i>
                                </div>
                                <div>
                                    <div class="text-xs text-slate-400">Lokasi / Zona Waktu</div>
                                    <div class="font-medium text-slate-900 dark:text-white">{{ $profile->location }}</div>
                                </div>
                            </div>
                        @endif

                        @if($profile->available_for_hire)
                            <div class="flex items-center space-x-3 text-sm">
                                <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="check-circle-2" class="w-5 h-5"></i>
                                </div>
                                <div>
                                    <div class="text-xs text-slate-400">Ketersediaan</div>
                                    <div class="font-medium text-emerald-500">Terbuka untuk Kontrak & Proyek Penuh</div>
                                </div>
                            </div>
                        @endif
                    </div>

                    <!-- Social Media Links -->
                    <div class="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                        <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Profil Profesional:</div>
                        <div class="flex items-center space-x-3 pt-1">
                            @if($profile->github_url)
                                <a href="{{ $profile->github_url }}" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:text-indigo-500 transition-colors">
                                    <i data-lucide="github" class="w-4 h-4"></i>
                                </a>
                            @endif
                            @if($profile->linkedin_url)
                                <a href="{{ $profile->linkedin_url }}" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:text-indigo-500 transition-colors">
                                    <i data-lucide="linkedin" class="w-4 h-4"></i>
                                </a>
                            @endif
                            @if($profile->twitter_url)
                                <a href="{{ $profile->twitter_url }}" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:text-indigo-500 transition-colors">
                                    <i data-lucide="twitter" class="w-4 h-4"></i>
                                </a>
                            @endif
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right: Validated Contact Form -->
            <div class="lg:col-span-7">
                <div class="glass-card p-6 sm:p-10 rounded-3xl space-y-6">
                    <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Formulir Pesan</h2>

                    <form method="POST" action="{{ route('contact.submit') }}" class="space-y-4">
                        @csrf

                        <!-- Honeypot anti-spam field (hidden from humans) -->
                        <div class="hidden" aria-hidden="true">
                            <label for="website_url_hp">Jangan isi field ini:</label>
                            <input type="text" name="website_url_hp" id="website_url_hp" tabindex="-1" autocomplete="off">
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <!-- Name -->
                            <div class="space-y-1.5">
                                <label for="name" class="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                                    Nama Lengkap <span class="text-rose-500">*</span>
                                </label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value="{{ old('name') }}" 
                                    required 
                                    placeholder="cth. Budi Pratama"
                                    class="w-full px-4 py-2.5 text-sm rounded-xl border @error('name') border-rose-500 @else border-slate-200 dark:border-slate-800 @enderror bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                @error('name')
                                    <p class="text-xs text-rose-500">{{ $message }}</p>
                                @enderror
                            </div>

                            <!-- Email -->
                            <div class="space-y-1.5">
                                <label for="email" class="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                                    Alamat Email <span class="text-rose-500">*</span>
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value="{{ old('email') }}" 
                                    required 
                                    placeholder="nama@perusahaan.com"
                                    class="w-full px-4 py-2.5 text-sm rounded-xl border @error('email') border-rose-500 @else border-slate-200 dark:border-slate-800 @enderror bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                @error('email')
                                    <p class="text-xs text-rose-500">{{ $message }}</p>
                                @enderror
                            </div>
                        </div>

                        <!-- Subject -->
                        <div class="space-y-1.5">
                            <label for="subject" class="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                                Subjek Pesan <span class="text-rose-500">*</span>
                            </label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                value="{{ old('subject') }}" 
                                required 
                                placeholder="cth. Diskusi Peluang Kolaborasi Proyek Laravel"
                                class="w-full px-4 py-2.5 text-sm rounded-xl border @error('subject') border-rose-500 @else border-slate-200 dark:border-slate-800 @enderror bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                            @error('subject')
                                <p class="text-xs text-rose-500">{{ $message }}</p>
                            @enderror
                        </div>

                        <!-- Message -->
                        <div class="space-y-1.5">
                            <label for="message" class="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                                Isi Pesan <span class="text-rose-500">*</span>
                            </label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="5" 
                                required 
                                placeholder="Tuliskan rincian kebutuhan atau pesan Anda di sini..."
                                class="w-full px-4 py-2.5 text-sm rounded-xl border @error('message') border-rose-500 @else border-slate-200 dark:border-slate-800 @enderror bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >{{ old('message') }}</textarea>
                            @error('message')
                                <p class="text-xs text-rose-500">{{ $message }}</p>
                            @enderror
                        </div>

                        <div class="pt-2">
                            <button type="submit" class="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center space-x-2">
                                <i data-lucide="send" class="w-4 h-4"></i>
                                <span>Kirim Pesan Sekarang</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    </div>
</div>
@endsection


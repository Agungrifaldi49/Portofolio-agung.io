@extends('layouts.admin')

@section('title', 'Pengaturan Akun & Keamanan')
@section('header_title', 'Keamanan & Akun Administrator')

@section('content')
<div class="w-full space-y-6">
    
    <!-- Page Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
        <div>
            <div class="flex items-center space-x-2">
                <a href="{{ route('admin.dashboard') }}" class="text-xs font-semibold text-slate-500 hover:text-indigo-500 transition-colors flex items-center space-x-1">
                    <i data-lucide="layout-dashboard" class="w-3.5 h-3.5"></i>
                    <span>Dashboard</span>
                </a>
                <span class="text-slate-400">/</span>
                <span class="text-xs font-semibold text-indigo-500">Pengaturan Akun</span>
            </div>
            <h1 class="text-2xl font-bold text-slate-900 dark:text-white mt-1">Pengaturan Akun & Keamanan</h1>
            <p class="text-xs text-slate-500">Kelola identitas akun administrator, perbarui email login, serta perkuat keamanan password akses.</p>
        </div>
        <div class="flex items-center space-x-3">
            <a href="{{ route('admin.dashboard') }}" class="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:border-slate-400 transition-all">
                Kembali ke Dashboard
            </a>
        </div>
    </div>

    <!-- Main Grid: 8 Columns Left (Forms) : 4 Columns Right (Security Status) -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        <!-- Left Column: Profile and Password Forms (8 Columns) -->
        <div class="lg:col-span-8 space-y-6">
            
            <!-- Card 1: Data Identitas & Email Login -->
            <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-6 border border-slate-200/80 dark:border-slate-800/80">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800/80">
                    <div class="flex items-center space-x-3">
                        <div class="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
                            <i data-lucide="user-check" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <h2 class="text-base font-bold text-slate-900 dark:text-white">1. Data Diri & Email Administrator</h2>
                            <p class="text-[11px] text-slate-500">Ubah nama identitas administrator dan alamat email untuk otentikasi login.</p>
                        </div>
                    </div>
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        Akun Aktif
                    </span>
                </div>

                <form method="POST" action="{{ route('admin.account.profile.update') }}" class="space-y-5">
                    @csrf
                    @method('PUT')

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                                Nama Administrator <span class="text-rose-500">*</span>
                            </label>
                            <input 
                                type="text" 
                                name="name" 
                                value="{{ old('name', $user->name) }}" 
                                required 
                                placeholder="cth. Administrator Utama" 
                                class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all @error('name') border-rose-500 @enderror"
                            >
                            @error('name')
                                <p class="text-xs text-rose-500 mt-1">{{ $message }}</p>
                            @enderror
                        </div>

                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                                Email Login Akun <span class="text-rose-500">*</span>
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                value="{{ old('email', $user->email) }}" 
                                required 
                                placeholder="admin@domain.com" 
                                class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all @error('email') border-rose-500 @enderror"
                            >
                            @error('email')
                                <p class="text-xs text-rose-500 mt-1">{{ $message }}</p>
                            @enderror
                        </div>
                    </div>

                    <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 flex items-start space-x-3 text-xs text-slate-500 dark:text-slate-400">
                        <i data-lucide="info" class="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5"></i>
                        <span>Pastikan email yang Anda gunakan adalah email aktif pribadi Anda, karena email ini merupakan identitas utama untuk masuk ke panel pengelolaan portfolio.</span>
                    </div>

                    <div class="flex items-center justify-end pt-2">
                        <button type="submit" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center space-x-2">
                            <i data-lucide="save" class="w-4 h-4"></i>
                            <span>Simpan Perubahan Akun</span>
                        </button>
                    </div>
                </form>
            </div>

            <!-- Card 2: Keamanan & Pembaruan Password -->
            <div 
                class="glass-card p-6 sm:p-8 rounded-3xl space-y-6 border border-slate-200/80 dark:border-slate-800/80"
                x-data="{
                    newPassword: '',
                    showCurrent: false,
                    showNew: false,
                    showConfirm: false,
                    get strength() {
                        let score = 0;
                        if (this.newPassword.length >= 8) score++;
                        if (/[A-Z]/.test(this.newPassword)) score++;
                        if (/[0-9]/.test(this.newPassword)) score++;
                        if (/[^A-Za-z0-9]/.test(this.newPassword)) score++;
                        return score;
                    },
                    get strengthLabel() {
                        if (!this.newPassword) return '';
                        if (this.strength <= 1) return 'Lemah';
                        if (this.strength === 2) return 'Cukup';
                        if (this.strength === 3) return 'Kuat';
                        return 'Sangat Kuat (Direkomendasikan)';
                    },
                    get strengthColor() {
                        if (this.strength <= 1) return 'bg-rose-500';
                        if (this.strength === 2) return 'bg-amber-500';
                        if (this.strength === 3) return 'bg-indigo-500';
                        return 'bg-emerald-500';
                    }
                }"
            >
                <div class="flex items-center space-x-3 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                    <div class="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
                        <i data-lucide="key" class="w-4 h-4"></i>
                    </div>
                    <div>
                        <h2 class="text-base font-bold text-slate-900 dark:text-white">2. Perbarui Password (Memperkuat Akun)</h2>
                        <p class="text-[11px] text-slate-500">Gunakan kombinasi password yang kuat untuk menjaga akses portofolio tetap aman.</p>
                    </div>
                </div>

                <form method="POST" action="{{ route('admin.account.password.update') }}" class="space-y-5">
                    @csrf
                    @method('PUT')

                    <!-- Password Saat Ini -->
                    <div class="space-y-1.5">
                        <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                            Password Saat Ini <span class="text-rose-500">*</span>
                        </label>
                        <div class="relative">
                            <input 
                                :type="showCurrent ? 'text' : 'password'" 
                                name="current_password" 
                                required 
                                placeholder="Masukkan password yang saat ini aktif" 
                                class="w-full px-4 py-2.5 pr-11 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all @error('current_password') border-rose-500 @enderror"
                            >
                            <button 
                                type="button" 
                                @click="showCurrent = !showCurrent" 
                                class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none"
                            >
                                <template x-if="!showCurrent">
                                    <i data-lucide="eye" class="w-4 h-4"></i>
                                </template>
                                <template x-if="showCurrent">
                                    <i data-lucide="eye-off" class="w-4 h-4"></i>
                                </template>
                            </button>
                        </div>
                        @error('current_password')
                            <p class="text-xs text-rose-500 mt-1">{{ $message }}</p>
                        @enderror
                    </div>

                    <!-- Password Baru & Konfirmasi -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                                Password Baru <span class="text-rose-500">*</span>
                            </label>
                            <div class="relative">
                                <input 
                                    :type="showNew ? 'text' : 'password'" 
                                    name="password" 
                                    x-model="newPassword" 
                                    required 
                                    placeholder="Minimal 8 karakter unik" 
                                    class="w-full px-4 py-2.5 pr-11 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all @error('password') border-rose-500 @enderror"
                                >
                                <button 
                                    type="button" 
                                    @click="showNew = !showNew" 
                                    class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none"
                                >
                                    <template x-if="!showNew">
                                        <i data-lucide="eye" class="w-4 h-4"></i>
                                    </template>
                                    <template x-if="showNew">
                                        <i data-lucide="eye-off" class="w-4 h-4"></i>
                                    </template>
                                </button>
                            </div>
                            @error('password')
                                <p class="text-xs text-rose-500 mt-1">{{ $message }}</p>
                            @enderror

                            <!-- Dynamic Password Strength Meter -->
                            <div class="pt-1.5 space-y-1" x-show="newPassword.length > 0" style="display: none;">
                                <div class="flex items-center justify-between text-[11px]">
                                    <span class="text-slate-400">Kekuatan Password:</span>
                                    <span class="font-bold" :class="strength <= 1 ? 'text-rose-500' : (strength === 2 ? 'text-amber-500' : (strength === 3 ? 'text-indigo-400' : 'text-emerald-400'))" x-text="strengthLabel"></span>
                                </div>
                                <div class="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div class="h-full transition-all duration-300" :class="strengthColor" :style="'width: ' + (strength * 25) + '%'"></div>
                                </div>
                            </div>
                        </div>

                        <div class="space-y-1.5">
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                                Ulangi Password Baru <span class="text-rose-500">*</span>
                            </label>
                            <div class="relative">
                                <input 
                                    :type="showConfirm ? 'text' : 'password'" 
                                    name="password_confirmation" 
                                    required 
                                    placeholder="Ketik ulang password baru" 
                                    class="w-full px-4 py-2.5 pr-11 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                                >
                                <button 
                                    type="button" 
                                    @click="showConfirm = !showConfirm" 
                                    class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none"
                                >
                                    <template x-if="!showConfirm">
                                        <i data-lucide="eye" class="w-4 h-4"></i>
                                    </template>
                                    <template x-if="showConfirm">
                                        <i data-lucide="eye-off" class="w-4 h-4"></i>
                                    </template>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Checklist Aturan Keamanan Password -->
                    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 space-y-2 text-xs text-slate-500 dark:text-slate-400">
                        <div class="font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
                            <i data-lucide="shield" class="w-3.5 h-3.5 text-indigo-500"></i>
                            <span>Kriteria Password yang Kuat & Aman:</span>
                        </div>
                        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                            <li class="flex items-center space-x-1.5">
                                <i data-lucide="check" class="w-3 h-3 text-emerald-500"></i>
                                <span>Minimal 8 karakter</span>
                            </li>
                            <li class="flex items-center space-x-1.5">
                                <i data-lucide="check" class="w-3 h-3 text-emerald-500"></i>
                                <span>Kombinasi huruf & angka</span>
                            </li>
                            <li class="flex items-center space-x-1.5">
                                <i data-lucide="check" class="w-3 h-3 text-emerald-500"></i>
                                <span>Disarankan huruf besar & simbol (@$!%*#)</span>
                            </li>
                            <li class="flex items-center space-x-1.5">
                                <i data-lucide="check" class="w-3 h-3 text-emerald-500"></i>
                                <span>Bukan nama atau tanggal lahir pribadi</span>
                            </li>
                        </ul>
                    </div>

                    <div class="flex items-center justify-end pt-2">
                        <button type="submit" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-md shadow-purple-600/20 transition-all flex items-center space-x-2">
                            <i data-lucide="lock" class="w-4 h-4"></i>
                            <span>Perbarui Password & Amankan Akun</span>
                        </button>
                    </div>
                </form>
            </div>

        </div>

        <!-- Right Column: Status Akun & Audit Keamanan (4 Columns) -->
        <div class="lg:col-span-4 space-y-6">
            
            <!-- Card 3: Profil Ringkas Administrator -->
            <div class="glass-card p-6 rounded-3xl space-y-5 border border-slate-200/80 dark:border-slate-800/80">
                <div class="flex items-center space-x-4">
                    <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-indigo-600/25">
                        {{ strtoupper(substr($user->name, 0, 1)) }}
                    </div>
                    <div>
                        <div class="font-bold text-slate-900 dark:text-white text-base">{{ $user->name }}</div>
                        <div class="text-xs text-slate-500 font-mono truncate max-w-[180px]">{{ $user->email }}</div>
                        <span class="inline-flex items-center space-x-1 px-2 py-0.5 mt-1 rounded-full text-[10px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            <i data-lucide="shield-check" class="w-3 h-3"></i>
                            <span>Super Administrator</span>
                        </span>
                    </div>
                </div>

                <div class="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2.5 text-xs text-slate-500">
                    <div class="flex items-center justify-between">
                        <span>ID Akun:</span>
                        <span class="font-mono font-bold text-slate-700 dark:text-slate-300">#{{ $user->id }}</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span>Status Hak Akses:</span>
                        <span class="text-emerald-500 font-semibold flex items-center space-x-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>Full Access</span>
                        </span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span>Akun Dibuat:</span>
                        <span class="font-mono text-slate-600 dark:text-slate-400">{{ $user->created_at->format('d M Y') }}</span>
                    </div>
                </div>
            </div>

            <!-- Card 4: Audit & Log Keamanan Sesi -->
            <div class="glass-card p-6 rounded-3xl space-y-4 border border-slate-200/80 dark:border-slate-800/80">
                <div class="flex items-center space-x-2.5 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                    <div class="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                        <i data-lucide="activity" class="w-4 h-4"></i>
                    </div>
                    <div>
                        <h3 class="text-sm font-bold text-slate-900 dark:text-white">Audit & Log Sesi</h3>
                        <p class="text-[10px] text-slate-500">Informasi aktivitas login dan keamanan sistem.</p>
                    </div>
                </div>

                <div class="space-y-3 text-xs">
                    <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-1">
                        <span class="text-slate-400 text-[10px] uppercase font-semibold">Login Terakhir:</span>
                        <div class="font-mono text-slate-800 dark:text-slate-200 font-semibold">
                            {{ $user->last_login_at ? $user->last_login_at->translatedFormat('d M Y, H:i') : 'Sesi aktif saat ini' }}
                        </div>
                    </div>

                    <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-1">
                        <span class="text-slate-400 text-[10px] uppercase font-semibold">IP Address Terakhir:</span>
                        <div class="font-mono text-indigo-400 font-semibold">
                            {{ $user->last_login_ip ?: request()->ip() }}
                        </div>
                    </div>

                    <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-1">
                        <span class="text-slate-400 text-[10px] uppercase font-semibold">Enkripsi Password:</span>
                        <div class="font-mono text-slate-800 dark:text-slate-200">
                            Bcrypt (Bcrypt Cost 12)
                        </div>
                    </div>
                </div>

                <div class="pt-2 border-t border-slate-100 dark:border-slate-800">
                    <form method="POST" action="{{ route('admin.logout') }}">
                        @csrf
                        <button type="submit" class="w-full py-2.5 rounded-xl border border-rose-500/30 text-rose-500 hover:bg-rose-500/10 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all">
                            <i data-lucide="log-out" class="w-3.5 h-3.5"></i>
                            <span>Keluar dari Sesi Ini</span>
                        </button>
                    </form>
                </div>
            </div>

        </div>

    </div>

</div>
@endsection


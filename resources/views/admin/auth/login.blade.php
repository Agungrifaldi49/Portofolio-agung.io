<!DOCTYPE html>
<html lang="id" class="dark">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Login Administrator — Portfolio Console</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-[#0b0f19] text-slate-100 flex items-center justify-center min-h-screen p-4 selection:bg-indigo-500 selection:text-white">

    <div class="w-full max-w-md space-y-8">
        <!-- Logo / Brand Header -->
        <div class="text-center space-y-2">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl font-bold mx-auto shadow-xl shadow-indigo-500/20">
                &lt;/&gt;
            </div>
            <h1 class="text-2xl font-extrabold text-white">Administrator Console</h1>
            <p class="text-xs text-slate-400">Masuk untuk mengelola portofolio, repositori GitHub, dan konten.</p>
        </div>

        <!-- Login Card -->
        <div class="glass-card p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
            @if(session('success'))
                <div class="p-3 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800 rounded-xl">
                    {{ session('success') }}
                </div>
            @endif

            @if($errors->any())
                <div class="p-3 text-xs text-rose-400 bg-rose-950/40 border border-rose-800 rounded-xl space-y-1">
                    @foreach($errors->all() as $error)
                        <p>{{ $error }}</p>
                    @endforeach
                </div>
            @endif

            <form method="POST" action="{{ url()->current() }}" class="space-y-4">
                @csrf

                <div class="space-y-1.5">
                    <label for="email" class="block text-xs font-semibold text-slate-300">Alamat Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value="{{ old('email', 'admin@portfolio.local') }}" 
                        required 
                        autocomplete="email"
                        autofocus
                        class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-700 bg-slate-900/80 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                </div>

                <div class="space-y-1.5">
                    <div class="flex items-center justify-between text-xs">
                        <label for="password" class="font-semibold text-slate-300">Kata Sandi</label>
                    </div>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required 
                        autocomplete="current-password"
                        placeholder="••••••••••••"
                        class="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-700 bg-slate-900/80 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                </div>

                <div class="flex items-center justify-between text-xs text-slate-400">
                    <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" name="remember" class="rounded border-slate-700 text-indigo-600 focus:ring-indigo-500 bg-slate-900">
                        <span>Ingat sesi saya</span>
                    </label>
                </div>

                <button type="submit" class="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-bold shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center space-x-2">
                    <i data-lucide="lock" class="w-4 h-4"></i>
                    <span>Masuk ke Dashboard</span>
                </button>
            </form>

            <div class="pt-4 border-t border-slate-800 text-[11px] text-slate-500 text-center space-y-1">
                <p>Akun administrator dibuat saat proses migrasi &amp; seeder.</p>
                <p class="font-mono text-slate-400">Default: admin@portfolio.local / AdminPortfolio123!</p>
                <p>Ubah password sewaktu-waktu melalui perintah:</p>
                <code class="block font-mono bg-slate-900 px-2 py-1 rounded text-indigo-400 text-[10px]">php artisan portfolio:admin</code>
            </div>
        </div>

        <div class="text-center">
            <a href="{{ route('home') }}" class="text-xs text-slate-400 hover:text-white transition-colors flex items-center justify-center space-x-1">
                <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
                <span>Kembali ke Website Publik</span>
            </a>
        </div>
    </div>

</body>
</html>


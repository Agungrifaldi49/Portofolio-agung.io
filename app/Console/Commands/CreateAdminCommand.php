<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class CreateAdminCommand extends Command
{
    protected $signature = 'portfolio:admin {--email= : Email administrator} {--name= : Nama administrator} {--password= : Password administrator}';
    protected $description = 'Membuat atau memperbarui akun administrator secara aman via CLI';

    public function handle(): int
    {
        $email = $this->option('email') ?: $this->ask('Masukkan email administrator');
        $name = $this->option('name') ?: $this->ask('Masukkan nama administrator', 'Administrator');
        $password = $this->option('password') ?: $this->secret('Masukkan password baru');

        if (empty($email) || empty($password)) {
            $this->error('Email dan password tidak boleh kosong.');
            return Command::FAILURE;
        }

        if (strlen($password) < 8) {
            $this->error('Password minimal 8 karakter.');
            return Command::FAILURE;
        }

        $user = User::updateOrCreate(
            ['email' => $email],
            [
                'name' => $name,
                'password' => Hash::make($password),
                'email_verified_at' => now(),
            ]
        );

        $this->info("Administrator [{$user->email}] berhasil dikonfigurasi.");
        return Command::SUCCESS;
    }
}


<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Project;
use Symfony\Component\Process\Process;

class CaptureProjectScreenshots extends Command
{
    protected $signature = 'portfolio:capture-screenshots {--slug= : Slug proyek tertentu}';
    protected $description = 'Menangkap screenshot tampilan asli halaman index proyek menggunakan headless browser';

    public function handle(): int
    {
        $this->info('Menjalankan proses penangkapan screenshot halaman index proyek...');

        $scriptPath = base_path('capture_project_screenshots.cjs');
        if (!file_exists($scriptPath)) {
            $this->error("Script capture_project_screenshots.cjs tidak ditemukan.");
            return Command::FAILURE;
        }

        $process = new Process(['node', $scriptPath]);
        $process->setTimeout(60);
        $process->run();

        if (!$process->isSuccessful()) {
            $this->error('Gagal mengambil screenshot: ' . $process->getErrorOutput());
            return Command::FAILURE;
        }

        $this->line($process->getOutput());

        // Update database projects
        $map = [
            'e-voting-osis' => 'projects/evoting_osis_index.png',
            'elearning' => 'projects/elearning_index.png',
            'whatsapp-gateway' => 'projects/whatsapp_gateway_index.png',
            'sim-mhs' => 'projects/sim_mhs_index.png',
        ];

        foreach ($map as $slug => $imgPath) {
            $storageFile = storage_path('app/public/' . $imgPath);
            if (file_exists($storageFile)) {
                Project::where('slug', $slug)->update(['cover_image' => $imgPath]);
                $this->info("✓ Update cover_image untuk [{$slug}] -> {$imgPath}");
            }
        }

        $this->info('Semua screenshot halaman index proyek berhasil diperbarui ke database!');
        return Command::SUCCESS;
    }
}

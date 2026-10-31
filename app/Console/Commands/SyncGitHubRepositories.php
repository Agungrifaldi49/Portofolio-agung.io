<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\GitHubSyncService;

class SyncGitHubRepositories extends Command
{
    protected $signature = 'portfolio:github-sync {--force : Abaikan cache dan ambil langsung dari API}';
    protected $description = 'Sinkronisasi repositori publik dari akun GitHub pemilik portfolio';

    public function handle(GitHubSyncService $syncService): int
    {
        $this->info('Memulai sinkronisasi repositori GitHub...');
        $force = (bool) $this->option('force');

        $result = $syncService->sync(triggeredBy: 'cli', forceRefresh: $force);

        if ($result['success']) {
            $this->info($result['message']);
            return Command::SUCCESS;
        }

        $this->warn($result['message']);
        return Command::FAILURE;
    }
}


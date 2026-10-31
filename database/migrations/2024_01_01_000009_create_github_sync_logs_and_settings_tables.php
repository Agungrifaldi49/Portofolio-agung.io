<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('github_sync_logs', function (Blueprint $table) {
            $table->id();
            $table->string('status'); // success, failed, partial
            $table->integer('repositories_count')->default(0);
            $table->integer('featured_count')->default(0);
            $table->text('message');
            $table->json('payload')->nullable();
            $table->string('triggered_by')->default('manual'); // manual, scheduler, webhook
            $table->timestamps();
        });

        Schema::create('site_settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->longText('value')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('site_settings');
        Schema::dropIfExists('github_sync_logs');
    }
};


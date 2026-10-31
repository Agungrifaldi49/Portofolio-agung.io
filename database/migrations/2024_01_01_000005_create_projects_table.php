<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('excerpt', 500)->nullable();
            $table->longText('description')->nullable();
            $table->text('problem_statement')->nullable();
            $table->text('project_goal')->nullable();
            $table->json('key_features')->nullable();
            $table->text('challenges')->nullable();
            $table->text('solutions')->nullable();
            $table->string('cover_image')->nullable();
            $table->json('gallery_images')->nullable();
            $table->foreignId('category_id')->nullable()->constrained('categories')->nullOnDelete();
            $table->string('demo_url')->nullable();
            $table->string('repo_url')->nullable();
            $table->string('documentation_url')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_published')->default(true);
            $table->integer('sort_order')->default(0);
            
            // GitHub integration fields
            $table->string('source_type')->default('manual'); // 'manual' or 'github'
            $table->unsignedBigInteger('github_repo_id')->nullable()->index();
            $table->string('github_full_name')->nullable();
            $table->integer('github_stars')->default(0);
            $table->integer('github_forks')->default(0);
            $table->string('github_language')->nullable();
            $table->json('github_topics')->nullable();
            $table->timestamp('github_updated_at')->nullable();
            $table->timestamp('last_synced_at')->nullable();
            
            $table->timestamps();

            $table->index(['is_published', 'is_featured', 'sort_order']);
        });

        Schema::create('project_technology', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')->constrained('projects')->cascadeOnDelete();
            $table->foreignId('technology_id')->constrained('technologies')->cascadeOnDelete();
            $table->timestamps();

            $table->unique(['project_id', 'technology_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('project_technology');
        Schema::dropIfExists('projects');
    }
};


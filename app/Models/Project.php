<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'description',
        'problem_statement',
        'project_goal',
        'key_features',
        'challenges',
        'solutions',
        'cover_image',
        'gallery_images',
        'category_id',
        'demo_url',
        'repo_url',
        'documentation_url',
        'is_featured',
        'is_published',
        'sort_order',
        'source_type',
        'github_repo_id',
        'github_full_name',
        'github_stars',
        'github_forks',
        'github_language',
        'github_topics',
        'github_updated_at',
        'last_synced_at',
    ];

    protected $casts = [
        'key_features' => 'array',
        'gallery_images' => 'array',
        'github_topics' => 'array',
        'is_featured' => 'boolean',
        'is_published' => 'boolean',
        'sort_order' => 'integer',
        'github_stars' => 'integer',
        'github_forks' => 'integer',
        'github_updated_at' => 'datetime',
        'last_synced_at' => 'datetime',
    ];

    public static function boot()
    {
        parent::boot();
        static::saving(function ($project) {
            if (empty($project->slug)) {
                $baseSlug = Str::slug($project->title);
                $slug = $baseSlug;
                $count = 1;
                while (static::where('slug', $slug)->where('id', '!=', $project->id ?? 0)->exists()) {
                    $slug = $baseSlug . '-' . $count++;
                }
                $project->slug = $slug;
            }
        });
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function technologies()
    {
        return $this->belongsToMany(Technology::class, 'project_technology');
    }

    public function scopePublished($query)
    {
        return $query->where('is_published', true)->orderBy('sort_order', 'asc')->orderBy('created_at', 'desc');
    }

    public function scopeFeatured($query)
    {
        return $query->published()->where('is_featured', true);
    }

    /**
     * Get the dynamic cover image URL.
     * Supports:
     * 1. Uploaded cover image file or direct external URL
     * 2. Live website screenshot from demo_url (if provided)
     * 3. GitHub repository OpenGraph visual preview card
     */
    public function getCoverImageUrlAttribute(): ?string
    {
        if (!empty($this->cover_image)) {
            if (str_starts_with($this->cover_image, 'http://') || str_starts_with($this->cover_image, 'https://')) {
                return $this->cover_image;
            }
            return asset('storage/' . $this->cover_image);
        }

        // 1. Live website screenshot if demo_url is a public web link
        if (!empty($this->demo_url) && filter_var($this->demo_url, FILTER_VALIDATE_URL) && !str_contains($this->demo_url, 'localhost')) {
            return 'https://s0.wp.com/mshots/v1/' . urlencode($this->demo_url) . '?w=800';
        }

        // 2. Automated official GitHub OpenGraph visual banner for GitHub repositories
        if ($this->source_type === 'github' && !empty($this->github_full_name)) {
            return "https://opengraph.githubassets.com/1/{$this->github_full_name}";
        }

        return null;
    }
}


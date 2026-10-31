<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfileSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'title',
        'hero_badge',
        'bio',
        'about_text',
        'avatar_path',
        'resume_path',
        'contact_email',
        'location',
        'github_url',
        'linkedin_url',
        'twitter_url',
        'website_url',
        'hero_titles',
        'available_for_hire',
    ];

    protected $casts = [
        'hero_titles' => 'array',
        'available_for_hire' => 'boolean',
    ];

    public static function current(): self
    {
        return static::firstOrCreate([], [
            'full_name' => 'John Doe',
            'title' => 'Senior Full-Stack & Cloud Architect',
            'hero_badge' => 'Open for High-Impact Opportunities',
            'bio' => 'Engineering scalable web architectures, resilient backend microservices, and elegant modern user interfaces.',
            'about_text' => "With years of dedicated software engineering experience, I specialize in crafting performant applications using PHP/Laravel, modern JavaScript/TypeScript architectures, and cloud infrastructure.\n\nMy philosophy balances clean domain-driven architecture, robust security, maintainability, and exceptional user experience.",
            'contact_email' => 'contact@example.com',
            'location' => 'Jakarta, Indonesia (UTC+7)',
            'hero_titles' => ['Full-Stack Developer', 'Laravel Specialist', 'API & Database Architect', 'Open Source Contributor'],
            'available_for_hire' => true,
        ]);
    }
}


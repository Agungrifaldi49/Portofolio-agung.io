<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory;

    protected $fillable = [
        'role',
        'company',
        'company_url',
        'location',
        'period',
        'start_date',
        'end_date',
        'is_current',
        'description',
        'key_responsibilities',
        'sort_order',
        'is_published',
    ];

    protected $casts = [
        'key_responsibilities' => 'array',
        'is_current' => 'boolean',
        'is_published' => 'boolean',
        'sort_order' => 'integer',
        'start_date' => 'date',
        'end_date' => 'date',
    ];

    public function scopePublished($query)
    {
        return $query->where('is_published', true)->orderBy('sort_order', 'asc')->orderBy('start_date', 'desc');
    }
}


<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GithubSyncLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'status',
        'repositories_count',
        'featured_count',
        'message',
        'payload',
        'triggered_by',
    ];

    protected $casts = [
        'payload' => 'array',
        'repositories_count' => 'integer',
        'featured_count' => 'integer',
    ];
}


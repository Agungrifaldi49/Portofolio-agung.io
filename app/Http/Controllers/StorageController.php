<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\StreamedResponse;

class StorageController extends Controller
{
    /**
     * Serve uploaded files from storage when symlinks are missing or disabled on shared hosting/cPanel.
     *
     * @param string $path
     * @return BinaryFileResponse|StreamedResponse
     */
    public function show(string $path)
    {
        // Sanitize path against directory traversal
        $cleanPath = ltrim(str_replace(['..', "\0"], '', $path), '/');

        if (empty($cleanPath)) {
            abort(404);
        }

        $disk = Storage::disk('public');

        if ($disk->exists($cleanPath)) {
            $headers = [
                'Cache-Control' => 'public, max-age=31536000, immutable',
            ];
            return $disk->response($cleanPath, null, $headers);
        }

        $storagePath = storage_path('app/public/' . $cleanPath);
        if (file_exists($storagePath) && is_file($storagePath)) {
            return response()->file($storagePath, [
                'Cache-Control' => 'public, max-age=31536000, immutable',
            ]);
        }

        $publicStoragePath = public_path('storage/' . $cleanPath);
        if (file_exists($publicStoragePath) && is_file($publicStoragePath)) {
            return response()->file($publicStoragePath, [
                'Cache-Control' => 'public, max-age=31536000, immutable',
            ]);
        }

        abort(404);
    }
}

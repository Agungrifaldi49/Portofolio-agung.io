<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use Illuminate\Http\Request;

class CertificateController extends Controller
{
    public function index(Request $request)
    {
        $query = Certificate::published();

        if ($category = $request->input('category')) {
            $query->where('category', $category);
        }

        $certificates = $query->paginate(9)->withQueryString();

        $categories = Certificate::published()
            ->distinct('category')
            ->pluck('category')
            ->filter()
            ->values();

        return view('pages.certificates', compact('certificates', 'categories'));
    }
}


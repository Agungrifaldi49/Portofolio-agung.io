<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Article;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    public function index(): Response
    {
        $projects = Project::published()->get();
        $articles = Article::published()->get();

        $content = view('seo.sitemap', compact('projects', 'articles'))->render();

        return response($content, 200)
            ->header('Content-Type', 'text/xml');
    }

    public function robots(): Response
    {
        $sitemapUrl = url('/sitemap.xml');
        $robots = "User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /admin\n\nSitemap: {$sitemapUrl}\n";

        return response($robots, 200)
            ->header('Content-Type', 'text/plain');
    }
}


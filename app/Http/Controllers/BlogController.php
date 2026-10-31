<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    public function index(Request $request)
    {
        $query = Article::with(['category', 'tags'])->published();

        if ($search = $request->input('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('excerpt', 'like', "%{$search}%")
                  ->orWhere('content', 'like', "%{$search}%");
            });
        }

        if ($categorySlug = $request->input('category')) {
            $query->whereHas('category', function ($q) use ($categorySlug) {
                $q->where('slug', $categorySlug);
            });
        }

        if ($tagSlug = $request->input('tag')) {
            $query->whereHas('tags', function ($q) use ($tagSlug) {
                $q->where('slug', $tagSlug);
            });
        }

        $articles = $query->paginate(6)->withQueryString();
        $categories = Category::where('type', 'article')->has('articles')->get();
        $tags = Tag::has('articles')->get();

        return view('pages.blog.index', compact('articles', 'categories', 'tags'));
    }

    public function show(string $slug)
    {
        $article = Article::with(['category', 'tags'])
            ->where('slug', $slug)
            ->published()
            ->firstOrFail();

        // Safe markdown conversion: strip raw html, disallow unsafe links to prevent XSS
        $parsedContent = Str::markdown($article->content, [
            'html_input' => 'strip',
            'allow_unsafe_links' => false,
        ]);

        $relatedArticles = Article::published()
            ->where('id', '!=', $article->id)
            ->where(function ($q) use ($article) {
                if ($article->category_id) {
                    $q->where('category_id', $article->category_id);
                }
            })
            ->take(3)
            ->get();

        return view('pages.blog.show', compact('article', 'parsedContent', 'relatedArticles'));
    }
}


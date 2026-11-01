<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $query = Article::with(['category', 'tags'])->orderBy('created_at', 'desc');

        if ($search = $request->input('search')) {
            $query->where('title', 'like', "%{$search}%");
        }

        if ($status = $request->input('status')) {
            $query->where('status', $status);
        }

        $articles = $query->paginate(12)->withQueryString();

        return view('admin.articles.index', compact('articles'));
    }

    public function create()
    {
        $categories = Category::where('type', 'article')->get();
        $tags = Tag::orderBy('name')->get();

        return view('admin.articles.create', compact('categories', 'tags'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'category_id' => ['nullable', 'exists:categories,id'],
            'excerpt' => ['nullable', 'string', 'max:500'],
            'content' => ['required', 'string'],
            'status' => ['required', 'in:draft,published'],
            'tags' => ['nullable', 'array'],
            'tags.*' => ['exists:tags,id'],
            'new_tags' => ['nullable', 'string'],
            'meta_description' => ['nullable', 'string', 'max:255'],
            'meta_keywords' => ['nullable', 'string', 'max:255'],
            'cover_image' => ['nullable', 'image', 'mimes:jpeg,png,jpg,webp', 'max:3072'],
        ]);

        $article = new Article();
        $article->fill([
            'title' => $validated['title'],
            'category_id' => $validated['category_id'] ?? null,
            'excerpt' => $validated['excerpt'] ?? null,
            'content' => $validated['content'],
            'status' => $validated['status'],
            'published_at' => $validated['status'] === 'published' ? now() : null,
            'meta_description' => $validated['meta_description'] ?? null,
            'meta_keywords' => $validated['meta_keywords'] ?? null,
        ]);

        if ($request->hasFile('cover_image')) {
            $article->cover_image = $request->file('cover_image')->store('articles', 'public');
        }

        $article->save();

        $tagIds = $request->input('tags', []);
        if (!empty($validated['new_tags'])) {
            $names = array_filter(array_map('trim', explode(',', $validated['new_tags'])));
            foreach ($names as $name) {
                $tag = Tag::firstOrCreate(['name' => $name], ['slug' => Str::slug($name)]);
                $tagIds[] = $tag->id;
            }
        }
        $article->tags()->sync(array_unique($tagIds));

        return redirect()->route('admin.articles.index')->with('success', 'Artikel berhasil dibuat.');
    }

    public function edit(Article $article)
    {
        $categories = Category::where('type', 'article')->get();
        $tags = Tag::orderBy('name')->get();

        return view('admin.articles.edit', compact('article', 'categories', 'tags'));
    }

    public function update(Request $request, Article $article)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255', 'unique:articles,slug,' . $article->id],
            'category_id' => ['nullable', 'exists:categories,id'],
            'excerpt' => ['nullable', 'string', 'max:500'],
            'content' => ['required', 'string'],
            'status' => ['required', 'in:draft,published'],
            'tags' => ['nullable', 'array'],
            'tags.*' => ['exists:tags,id'],
            'new_tags' => ['nullable', 'string'],
            'meta_description' => ['nullable', 'string', 'max:255'],
            'meta_keywords' => ['nullable', 'string', 'max:255'],
            'cover_image' => ['nullable', 'image', 'mimes:jpeg,png,jpg,webp', 'max:3072'],
        ]);

        if ($request->hasFile('cover_image')) {
            if ($article->cover_image && Storage::disk('public')->exists($article->cover_image)) {
                Storage::disk('public')->delete($article->cover_image);
            }
            $article->cover_image = $request->file('cover_image')->store('articles', 'public');
        }

        if (!empty($validated['slug'])) {
            $article->slug = Str::slug($validated['slug']);
        }

        if ($article->status === 'draft' && $validated['status'] === 'published' && !$article->published_at) {
            $article->published_at = now();
        }

        $article->fill([
            'title' => $validated['title'],
            'category_id' => $validated['category_id'] ?? null,
            'excerpt' => $validated['excerpt'] ?? null,
            'content' => $validated['content'],
            'status' => $validated['status'],
            'meta_description' => $validated['meta_description'] ?? null,
            'meta_keywords' => $validated['meta_keywords'] ?? null,
        ]);

        $article->save();

        $tagIds = $request->input('tags', []);
        if (!empty($validated['new_tags'])) {
            $names = array_filter(array_map('trim', explode(',', $validated['new_tags'])));
            foreach ($names as $name) {
                $tag = Tag::firstOrCreate(['name' => $name], ['slug' => Str::slug($name)]);
                $tagIds[] = $tag->id;
            }
        }
        $article->tags()->sync(array_unique($tagIds));

        return redirect()->route('admin.articles.index')->with('success', 'Artikel berhasil diperbarui.');
    }

    public function destroy(Article $article)
    {
        if ($article->cover_image && Storage::disk('public')->exists($article->cover_image)) {
            Storage::disk('public')->delete($article->cover_image);
        }
        $article->tags()->detach();
        $article->delete();

        return redirect()->route('admin.articles.index')->with('success', 'Artikel berhasil dihapus.');
    }
}


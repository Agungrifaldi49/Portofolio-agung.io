<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Project;
use App\Models\Article;
use App\Models\ContactMessage;

class PublicPagesTest extends TestCase
{
    public function test_home_page_is_accessible(): void
    {
        $response = $this->get('/');
        $response->assertStatus(200);
        $response->assertSee('Katalog Proyek');
    }

    public function test_about_page_is_accessible(): void
    {
        $response = $this->get('/about');
        $response->assertStatus(200);
        $response->assertSee('Tentang Saya');
    }

    public function test_skills_page_is_accessible(): void
    {
        $response = $this->get('/skills');
        $response->assertStatus(200);
        $response->assertSee('Keahlian & Penguasaan Teknis', false);
    }

    public function test_projects_index_is_accessible(): void
    {
        $response = $this->get('/projects');
        $response->assertStatus(200);
        $response->assertSee('Katalog Proyek');
    }

    public function test_project_detail_is_accessible(): void
    {
        $project = Project::published()->first();
        if ($project) {
            $response = $this->get('/projects/' . $project->slug);
            $response->assertStatus(200);
            $response->assertSee($project->title);
        } else {
            $this->assertTrue(true);
        }
    }

    public function test_experience_page_is_accessible(): void
    {
        $response = $this->get('/experience');
        $response->assertStatus(200);
        $response->assertSee('Pengalaman & Rekam Jejak', false);
    }

    public function test_certificates_page_is_accessible(): void
    {
        $response = $this->get('/certificates');
        $response->assertStatus(200);
        $response->assertSee('Sertifikasi & Lisensi', false);
    }

    public function test_blog_index_is_accessible(): void
    {
        $response = $this->get('/blog');
        $response->assertStatus(200);
        $response->assertSee('Artikel & Blog Teknis', false);
    }

    public function test_blog_detail_is_accessible(): void
    {
        $article = Article::published()->first();
        if ($article) {
            $response = $this->get('/blog/' . $article->slug);
            $response->assertStatus(200);
            $response->assertSee($article->title);
        } else {
            $this->assertTrue(true);
        }
        while (ob_get_level() > 1) {
            ob_end_clean();
        }
    }

    public function test_contact_page_is_accessible(): void
    {
        $response = $this->get('/contact');
        $response->assertStatus(200);
        $response->assertSee('Hubungi Saya');
    }

    public function test_contact_form_submission_success(): void
    {
        $payload = [
            'name' => 'Test Visitor',
            'email' => 'visitor@example.com',
            'subject' => 'Project Inquiry Test',
            'message' => 'Halo, ini adalah pengujian pengiriman pesan kontak portfolio.',
        ];

        $response = $this->post('/contact', $payload);
        $response->assertSessionHas('success');

        $this->assertDatabaseHas('contact_messages', [
            'email' => 'visitor@example.com',
            'subject' => 'Project Inquiry Test',
        ]);
    }

    public function test_contact_form_honeypot_rejects_bots(): void
    {
        $payload = [
            'name' => 'Spam Bot',
            'email' => 'bot@spammer.org',
            'subject' => 'Spam Title',
            'message' => 'Spam content text lorem ipsum',
            'website_url_hp' => 'http://spam-site.com',
        ];

        $response = $this->post('/contact', $payload);
        $response->assertSessionHas('error');

        $this->assertDatabaseMissing('contact_messages', [
            'email' => 'bot@spammer.org',
        ]);
    }

    public function test_sitemap_xml_and_robots(): void
    {
        $sitemapRes = $this->get('/sitemap.xml');
        $sitemapRes->assertStatus(200);
        $sitemapRes->assertHeader('Content-Type', 'text/xml; charset=UTF-8');

        $robotsRes = $this->get('/robots.txt');
        $robotsRes->assertStatus(200);
        $robotsRes->assertHeader('Content-Type', 'text/plain; charset=UTF-8');
    }
}


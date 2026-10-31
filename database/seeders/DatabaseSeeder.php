<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\ProfileSetting;
use App\Models\Skill;
use App\Models\Category;
use App\Models\Technology;
use App\Models\Project;
use App\Models\Experience;
use App\Models\Education;
use App\Models\Certificate;
use App\Models\Article;
use App\Models\Tag;
use App\Models\SiteSetting;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Admin User
        $admin = User::firstOrCreate(
            ['email' => 'admin@portfolio.local'],
            [
                'name' => 'Portfolio Administrator',
                'password' => Hash::make('AdminPortfolio123!'),
                'email_verified_at' => now(),
            ]
        );

        // 2. Profile Settings
        ProfileSetting::firstOrCreate(['id' => 1], [
            'full_name' => 'Alex Pratama',
            'title' => 'Senior Full-Stack Developer & Cloud Architect',
            'hero_badge' => 'Open for High-Impact Projects & Roles',
            'bio' => 'Engineering scalable enterprise web applications, resilient backend APIs, and modern intuitive user interfaces.',
            'about_text' => "Saya adalah seorang Software Engineer yang berfokus pada pengembangan backend performa tinggi dengan Laravel dan arsitektur database modern, dipadukan dengan antarmuka frontend yang responsif dan elegan.\n\nMemiliki dedikasi tinggi terhadap kode yang bersih (clean code), arsitektur modular, keamanan aplikasi, serta otomasi deployment.",
            'contact_email' => 'alex.pratama@example.com',
            'location' => 'Jakarta, Indonesia',
            'github_url' => 'https://github.com',
            'linkedin_url' => 'https://linkedin.com',
            'twitter_url' => 'https://twitter.com',
            'website_url' => 'https://localhost:8000',
            'hero_titles' => [
                'Full-Stack Developer',
                'Laravel & PHP Specialist',
                'API & Database Architect',
                'Open Source & DevOps Enthusiast'
            ],
            'available_for_hire' => true,
        ]);

        // 3. Site Settings Default
        SiteSetting::set('site_title', 'Alex Pratama — Senior Full-Stack Developer');
        SiteSetting::set('site_description', 'Portfolio profesional Senior Full-Stack Developer yang memamerkan proyek, keahlian, repositori GitHub, dan artikel teknis.');
        SiteSetting::set('github_username', 'octocat'); // sample GitHub account for preview
        SiteSetting::set('github_topic', 'portfolio');
        SiteSetting::set('github_cache_ttl', '900');

        // 4. Categories
        $catWeb = Category::firstOrCreate(['name' => 'Web Application', 'slug' => 'web-application', 'type' => 'project']);
        $catApi = Category::firstOrCreate(['name' => 'API & Microservices', 'slug' => 'api-microservices', 'type' => 'project']);
        $catOpen = Category::firstOrCreate(['name' => 'Open Source', 'slug' => 'open-source', 'type' => 'project']);
        
        $catBlog1 = Category::firstOrCreate(['name' => 'Architecture', 'slug' => 'architecture', 'type' => 'article']);
        $catBlog2 = Category::firstOrCreate(['name' => 'Backend & Security', 'slug' => 'backend-security', 'type' => 'article']);

        // 5. Technologies
        $techs = [
            'Laravel' => 'box',
            'PHP 8' => 'server',
            'MySQL' => 'database',
            'Tailwind CSS' => 'palette',
            'Alpine.js' => 'code-2',
            'Docker' => 'container',
            'Redis' => 'layers',
            'Git & GitHub' => 'git-branch',
            'REST API' => 'network',
        ];
        $techModels = [];
        foreach ($techs as $name => $icon) {
            $techModels[$name] = Technology::firstOrCreate(['name' => $name], ['icon' => $icon]);
        }

        // 6. Skills (Categorized without arbitrary percentages)
        $initialSkills = [
            // Backend
            ['name' => 'PHP / Laravel', 'category' => 'Backend Development', 'icon' => 'server', 'level_label' => 'Core Specialization', 'description' => 'Eloquent ORM, Queues, Service Layer, Caching, Middleware & Event-driven architecture', 'sort_order' => 1],
            ['name' => 'RESTful API & Microservices', 'category' => 'Backend Development', 'icon' => 'network', 'level_label' => 'Advanced', 'description' => 'API Authentication, Rate Limiting, OpenAPI/Swagger specification', 'sort_order' => 2],
            ['name' => 'Python & Scripting', 'category' => 'Backend Development', 'icon' => 'terminal', 'level_label' => 'Proficient', 'description' => 'Automation scripts, web scraping, and data processing', 'sort_order' => 3],
            
            // Frontend
            ['name' => 'Tailwind CSS & Modern CSS', 'category' => 'Frontend Development', 'icon' => 'palette', 'level_label' => 'Advanced', 'description' => 'Responsive UI, dark/light theme systems, animation & layout architecture', 'sort_order' => 1],
            ['name' => 'JavaScript (ES6+) & Alpine.js', 'category' => 'Frontend Development', 'icon' => 'code-2', 'level_label' => 'Proficient', 'description' => 'DOM manipulation, reactive components, asynchronous workflows', 'sort_order' => 2],
            ['name' => 'Semantic HTML5 & Accessibility', 'category' => 'Frontend Development', 'icon' => 'layout', 'level_label' => 'Advanced', 'description' => 'WCAG standards, keyboard navigation, SEO-optimized markup', 'sort_order' => 3],

            // Database
            ['name' => 'MySQL / MariaDB', 'category' => 'Database', 'icon' => 'database', 'level_label' => 'Advanced', 'description' => 'Schema normalization, indexing strategies, query execution optimization', 'sort_order' => 1],
            ['name' => 'Redis Caching & Queue', 'category' => 'Database', 'icon' => 'layers', 'level_label' => 'Proficient', 'description' => 'In-memory caching, distributed locks, session management', 'sort_order' => 2],

            // Tools & Technologies
            ['name' => 'Git, GitHub & CI/CD', 'category' => 'Tools & Technologies', 'icon' => 'git-branch', 'level_label' => 'Advanced', 'description' => 'Git flow, pull requests review, GitHub Actions pipelines', 'sort_order' => 1],
            ['name' => 'Docker & Containerization', 'category' => 'Tools & Technologies', 'icon' => 'box', 'level_label' => 'Proficient', 'description' => 'Docker Compose multi-service environments for development and testing', 'sort_order' => 2],
            ['name' => 'cPanel & Linux Server Administration', 'category' => 'Tools & Technologies', 'icon' => 'hard-drive', 'level_label' => 'Proficient', 'description' => 'Nginx, Apache, SSL configuration, cron automation, file permission security', 'sort_order' => 3],
        ];

        foreach ($initialSkills as $skillData) {
            Skill::firstOrCreate(['name' => $skillData['name']], $skillData);
        }

        // 7. Experiences (Faktual contoh profesional terstruktur)
        Experience::firstOrCreate(['role' => 'Senior Full-Stack Engineer', 'company' => 'Nexus Digital Solutions'], [
            'location' => 'Jakarta (Hybrid)',
            'period' => '2023 — Sekarang',
            'is_current' => true,
            'description' => 'Memimpin perancangan dan pengembangan platform enterprise terintegrasi dengan arsitektur microservices dan Laravel backend.',
            'key_responsibilities' => [
                'Mengarsiteki modul pembayaran dan integrasi gateway pihak ketiga dengan toleransi kesalahan tinggi.',
                'Mengoptimalkan performa query SQL dan menerapkan Redis cache, meningkatkan response time hingga 45%.',
                'Membimbing tim junior dalam implementasi Clean Code, testing otomatis, dan code review.'
            ],
            'sort_order' => 1,
            'is_published' => true,
        ]);

        Experience::firstOrCreate(['role' => 'Web Developer', 'company' => 'Inovasi Teknologi Nusantara'], [
            'location' => 'Bandung, Indonesia',
            'period' => '2021 — 2023',
            'is_current' => false,
            'description' => 'Mengembangkan berbagai aplikasi web interaktif, portal internal perusahaan, dan RESTful API.',
            'key_responsibilities' => [
                'Membangun dashboard analitik real-time dengan visualisasi data responsif.',
                'Mengintegrasikan sistem autentikasi multi-peran dengan otorisasi berbasis hak akses ketat.',
                'Menyusun pipeline pengujian otomatis untuk meminimalisir bug sebelum rilis produksi.'
            ],
            'sort_order' => 2,
            'is_published' => true,
        ]);

        // 8. Education
        Education::firstOrCreate(['degree' => 'Sarjana Komputer (S.Kom.)', 'institution' => 'Universitas Teknologi Indonesia'], [
            'field_of_study' => 'Teknik Informatika / Software Engineering',
            'period' => '2017 — 2021',
            'description' => 'Fokus kajian pada Rekayasa Perangkat Lunak, Arsitektur Basis Data, dan Sistem Terdistribusi.',
            'sort_order' => 1,
            'is_published' => true,
        ]);

        // 9. Certificates
        Certificate::firstOrCreate(['title' => 'Certified Laravel Developer'], [
            'issuer' => 'Laravel Certification Platform',
            'issue_date' => '2023-08-15',
            'credential_id' => 'CLD-882910',
            'credential_url' => 'https://certification.laravel.com',
            'category' => 'Backend Development',
            'description' => 'Sertifikasi kompetensi resmi mencakup Eloquent ORM, Testing, Arsitektur Middleware, dan Keamanan Web Laravel.',
            'sort_order' => 1,
            'is_published' => true,
        ]);

        Certificate::firstOrCreate(['title' => 'MySQL Database Administrator & Query Optimization'], [
            'issuer' => 'Database Engineers Institute',
            'issue_date' => '2022-11-20',
            'credential_id' => 'DBE-44120',
            'credential_url' => 'https://example.com/verify/DBE-44120',
            'category' => 'Database',
            'description' => 'Validasi keahlian perancangan indeks basis data relasional, replikasi data, dan troubleshooting query kompleks.',
            'sort_order' => 2,
            'is_published' => true,
        ]);

        // 10. Sample Projects
        $p1 = Project::firstOrCreate(['slug' => 'enterprise-resource-gateway'], [
            'title' => 'Enterprise Resource & API Gateway',
            'excerpt' => 'Gateway API modern dengan fitur rate limiting terdistribusi, caching berlapis, dan dashboard monitoring real-time.',
            'description' => 'Proyek ini dirancang untuk mengatasi bottleneck komunikasi antarlayanan pada arsitektur terdistribusi. Menyediakan autentikasi token JWT, circuit breaker, dan logging audit komprehensif.',
            'problem_statement' => 'Tingginya beban transaksi dan ketergantungan antarlayanan mikro membutuhkan lapisan gateway yang mampu memvalidasi permintaan secara aman tanpa menambah latensi yang signifikan.',
            'project_goal' => 'Membangun API Gateway yang aman, skalabel, serta mudah dikonfigurasi melalui antarmuka web terintegrasi.',
            'key_features' => [
                'Otorisasi berbasis token dengan validasi terdistribusi',
                'Rate limiting dinamis berbasis IP dan identitas pengguna',
                'Caching otomatis untuk respons statis dan semi-dinamis',
                'Dashboard monitoring metrik latensi dan kesehatan sistem'
            ],
            'challenges' => 'Memastikan overhead pemrosesan tidak melebihi batas 15ms per request dalam kondisi lonjakan lalu lintas.',
            'solutions' => 'Pemanfaatan in-memory caching Redis dan pipeline middleware non-blocking di Laravel.',
            'category_id' => $catApi->id,
            'demo_url' => 'https://example.com/demo-gateway',
            'repo_url' => 'https://github.com/example/api-gateway',
            'is_featured' => true,
            'is_published' => true,
            'sort_order' => 1,
            'source_type' => 'manual',
        ]);
        $p1->technologies()->sync([
            $techModels['Laravel']->id,
            $techModels['PHP 8']->id,
            $techModels['Redis']->id,
            $techModels['REST API']->id,
        ]);

        $p2 = Project::firstOrCreate(['slug' => 'saas-inventory-flow'], [
            'title' => 'SaaS Multi-Tenant Inventory & Billing System',
            'excerpt' => 'Platform manajemen stok dan faktur multi-tenant dengan isolasi data aman dan ekspor laporan otomatis.',
            'description' => 'Sistem SaaS yang memungkinkan perusahaan mengelola pergudangan terdistribusi, pembuatan faktur pajak otomatis, dan rekonsiliasi keuangan multi-cabang.',
            'problem_statement' => 'Banyak bisnis UMKM kesulitan mengelola sinkronisasi inventaris antar cabang dan sering terjadi tumpang tindih data stok.',
            'project_goal' => 'Menyediakan platform berbasis cloud dengan arsitektur multi-tenant yang aman, cepat, dan mudah dipelajari.',
            'key_features' => [
                'Database multi-tenant dengan isolasi akses ketat',
                'Pencetakan invoice PDF dan pengiriman otomatis via email',
                'Audit log setiap perubahan stok secara detail',
                'Analitik perputaran barang berbasis grafik interaktif'
            ],
            'challenges' => 'Mencegah kebocoran data antar penyewa (tenant) pada query kompleks dan laporan gabungan.',
            'solutions' => 'Mengimplementasikan Global Scope Eloquent dan middleware Tenant Resolver yang mengisolasi koneksi basis data.',
            'category_id' => $catWeb->id,
            'demo_url' => 'https://example.com/demo-saas',
            'repo_url' => 'https://github.com/example/saas-inventory',
            'is_featured' => true,
            'is_published' => true,
            'sort_order' => 2,
            'source_type' => 'manual',
        ]);
        $p2->technologies()->sync([
            $techModels['Laravel']->id,
            $techModels['MySQL']->id,
            $techModels['Tailwind CSS']->id,
            $techModels['Alpine.js']->id,
        ]);

        // 11. Sample Technical Blog
        $tagBackend = Tag::firstOrCreate(['name' => 'Backend Architecture']);
        $tagLaravel = Tag::firstOrCreate(['name' => 'Laravel']);
        $tagPerformance = Tag::firstOrCreate(['name' => 'Performance']);

        $art1 = Article::firstOrCreate(['slug' => 'strategi-optimasi-query-eloquent-pada-skala-besar'], [
            'title' => 'Strategi Optimasi Query Eloquent pada Skala Besar',
            'excerpt' => 'Panduan komprehensif mengidentifikasi masalah N+1, memanfaatkan indexing relasional, serta strategi caching cerdas di Laravel.',
            'content' => "## Pengantar\n\nDalam membangun aplikasi web berskala produksi, performa basis data sering kali menjadi titik penentu keandalan sistem. Laravel Eloquent ORM memberikan kenyamanan sintaks yang luar biasa, namun tanpa pemahaman mendalam tentang cara kerjanya, kita dapat secara tidak sengaja memicu masalah performa seperti masalah query N+1.\n\n### 1. Mengidentifikasi dan Mengatasi Masalah N+1\n\nMasalah N+1 terjadi saat kita meloop sekumpulan model dan mengakses relasinya satu per satu tanpa melakukan *eager loading*. Solusinya adalah selalu menggunakan method `with()`:\n\n```php\n// Kurang optimal:\n\$projects = Project::all();\nforeach (\$projects as \$p) {\n    echo \$p->category->name;\n}\n\n// Optimal:\n\$projects = Project::with('category', 'technologies')->get();\n```\n\n### 2. Strategi Indexing yang Tepat\n\nMembuat indeks pada kolom-kolom yang sering digunakan dalam klausa `WHERE`, `ORDER BY`, dan `JOIN` adalah langkah wajib. Pertimbangkan indeks gabungan (*composite index*) untuk kombinasi filter yang sering dieksekusi bersamaan.\n\n### 3. Caching Responsif dengan Redis\n\nUntuk data katalog atau referensi yang jarang berubah, bungkus pengambilan data dalam `Cache::remember()` dengan TTL yang terukur.\n\n### Kesimpulan\n\nDengan memadukan eager loading, indexing yang disiplin, dan strategi caching yang konsisten, kita dapat menjaga waktu respons aplikasi di bawah ambang batas kritis.",
            'category_id' => $catBlog1->id,
            'reading_time' => 5,
            'status' => 'published',
            'published_at' => now()->subDays(3),
            'meta_description' => 'Pelajari teknik optimasi query Eloquent, penanganan masalah N+1, dan penggunaan index MySQL untuk aplikasi skala besar.',
        ]);
        $art1->tags()->sync([$tagBackend->id, $tagLaravel->id, $tagPerformance->id]);
    }
}

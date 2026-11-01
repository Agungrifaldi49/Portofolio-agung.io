# Premium Developer Portfolio

Website portfolio profesional modern, performan tinggi, aman, dan siap produksi yang dibangun menggunakan ekosistem **PHP 8 / Laravel 10**, **MySQL**, **Tailwind CSS**, dan **Alpine.js**. Aplikasi ini dilengkapi integrasi otomatis dengan **GitHub REST API** untuk menyinkronkan repositori publik pilihan berdasarkan topik, serta menyediakan **Dashboard Admin** terproteksi untuk pengelolaan konten dinamis secara penuh.

---

## 1. Arsitektur & Teknologi

### Backend
- **Framework:** Laravel 10 (PHP 8.1 / 8.2 / 8.3)
- **Database:** MySQL / MariaDB (Schema ternormalisasi dengan index relasional & foreign key)
- **Template Engine:** Laravel Blade (Komponen modular, layout terisolasi)
- **ORM:** Eloquent ORM (Eager loading untuk eliminasi problem N+1)
- **Autentikasi & Otorisasi:** Laravel Auth dengan pembatasan percobaan login (Rate Limiter / Throttling)
- **Caching & Schedule:** Laravel Cache & Laravel Scheduler untuk sinkronisasi berkala

### Frontend
- **CSS Framework:** Tailwind CSS (Dark Mode sebagai tema default dengan toggle Light Mode instan)
- **Reaktivitas Ringan:** Alpine.js (Dropdown, modal drawer mobile, dynamic text rotation)
- **Ikon Antarmuka:** Lucide Icons (Render SVG berbasis DOM)
- **Tipografi:** Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*) dengan fallback lokal

### Integrasi Eksternal
- **GitHub REST API:** Pengambilan data repositori publik, stars, forks, bahasa utama, dan topik
- **Resilient Fallback:** Penyimpanan respons di cache lokal; jika API GitHub mengalami rate limit atau offline, sistem menggunakan cache terakhir tanpa merusak tampilan website

---

## 2. Struktur Modul & Halaman

### Halaman Publik (`/`)
1. **Home (`/`):** Hero section dinamis, animasi rotasi keahlian teknis (Alpine.js), ringkasan proyek unggulan, statistik repositori GitHub, timeline karir terbaru, dan formulir ajakan kolaborasi.
2. **About Me (`/about`):** Biografi lengkap, filosofi rekayasa perangkat lunak (*Clean Architecture*, *High Performance*, *Robust Security*), riwayat pendidikan, dan tombol unduh Curriculum Vitae (PDF).
3. **Skills (`/skills`):** Pemetaan keahlian teknis yang dikelompokkan berdasarkan kategori (*Frontend*, *Backend*, *Database*, *Framework*, *Tools & Technologies*) dengan label kemahiran objektif tanpa persentase fiktif.
4. **Projects Catalog (`/projects`):** Pencarian teks penuh, filter kategori, filter teknologi, filter unggulan, filter sumber (Manual vs GitHub Sync), dan paginasi.
5. **Project Detail (`/projects/{slug}`):** Studi kasus mendalam mencakup latar belakang masalah, tujuan proyek, fitur utama, tantangan pengembangan, solusi teknis, tautan live demo, dan tautan source code.
6. **Experience (`/experience`):** Timeline perjalanan karir profesional, peran, tanggung jawab utama, dan riwayat pendidikan formal.
7. **Certificates (`/certificates`):** Tampilan kartu sertifikasi resmi dengan nomor lisensi, penerbit, tanggal terbit, dan tautan verifikasi online.
8. **Technical Blog (`/blog` & `/blog/{slug}`):** Publikasi artikel teknis dengan estimasi waktu baca (*reading time*), kategori, tag, dan rendering Markdown aman (*safe HTML, XSS protection*).
9. **Contact (`/contact`):** Formulir pesan langsung dengan validasi ketat, proteksi honeypot anti-spam, penyimpanan database, dan pengiriman notifikasi email jika SMTP dikonfigurasi.
10. **SEO & Indexing (`/sitemap.xml` & `/robots.txt`):** Generator peta situs dinamis dan aturan robots.

### Dashboard Administrator (`/admin`)
- **URL Dashboard:** `/admin`
- **Autentikasi:** Form login terlindungi rate-limiting di `/admin/login`.
- **Fitur Konsol:**
  - **Ringkasan Aktivitas:** Metrik proyek, artikel, sertifikat, keahlian, dan status repositori GitHub.
  - **Kelola Profil & Resume:** Edit identitas, bio, foto avatar, tautan media sosial, serta upload/ganti/hapus berkas CV PDF.
  - **Kelola Proyek (CRUD):** Tambah, edit, hapus, unggah cover proyek, set status unggulan (*featured*), dan atur urutan tampilan.
  - **Integrasi GitHub:** Uji koneksi API langsung (menampilkan sisa kuota rate limit), tombol sinkronisasi manual, konfigurasi username & topik (`portfolio`), daftar repositori terdeteksi, toggle pengecualian repositori, dan riwayat sync log.
  - **Kelola Keahlian (Skills):** Tambah/edit nama teknologi, kategori, ikon, dan urutan.
  - **Kelola Pengalaman & Pendidikan:** CRUD timeline karir dan riwayat akademis.
  - **Kelola Sertifikat:** CRUD sertifikasi dengan upload bukti sertifikat.
  - **Kelola Blog:** Editor artikel berbasis Markdown, manajemen tag, kategori, dan status draft/published.
  - **Kotak Masuk Pesan:** Lihat pesan dari pengunjung dengan status terbaca/baru dan tombol balas langsung via email.
  - **Pengaturan Website & SEO:** Konfigurasi judul global, meta description, kata kunci SEO, dan ID Analytics.

---

## 3. Persyaratan Lingkungan (Requirements)

- **Sistem Operasi:** Windows (didukung XAMPP), macOS, atau Linux
- **Web Server:** Apache atau Nginx
- **PHP:** Versi 8.1.0 atau lebih tinggi (Ekstensi aktif: `pdo_mysql`, `mbstring`, `openssl`, `tokenizer`, `xml`, `ctype`, `json`, `fileinfo`, `curl`)
- **Database:** MySQL 5.7+ / MariaDB 10.3+
- **Composer:** Versi 2.x
- **Node.js & NPM:** (Opsional, hanya jika ingin mengompilasi ulang aset Tailwind CSS. File hasil build produksi sudah disertakan dalam repositori).

---

## 4. Panduan Instalasi Lokal (Windows & XAMPP)

### Langkah 1: Kloning atau Buka Direktori Proyek
Pastikan proyek berada di folder `htdocs` XAMPP, contoh:
```bash
c:\xampp\htdocs\portpolio
```

### Langkah 2: Konfigurasi Database MySQL
1. Buka XAMPP Control Panel dan jalankan service **Apache** dan **MySQL**.
2. Buat database baru bernama `portfolio_db`:
   ```sql
   CREATE DATABASE portfolio_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

### Langkah 3: Konfigurasi Environment (`.env`)
Salin file `.env.example` menjadi `.env` jika belum ada:
```bash
copy .env.example .env
```
Sesuaikan parameter database di file `.env`:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=portfolio_db
DB_USERNAME=root
DB_PASSWORD=
```

### Langkah 4: Generate Application Key & Storage Link
Jalankan perintah berikut pada terminal di folder proyek:
```bash
php artisan key:generate
php artisan storage:link
```

### Langkah 5: Jalankan Migration & Database Seeder
Jalankan migrasi tabel beserta data awal percontohan:
```bash
php artisan migrate --seed
```
*Data seeder mencakup akun admin awal, profil awal profesional yang mudah disesuaikan, kategori, keahlian, riwayat pengalaman, dan contoh studi kasus proyek.*

### Langkah 6: Jalankan Server Lokal
```bash
php artisan serve
```
Buka browser dan akses:
- **Website Publik:** `http://localhost:8000`
- **Dashboard Admin:** `http://localhost:8000/admin`

---

## 5. Kredensial Administrator & Perintah CLI

### Akun Bawaan (Default Seeder):
- **Email:** `admin@portfolio.local`
- **Password:** `AdminPortfolio123!`

> [!IMPORTANT]
> Untuk keamanan di lingkungan hosting produksi, Anda disarankan langsung mengubah password melalui panel admin atau membuat akun administrator baru dengan perintah CLI khusus yang aman:

### Membuat / Memperbarui Administrator via CLI:
```bash
php artisan portfolio:admin
```
Sistem akan meminta email, nama, dan password baru secara terenkripsi (Bcrypt/Argon2).

---

## 6. Konfigurasi Integrasi GitHub REST API

### Variabel Konfigurasi di `.env`:
```env
# Username GitHub pemilik portfolio
GITHUB_USERNAME=username_github_anda

# Token Personal Access Token (PAT) GitHub - Opsional untuk repositori publik
# Mengisi GITHUB_TOKEN menaikkan kuota rate limit GitHub dari 60 req/jam menjadi 5.000 req/jam
GITHUB_TOKEN=

# Topik GitHub yang disaring (default: portfolio)
GITHUB_TOPIC=portfolio

# Durasi Cache respons GitHub dalam detik (default: 900 detik / 15 menit)
GITHUB_CACHE_TTL=900
```

### Cara Kerja Sinkronisasi:
1. Tandai repositori publik Anda di GitHub dengan topik (Topic): **`portfolio`**.
2. Masukkan username Anda di halaman **Admin > Integrasi GitHub** atau di file `.env`.
3. Klik tombol **"Tarik Data GitHub Sekarang"** atau jalankan perintah CLI:
   ```bash
   php artisan portfolio:github-sync
   ```
4. Sistem akan secara otomatis:
   - Mengambil nama, deskripsi, tautan repositori, tautan homepage, bintang, fork, bahasa utama, dan topik.
   - Menyimpan repositori ke dalam tabel `projects` lokal dengan label sumber `github`.
   - Menghubungkan teknologi dan bahasa secara otomatis.
   - Mencatat log status sinkronisasi.

---

## 7. Kompilasi Aset Frontend (Tailwind CSS)

File build produksi telah tersedia di folder `public/build`. Jika Anda melakukan kustomisasi desain pada Blade atau CSS:

```bash
# Mode pengembangan dengan hot-reload
npm run dev

# Kompilasi minifikasi produksi
npm run build
```

---

## 8. Panduan Deployment ke Hosting cPanel

### 1. Struktur Folder & Document Root
Pada cPanel, web server Apache secara default mengarahkan domain utama ke `public_html`.
- **Skenario A (Document Root dapat diubah di cPanel):**
  Ubah Document Root domain Anda agar langsung mengarah ke:
  ```
  /home/username/public_html/public
  ```
  atau letakkan source code di `/home/username/laravel_portfolio` dan arahkan Document Root domain ke `/home/username/laravel_portfolio/public`.
- **Skenario B (Document Root tetap `public_html`):**
  1. Letakkan seluruh file Laravel (app, bootstrap, config, database, resources, routes, storage, vendor, .env, artisan) di luar folder public, misal di folder `/home/username/portfolio_app`.
  2. Pindahkan seluruh isi folder `public` Laravel ke dalam `/home/username/public_html`.
  3. Buka file `public_html/index.php` dan sesuaikan path autoload:
     ```php
     require __DIR__.'/../portfolio_app/vendor/autoload.php';
     $app = require_once __DIR__.'/../portfolio_app/bootstrap/app.php';
     ```

### 2. Konfigurasi File Permissions
Pastikan folder berikut memiliki izin tulis (`755` untuk direktori, `644` untuk file):
- `storage/`
- `storage/logs/`
- `storage/framework/`
- `bootstrap/cache/`

> [!CAUTION]
> Jangan pernah memberikan permission `777` secara menyeluruh ke file atau direktori di lingkungan produksi karena berisiko terhadap celah keamanan server.

### 3. File `.env` di Produksi
Pastikan pengaturan mode produksi aktif:
```env
APP_NAME="Nama Portfolio"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://namadomainanda.com
```

### 4. Konfigurasi Cron Job untuk Sinkronisasi Otomatis
Buka menu **Cron Jobs** di cPanel dan tambahkan jadwal setiap 15 menit (atau setiap jam):
```bash
* * * * * /usr/local/bin/php /home/username/portfolio_app/artisan schedule:run >> /dev/null 2>&1
```
*(Sesuaikan path binary PHP sesuai versi PHP hosting Anda, misal `/usr/bin/php81`)*.

---

## 9. Hasil Pengujian Otomatis (Automated Testing)

Aplikasi telah diuji menggunakan test suite PHPUnit dengan **23 pengujian fitur dan unit**, menghasilkan **56 assertions** dengan status **100% Passed (0 Error, 0 Failure)**:

| Kelompok Pengujian | Deskripsi Fitur yang Diuji | Status |
| :--- | :--- | :--- |
| `AdminSecurityTest` | Proteksi rute admin, pencegahan akses tamu tanpa login, proteksi brute force login, autentikasi sesi, dan proses logout aman. | **PASS** |
| `GitHubIntegrationTest` | Penanganan koneksi GitHub API, respons rate limiting HTTP 403, penyaringan topik `portfolio`, dan penyimpanan repositori ke database. | **PASS** |
| `PublicPagesTest` | Aksesibilitas halaman Home, About, Skills, Projects, Detail Proyek, Experience, Certificates, Blog, Detail Blog (Safe Markdown), Contact, Sitemap XML, dan Robots.txt. | **PASS** |
| `ContactFormSecurityTest` | Validasi input formulir kontak, penolakan otomatis bot honeypot, dan persistensi pesan ke database. | **PASS** |

Untuk menjalankan kembali pengujian kapan saja:
```bash
php artisan test
```

---

## 10. Lisensi & Hak Cipta

Proyek ini dibangun di bawah lisensi [MIT](LICENSE). Didesain dan dikembangkan secara modular untuk kebutuhan portofolio profesional developer modern.
"# Portofolio-agung.io" 

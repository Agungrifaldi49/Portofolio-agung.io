<?php

use Illuminate\Support\Facades\Route;

// Public Controllers
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\CertificateController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\SitemapController;

// Admin Controllers
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\ProjectController as AdminProjectController;
use App\Http\Controllers\Admin\SkillController as AdminSkillController;
use App\Http\Controllers\Admin\ExperienceController as AdminExperienceController;
use App\Http\Controllers\Admin\EducationController as AdminEducationController;
use App\Http\Controllers\Admin\CertificateController as AdminCertificateController;
use App\Http\Controllers\Admin\ArticleController as AdminArticleController;
use App\Http\Controllers\Admin\ContactMessageController as AdminMessageController;
use App\Http\Controllers\Admin\GitHubController as AdminGitHubController;
use App\Http\Controllers\Admin\SiteSettingController as AdminSiteSettingController;

/*
|--------------------------------------------------------------------------
| Public Portfolio Routes
|--------------------------------------------------------------------------
*/

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [AboutController::class, 'index'])->name('about');
Route::get('/about/cv', [AboutController::class, 'downloadCv'])->name('about.cv');
Route::get('/skills', [SkillController::class, 'index'])->name('skills');
Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
Route::get('/projects/{slug}', [ProjectController::class, 'show'])->name('projects.show');
Route::get('/experience', [ExperienceController::class, 'index'])->name('experience');
Route::get('/certificates', [CertificateController::class, 'index'])->name('certificates');
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{slug}', [BlogController::class, 'show'])->name('blog.show');

Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'submit'])
    ->middleware('throttle:6,1')
    ->name('contact.submit');

// SEO Routes
Route::get('/sitemap.xml', [SitemapController::class, 'index'])->name('sitemap');
Route::get('/robots.txt', [SitemapController::class, 'robots'])->name('robots');

/*
|--------------------------------------------------------------------------
| Admin Authentication Routes
|--------------------------------------------------------------------------
*/

Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
    Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:6,1')->name('login.submit');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    /*
    |--------------------------------------------------------------------------
    | Authenticated Admin Dashboard Routes
    |--------------------------------------------------------------------------
    */
    Route::middleware('auth')->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

        // Profile Management
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::put('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile/resume', [ProfileController::class, 'deleteResume'])->name('profile.resume.delete');

        // Projects Management
        Route::resource('projects', AdminProjectController::class);
        Route::post('/projects/{project}/toggle-featured', [AdminProjectController::class, 'toggleFeatured'])->name('projects.toggle-featured');
        Route::post('/projects/{project}/toggle-publish', [AdminProjectController::class, 'togglePublish'])->name('projects.toggle-publish');

        // Skills Management
        Route::resource('skills', AdminSkillController::class)->except(['show']);

        // Experiences & Educations
        Route::resource('experiences', AdminExperienceController::class)->except(['show']);
        Route::resource('educations', AdminEducationController::class)->except(['show']);

        // Certificates Management
        Route::resource('certificates', AdminCertificateController::class)->except(['show']);

        // Articles / Blog Management
        Route::resource('articles', AdminArticleController::class);

        // Contact Messages
        Route::get('/messages', [AdminMessageController::class, 'index'])->name('messages.index');
        Route::get('/messages/{message}', [AdminMessageController::class, 'show'])->name('messages.show');
        Route::delete('/messages/{message}', [AdminMessageController::class, 'destroy'])->name('messages.destroy');

        // GitHub Integration
        Route::get('/github', [AdminGitHubController::class, 'index'])->name('github.index');
        Route::post('/github/settings', [AdminGitHubController::class, 'updateSettings'])->name('github.settings');
        Route::post('/github/sync', [AdminGitHubController::class, 'triggerSync'])->name('github.sync');
        Route::post('/github/toggle-exclude', [AdminGitHubController::class, 'toggleExclude'])->name('github.toggle-exclude');

        // Website Settings
        Route::get('/settings', [AdminSiteSettingController::class, 'index'])->name('settings.index');
        Route::put('/settings', [AdminSiteSettingController::class, 'update'])->name('settings.update');
    });
});

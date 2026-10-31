<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Project;

class AdminSecurityTest extends TestCase
{
    public function test_guest_cannot_access_admin_dashboard(): void
    {
        $response = $this->get('/admin');
        $response->assertRedirect('/admin/login');
    }

    public function test_guest_cannot_access_project_management(): void
    {
        $response = $this->get('/admin/projects');
        $response->assertRedirect('/admin/login');
    }

    public function test_admin_can_login_with_valid_credentials(): void
    {
        $response = $this->post('/admin/login', [
            'email' => 'admin@portfolio.local',
            'password' => 'AdminPortfolio123!',
        ]);

        $response->assertRedirect('/admin');
        $this->assertAuthenticated();
    }

    public function test_admin_login_fails_with_invalid_credentials(): void
    {
        $response = $this->post('/admin/login', [
            'email' => 'admin@portfolio.local',
            'password' => 'WrongPassword123!',
        ]);

        $response->assertSessionHasErrors('email');
        $this->assertGuest();
    }

    public function test_authenticated_admin_can_access_dashboard_and_logout(): void
    {
        $admin = User::where('email', 'admin@portfolio.local')->first();

        $response = $this->actingAs($admin)->get('/admin');
        $response->assertStatus(200);
        $response->assertSee('Ringkasan Aktivitas Portfolio');

        $logoutRes = $this->actingAs($admin)->post('/admin/logout');
        $logoutRes->assertRedirect('/admin/login');
        $this->assertGuest();
    }
}


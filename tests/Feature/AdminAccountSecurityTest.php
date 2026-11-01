<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AdminAccountSecurityTest extends TestCase
{
    use DatabaseTransactions;

    protected function createAdmin(array $attributes = []): User
    {
        return User::create(array_merge([
            'name' => 'Administrator Test',
            'email' => 'admin_' . uniqid() . '@portfolio.test',
            'password' => Hash::make('AdminPortfolio123!'),
        ], $attributes));
    }

    public function test_guest_cannot_access_account_settings_page()
    {
        $response = $this->get(route('admin.account.edit'));
        $response->assertRedirect(route('admin.login'));
    }

    public function test_admin_can_view_account_settings_page()
    {
        $admin = $this->createAdmin();

        $response = $this->actingAs($admin)->get(route('admin.account.edit'));
        $response->assertStatus(200);
        $response->assertSee('Pengaturan Akun & Keamanan');
        $response->assertSee($admin->email);
    }

    public function test_admin_can_update_name_and_email()
    {
        $admin = $this->createAdmin();
        $newEmail = 'updated_' . uniqid() . '@portfolio.test';

        $response = $this->actingAs($admin)->put(route('admin.account.profile.update'), [
            'name' => 'Super Developer Admin',
            'email' => $newEmail,
        ]);

        $response->assertRedirect(route('admin.account.edit'));
        $response->assertSessionHas('success');

        $admin->refresh();
        $this->assertEquals('Super Developer Admin', $admin->name);
        $this->assertEquals($newEmail, $admin->email);
    }

    public function test_admin_cannot_update_email_to_already_taken_email()
    {
        $admin1 = $this->createAdmin();
        $admin2 = $this->createAdmin(['email' => 'taken@portfolio.test']);

        $response = $this->actingAs($admin1)->put(route('admin.account.profile.update'), [
            'name' => 'Admin One',
            'email' => 'taken@portfolio.test',
        ]);

        $response->assertSessionHasErrors('email');
    }

    public function test_admin_can_update_password_with_valid_current_password()
    {
        $admin = $this->createAdmin();

        $response = $this->actingAs($admin)->put(route('admin.account.password.update'), [
            'current_password' => 'AdminPortfolio123!',
            'password' => 'NewStrongPass123!',
            'password_confirmation' => 'NewStrongPass123!',
        ]);

        $response->assertRedirect(route('admin.account.edit'));
        $response->assertSessionHas('success');

        $admin->refresh();
        $this->assertTrue(Hash::check('NewStrongPass123!', $admin->password));
    }

    public function test_admin_cannot_update_password_with_invalid_current_password()
    {
        $admin = $this->createAdmin();

        $response = $this->actingAs($admin)->put(route('admin.account.password.update'), [
            'current_password' => 'WrongCurrentPassword!',
            'password' => 'NewStrongPass123!',
            'password_confirmation' => 'NewStrongPass123!',
        ]);

        $response->assertSessionHasErrors('current_password');
    }

    public function test_admin_cannot_update_password_with_unconfirmed_password()
    {
        $admin = $this->createAdmin();

        $response = $this->actingAs($admin)->put(route('admin.account.password.update'), [
            'current_password' => 'AdminPortfolio123!',
            'password' => 'NewStrongPass123!',
            'password_confirmation' => 'DifferentPass123!',
        ]);

        $response->assertSessionHasErrors('password');
    }
}

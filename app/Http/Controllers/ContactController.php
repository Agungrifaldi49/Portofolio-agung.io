<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use App\Models\ProfileSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    public function index()
    {
        $profile = ProfileSetting::current();
        return view('pages.contact', compact('profile'));
    }

    public function submit(Request $request)
    {
        // 1. Honeypot check for bots
        if (!empty($request->input('website_url_hp'))) {
            return back()->with('error', 'Spam detected.');
        }

        // 2. Strict validation
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email', 'max:150'],
            'subject' => ['required', 'string', 'max:200'],
            'message' => ['required', 'string', 'min:10', 'max:3000'],
        ], [
            'name.required' => 'Mohon masukkan nama Anda.',
            'email.required' => 'Alamat email wajib diisi.',
            'email.email' => 'Format email tidak valid.',
            'subject.required' => 'Subjek pesan tidak boleh kosong.',
            'message.required' => 'Isi pesan tidak boleh kosong.',
            'message.min' => 'Pesan terlalu singkat (minimal 10 karakter).',
        ]);

        // 3. Save to database
        $msg = ContactMessage::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'subject' => $validated['subject'],
            'message' => $validated['message'],
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'is_read' => false,
        ]);

        // 4. Attempt email delivery if mailer is configured
        $mailConfigured = config('mail.mailers.smtp.host') && config('mail.mailers.smtp.username');
        if ($mailConfigured) {
            try {
                $recipient = ProfileSetting::current()->contact_email ?: config('mail.from.address');
                Mail::raw("Pesan baru dari {$validated['name']} ({$validated['email']}):\n\nSubjek: {$validated['subject']}\n\n{$validated['message']}", function ($m) use ($recipient, $validated) {
                    $m->to($recipient)->subject('Pesan Baru Portfolio: ' . $validated['subject']);
                });
            } catch (\Exception $e) {
                Log::warning('SMTP notification failed: ' . $e->getMessage());
            }
        }

        return back()->with('success', 'Pesan Anda telah berhasil dikirim dan tersimpan di sistem. Terima kasih telah menghubungi saya!');
    }
}


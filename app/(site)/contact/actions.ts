'use server';

import { Resend } from 'resend';
import { sendTelegramNotification } from '@/lib/telegram';

interface ContactFormState {
  readonly success: boolean;
  readonly error: string | null;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
    return { success: false, error: 'Please fill in all required fields.' };
  }

  const emailStr = String(email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr)) {
    return { success: false, error: 'Please enter a valid email address.' };
  }

  const submission = {
    name: String(name),
    email: emailStr,
    phone: String(formData.get('phone') ?? ''),
    subject: String(formData.get('subject') ?? ''),
    message: String(message),
  };

  // Send Resend email notification
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const subject = submission.subject || 'General Enquiry';

      await resend.emails.send({
        from: 'shueb.io Contact Form <contact@shueb.io>',
        to: 'advocate@shueb.io',
        replyTo: submission.email,
        subject: `New Enquiry: ${subject} — shueb.io`,
        text: [
          'New client enquiry received via shueb.io',
          '',
          `Name: ${submission.name}`,
          `Email: ${submission.email}`,
          `Phone: ${submission.phone || 'Not provided'}`,
          `Subject: ${subject}`,
          '',
          'Matter:',
          submission.message,
        ].join('\n'),
      });
    } catch {
      return {
        success: false,
        error:
          'Something went wrong. Please try again or email directly at advocate@shueb.io',
      };
    }
  }

  // Send Telegram notification (non-blocking — don't fail the form if Telegram is down)
  sendTelegramNotification(submission).catch(() => {});

  return { success: true, error: null };
}

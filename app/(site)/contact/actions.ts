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

  // Send Telegram notification (primary — must succeed)
  try {
    const telegramSent = await sendTelegramNotification(submission);
    if (!telegramSent) {
      console.error('Telegram notification failed or not configured');
    }
  } catch (err) {
    console.error('Telegram exception:', err);
  }

  // Send Resend email notification (secondary — best effort)
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const resend = new Resend(resendKey);
      const subject = submission.subject || 'General Enquiry';

      const { error: sendError } = await resend.emails.send({
        from: 'shueb.io Contact Form <noreply@shueb.io>',
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

      if (sendError) {
        console.error('Resend error:', sendError);
      }
    } catch (err) {
      console.error('Resend exception:', err);
    }
  }

  return { success: true, error: null };
}

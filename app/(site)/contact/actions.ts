'use server';

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

  // Send notification (non-blocking — don't fail the form if notification service is down)
  sendTelegramNotification(submission).catch(() => {});

  return { success: true, error: null };
}

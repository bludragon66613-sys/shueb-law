'use server';

import { redirect } from 'next/navigation';
import { validateCredentials, createSession } from '@/lib/auth';

interface LoginState {
  readonly error: string | null;
}

export async function loginAction(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get('email') ?? '').trim();
  const password = String(formData.get('password') ?? '');

  if (!email || !password) {
    return { error: 'Please enter your email and password.' };
  }

  const client = validateCredentials(email, password);
  if (!client) {
    return { error: 'Invalid email or password.' };
  }

  await createSession(client.email, client.name);
  redirect('/portal');
}

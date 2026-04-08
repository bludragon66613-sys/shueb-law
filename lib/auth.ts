import { cookies } from 'next/headers';

const SESSION_COOKIE = 'sh_session';
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

/**
 * Simple session-based auth for the client portal.
 * Credentials are stored in env vars for now.
 * In production, this should be backed by a database.
 */

interface ClientCredential {
  readonly email: string;
  readonly name: string;
  readonly passwordHash: string;
}

function getClientCredentials(): readonly ClientCredential[] {
  // Format: email:name:password_hash, separated by semicolons
  // For MVP, we use plain text comparison (upgrade to bcrypt with DB)
  const raw = process.env.CLIENT_CREDENTIALS ?? '';
  if (!raw) return [];

  return raw.split(';').map((entry) => {
    const [email, name, passwordHash] = entry.split(':');
    return { email: email ?? '', name: name ?? '', passwordHash: passwordHash ?? '' };
  });
}

export function validateCredentials(email: string, password: string): ClientCredential | null {
  const clients = getClientCredentials();
  const client = clients.find(
    (c) => c.email.toLowerCase() === email.toLowerCase() && c.passwordHash === password,
  );
  return client ?? null;
}

export async function createSession(email: string, name: string): Promise<void> {
  const cookieStore = await cookies();
  // Simple base64 token — upgrade to JWT with a proper secret in production
  const token = Buffer.from(JSON.stringify({ email, name, exp: Date.now() + SESSION_MAX_AGE * 1000 })).toString('base64');
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_MAX_AGE,
    path: '/',
  });
}

export async function getSession(): Promise<{ email: string; name: string } | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  try {
    const payload = JSON.parse(Buffer.from(token, 'base64').toString());
    if (payload.exp < Date.now()) return null;
    return { email: payload.email, name: payload.name };
  } catch {
    return null;
  }
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

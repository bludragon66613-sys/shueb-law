import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { SITE } from '@/lib/constants';
import { getSession } from '@/lib/auth';
import { Section } from '@/components/ui/section';
import { LoginForm } from './login-form';

export const metadata: Metadata = {
  title: `Client Portal | ${SITE.name}`,
  description: 'Secure login for existing clients to access case tracking, documents, and billing.',
};

export default async function LoginPage() {
  const session = await getSession();
  if (session) redirect('/portal');

  return (
    <Section className="pt-32 min-h-[80vh] flex items-start justify-center">
      <div className="w-full max-w-md">
        <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">Client Portal</p>
        <h1 className="font-serif text-3xl text-text-primary mb-2">Sign In</h1>
        <p className="text-sm text-text-secondary mb-8">
          Access your case dashboard, documents, and hearing schedule.
        </p>
        <LoginForm />
        <p className="text-xs text-text-muted/60 mt-6 text-center">
          Credentials are provided by Shueb Hussain&apos;s office. Contact us if you need access.
        </p>
      </div>
    </Section>
  );
}

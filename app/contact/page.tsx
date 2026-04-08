import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { ContactForm } from './contact-form';

export const metadata: Metadata = {
  title: `Contact | ${SITE.name}`,
  description: 'Schedule a consultation or send a message. Responses within 24 hours.',
};

export default function ContactPage() {
  return (
    <Section className="pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
        <div className="lg:col-span-2">
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">Contact</p>
          <h1 className="font-serif text-4xl text-text-primary mb-6">
            Get in Touch
          </h1>
          <p className="text-text-secondary leading-relaxed mb-12">
            Whether you need legal counsel for an active matter or want to explore your options, reach out for a confidential consultation.
          </p>

          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-widest uppercase text-text-muted mb-2">Email</p>
              <a
                href={`mailto:${SITE.email}`}
                className="text-text-primary hover:text-accent transition-colors"
              >
                {SITE.email}
              </a>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-text-muted mb-2">Office</p>
              <p className="text-text-secondary text-sm">{SITE.address.line1}</p>
              <p className="text-text-secondary text-sm">{SITE.address.line2}</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-text-muted mb-2">Telegram</p>
              <a
                href={SITE.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-accent transition-colors"
              >
                @shuebhussain
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

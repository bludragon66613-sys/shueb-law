import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';
import { ContactForm } from './contact-form';

export const metadata: Metadata = {
  title: `Contact | ${SITE.name}`,
  description: `Schedule a consultation or send a message to ${SITE.name}, Advocate at Hyderabad High Court. Responses within 24 hours.`,
};

export default function ContactPage() {
  return (
    <>
    <Section className="pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
        <AnimateOnScroll className="lg:col-span-2">
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
              <p className="text-xs tracking-widest uppercase text-text-muted mb-2">Phone</p>
              <a
                href={`tel:${SITE.phone}`}
                className="text-text-primary hover:text-accent transition-colors"
              >
                +91 90633 63633
              </a>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-text-muted mb-2">WhatsApp</p>
              <a
                href={SITE.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-accent transition-colors"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200} className="lg:col-span-3">
          <ContactForm />
        </AnimateOnScroll>
      </div>
    </Section>

    {/* Cal.com booking section */}
    <Section className="bg-bg-secondary">
      <AnimateOnScroll>
        <div className="text-center mb-8">
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            Schedule Directly
          </p>
          <h2 className="font-serif text-3xl text-text-primary mb-4">
            Book a Consultation
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            Choose a convenient time for a 30-minute initial consultation. Available slots are shown in Indian Standard Time.
          </p>
        </div>
        <div className="rounded-sm border border-border bg-bg-card p-8 text-center">
          <p className="text-text-muted text-sm mb-4">
            Online booking will be available once the Cal.com calendar is configured.
          </p>
          <p className="text-xs text-text-muted/60">
            Set <code className="text-accent/80">NEXT_PUBLIC_CALCOM_LINK</code> in environment variables to enable.
            Example: <code className="text-accent/80">shuebhussain/consultation</code>
          </p>
          {process.env.NEXT_PUBLIC_CALCOM_LINK && (
            <iframe
              src={`https://cal.com/${process.env.NEXT_PUBLIC_CALCOM_LINK}?embed=true&theme=dark`}
              className="w-full h-[600px] mt-6 rounded-sm border-0"
              title="Book a consultation"
            />
          )}
        </div>
      </AnimateOnScroll>
    </Section>
  </>
  );
}

import Link from 'next/link';
import { SITE } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary">
      {/* Gold gradient rule */}
      <div
        aria-hidden="true"
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%)',
        }}
      />

      <div className="mx-auto max-w-[72rem] px-6 md:px-12 py-16">
        {/* Subtle large serif name — purely decorative */}
        <p
          aria-hidden="true"
          className="font-serif text-4xl text-text-muted/20 mb-12 select-none pointer-events-none"
        >
          {SITE.name}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="font-serif text-xl text-text-primary mb-2">{SITE.name}</p>
            <p className="text-sm text-text-muted">{SITE.title}</p>
            <p className="mt-4 text-sm text-text-secondary leading-relaxed">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-text-muted mb-4">Navigation</p>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-text-secondary hover:text-accent transition-colors">About</Link>
              <Link href="/practice-areas" className="text-sm text-text-secondary hover:text-accent transition-colors">Practice Areas</Link>
              <Link href="/tools" className="text-sm text-text-secondary hover:text-accent transition-colors">Legal Tools</Link>
              <Link href="/knowledge" className="text-sm text-text-secondary hover:text-accent transition-colors">Knowledge Hub</Link>
              <Link href="/consult" className="text-sm text-text-secondary hover:text-accent transition-colors">AI Assistant</Link>
              <Link href="/contact" className="text-sm text-text-secondary hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-text-muted mb-4">Contact</p>
            <div className="flex flex-col gap-3 text-sm text-text-secondary">
              <a href={`mailto:${SITE.email}`} className="hover:text-accent transition-colors">{SITE.email}</a>
              <a href={`tel:${SITE.phone}`} className="hover:text-accent transition-colors">+91 90633 63633</a>
              <div className="flex gap-4">
                <a href={SITE.social.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp</a>
                <span className="text-border">|</span>
                <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
              </div>
              <p className="text-xs leading-relaxed text-text-muted">{SITE.address.line1}</p>
              <p className="text-xs leading-relaxed text-text-muted">{SITE.address.line2}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          {SITE.barCouncil.registration && (
            <p className="text-xs text-text-muted leading-relaxed mb-4">
              {SITE.barCouncil.registration}
            </p>
          )}
          <p className="text-xs text-text-muted/60 leading-relaxed">
            &copy; {currentYear} {SITE.name}. All rights reserved. This website has been designed only for the purpose of dissemination of basic information; information which is otherwise available on the internet, various public platforms and social media.
          </p>
        </div>
      </div>
    </footer>
  );
}

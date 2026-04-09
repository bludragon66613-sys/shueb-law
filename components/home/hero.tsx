'use client';

import { SITE } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 text-center overflow-hidden">

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary to-bg-secondary" />

      {/* Animated gradient mesh — orb 1 */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          left: '15%',
          width: '45vw',
          height: '45vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
          animation: 'mesh-drift 18s ease-in-out infinite',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />

      {/* Animated gradient mesh — orb 2 */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '15%',
          right: '10%',
          width: '35vw',
          height: '35vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
          animation: 'mesh-drift-slow 24s ease-in-out infinite',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl">
        {/* Label */}
        <p className="hero-entrance mb-6 text-xs tracking-[0.3em] uppercase text-text-muted">
          {SITE.title}
        </p>

        {/* Gold reveal line */}
        <div className="hero-entrance hero-entrance-delay-1 mx-auto mb-8 h-px bg-accent opacity-60" style={{
          width: '4rem',
          animation: 'gold-line-reveal 1.2s ease-out 0.15s forwards',
        }} />

        {/* Name — large hero treatment */}
        <h1
          className="hero-entrance hero-entrance-delay-1 font-serif text-5xl sm:text-6xl md:text-8xl leading-[1.05] tracking-tight text-text-primary mb-6"
          style={{
            textShadow: '0 0 80px rgba(201,168,76,0.18), 0 0 160px rgba(201,168,76,0.08)',
          }}
        >
          {SITE.name}
        </h1>

        {/* Tagline with letter-spacing animation */}
        <p
          className="hero-entrance hero-entrance-delay-2 text-sm text-accent mb-6"
          style={{
            animation: 'tagline-reveal 1.4s ease-out 0.3s both',
          }}
        >
          {SITE.tagline}
        </p>

        <p className="hero-entrance hero-entrance-delay-3 text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-4">
          Five degrees across law, business, and technology. Six practice areas. One advocate who sees what most legal teams need three specialists to find.
        </p>

        <div className="hero-entrance hero-entrance-delay-4 mt-14 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6 text-center">
            Know Your Rights
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-left">
            <div className="flex items-start gap-2">
              <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <p className="text-sm text-text-secondary"><span className="text-text-primary">Right to Equality</span> — Equal protection before law; no discrimination on grounds of religion, race, caste, sex, or place of birth (Articles 14-18)</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <p className="text-sm text-text-secondary"><span className="text-text-primary">Right to Freedom</span> — Speech, assembly, movement, residence, and profession; protection of life and personal liberty (Articles 19-22)</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <p className="text-sm text-text-secondary"><span className="text-text-primary">Right Against Exploitation</span> — Prohibition of forced labour, child labour, and human trafficking (Articles 23-24)</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <p className="text-sm text-text-secondary"><span className="text-text-primary">Right to Freedom of Religion</span> — Freedom of conscience, practice, and propagation of religion (Articles 25-28)</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <p className="text-sm text-text-secondary"><span className="text-text-primary">Cultural &amp; Educational Rights</span> — Protection of language, script, and culture; minorities may establish educational institutions (Articles 29-30)</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <p className="text-sm text-text-secondary"><span className="text-text-primary">Right to Constitutional Remedies</span> — Right to approach the Supreme Court or High Courts for enforcement of fundamental rights (Article 32)</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <p className="text-sm text-text-secondary"><span className="text-text-primary">Right to Property</span> — No person shall be deprived of property save by authority of law (Article 300A)</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <p className="text-sm text-text-secondary"><span className="text-text-primary">Right to Life &amp; Liberty</span> — No person shall be deprived of life or personal liberty except by procedure established by law (Article 21)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2" aria-hidden="true">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
      </div>
    </section>
  );
}

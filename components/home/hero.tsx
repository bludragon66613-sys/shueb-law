'use client';

import { SITE } from '@/lib/constants';
import { Button } from '@/components/ui/button';

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
          A modern legal practice powered by AI — delivering the research depth of a top-tier firm with the personal attention of a trusted counsel.
        </p>

        <div className="hero-entrance hero-entrance-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button href="/contact" size="lg">
            Book a Consultation
          </Button>
          <Button href="/practice-areas" variant="secondary" size="lg">
            Practice Areas
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2" aria-hidden="true">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
      </div>
    </section>
  );
}

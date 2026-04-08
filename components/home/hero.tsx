import { SITE } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary to-bg-secondary" />

      <div className="relative z-10 max-w-3xl">
        <p className="mb-6 text-xs tracking-[0.3em] uppercase text-text-muted">
          {SITE.title}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight text-text-primary mb-6">
          {SITE.name}
        </h1>
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-4">
          {SITE.tagline}
        </p>
        <p className="text-sm text-text-muted max-w-xl mx-auto mb-12 leading-relaxed">
          A modern legal practice powered by AI — delivering the research depth of a top-tier firm with the personal attention of a trusted counsel.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg">
            Book a Consultation
          </Button>
          <Button href="/practice-areas" variant="secondary" size="lg">
            Practice Areas
          </Button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>
    </section>
  );
}

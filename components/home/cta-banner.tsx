import Link from 'next/link';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

export function CtaBanner() {
  return (
    <section className="relative bg-bg-secondary">
      {/* Gold gradient rule at top */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%)',
        }}
      />

      <div className="mx-auto max-w-[72rem] px-6 md:px-12 py-24 text-center">
        <AnimateOnScroll>
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary max-w-2xl mx-auto leading-snug mb-6">
            Every case deserves counsel that never stops researching.
          </h2>
          <p className="text-text-secondary text-base md:text-lg max-w-lg mx-auto mb-10">
            Schedule a confidential consultation to discuss your matter.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-sm border border-accent/50 px-8 py-3 text-sm text-accent
                       hover:bg-accent hover:text-bg-primary
                       hover:shadow-[0_0_24px_rgba(201,168,76,0.25)]
                       transition-all duration-300"
          >
            Book a Consultation
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

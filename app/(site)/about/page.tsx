import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

export const metadata: Metadata = {
  title: `About | ${SITE.name}`,
  description: `Learn about ${SITE.name} — credentials, practice philosophy, and approach to AI-powered legal counsel.`,
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-32">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">About</p>
          <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-3">
            {SITE.name}
          </h1>
          <p className="text-sm text-accent mb-8">
            {SITE.qualificationsLong}
          </p>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            {SITE.title} — combining deep legal expertise with cutting-edge AI technology to deliver exceptional results for every client.
          </p>
        </AnimateOnScroll>
      </Section>

      <Section className="bg-bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <AnimateOnScroll className="md:col-span-2 space-y-6">
            <h2 className="font-serif text-2xl text-text-primary">Background</h2>
            <p className="text-text-secondary leading-relaxed">
              Shueb Hussain is a practicing Advocate enrolled with the Bar Council of India. With a practice spanning criminal law, civil litigation, corporate advisory, constitutional law, family matters, and technology law, he brings a multidisciplinary perspective to every engagement.
            </p>
            <p className="text-text-secondary leading-relaxed">
              His practice stands at the forefront of legal technology adoption in India — leveraging AI-powered research tools, automated document analysis, and intelligent case management systems to deliver results that match the depth and speed of large institutional firms.
            </p>
            <h2 className="font-serif text-2xl text-text-primary pt-4">Philosophy</h2>
            <p className="text-text-secondary leading-relaxed">
              The law is fundamentally about access to justice. Technology should lower barriers, not raise them. Every AI tool in this practice exists to serve one purpose: ensuring that no argument goes unresearched, no deadline is missed, and no client feels like a number.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200} className="space-y-8">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-3">Credentials</p>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="border-l-2 border-accent/30 pl-4">Ph.D.</li>
                <li className="border-l-2 border-accent/30 pl-4">LL.M. (Constitutional Law)</li>
                <li className="border-l-2 border-accent/30 pl-4">Dual MBA (Management &amp; Systems)</li>
                <li className="border-l-2 border-accent/30 pl-4">LL.B.</li>
                <li className="border-l-2 border-accent/30 pl-4">B.Com. (Computers)</li>
                <li className="border-l-2 border-accent/30 pl-4">Bar Council of India — Enrolled Advocate</li>
                <li className="border-l-2 border-accent/30 pl-4">Practice across Supreme Court, High Courts, and Tribunals</li>
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-3">Practice Areas</p>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="border-l-2 border-border pl-4">Criminal Law</li>
                <li className="border-l-2 border-border pl-4">Civil Litigation</li>
                <li className="border-l-2 border-border pl-4">Corporate &amp; Commercial</li>
                <li className="border-l-2 border-border pl-4">Constitutional Law</li>
                <li className="border-l-2 border-border pl-4">Family &amp; Matrimonial</li>
                <li className="border-l-2 border-border pl-4">Technology &amp; AI Law</li>
              </ul>
            </div>
          </AnimateOnScroll>

        </div>
      </Section>

      <Section>
        <AnimateOnScroll className="text-center">
          <h2 className="font-serif text-3xl text-text-primary mb-4">
            Ready to discuss your matter?
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Schedule a consultation to understand how AI-powered legal counsel can make a difference in your case.
          </p>
          <Button href="/contact" size="lg">
            Book a Consultation
          </Button>
        </AnimateOnScroll>
      </Section>
    </>
  );
}

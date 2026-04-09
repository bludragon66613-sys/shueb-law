import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SITE, PRACTICE_AREAS } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

export function generateStaticParams() {
  return PRACTICE_AREAS.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `${area.title} | ${SITE.name}`,
    description: area.shortDescription,
  };
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);
  if (!area) notFound();

  return (
    <>
      {/* Hero */}
      <Section className="pt-32">
        <AnimateOnScroll>
          <Button href="/practice-areas" variant="ghost" className="mb-8">
            &larr; All Practice Areas
          </Button>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            Practice Area
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-8">
            {area.title}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">
            {area.description}
          </p>
        </AnimateOnScroll>
      </Section>

      {/* Our Approach */}
      <Section className="bg-bg-secondary">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            Our Approach
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-6">
            How We Think About {area.title}
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-3xl">
            {area.approach}
          </p>
        </AnimateOnScroll>
      </Section>

      {/* How We Work — Process Steps */}
      <Section>
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            How We Work
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-12">
            From First Call to Resolution
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {area.process.map((step, index) => (
            <AnimateOnScroll key={step.step} delay={index * 100}>
              <div className="relative rounded-sm border border-border bg-bg-card p-8 h-full card-border-reveal">
                <span className="font-serif text-4xl text-accent/20 absolute top-6 right-8">
                  {step.step}
                </span>
                <h3 className="font-serif text-xl text-text-primary mb-3 pr-12">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-bg-secondary">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            What We Handle
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-8">
            Services
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {area.services.map((service, index) => (
            <AnimateOnScroll key={service} delay={index * 60}>
              <div className="flex items-start gap-3 rounded-sm border border-border bg-bg-card p-5">
                <span className="service-dot mt-1 block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <p className="text-sm text-text-secondary">{service}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            Why Choose Us
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-8">
            What Sets Us Apart
          </h2>
        </AnimateOnScroll>

        <div className="space-y-4">
          {area.strengths.map((strength, index) => (
            <AnimateOnScroll key={strength} delay={index * 80}>
              <div className="flex items-start gap-4 rounded-sm border border-border bg-bg-card p-6">
                <span className="mt-0.5 block h-5 w-5 shrink-0 rounded-full border border-accent/40 flex items-center justify-center">
                  <span className="block h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <p className="text-text-secondary leading-relaxed">
                  {strength}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-bg-secondary">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="font-serif text-3xl text-text-primary mb-4">
              Need help with {area.title.toLowerCase()}?
            </h2>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto">
              Discuss your matter with an advocate who combines deep expertise with AI-powered research capability.
            </p>
            <Button href="/contact" size="lg">
              Book a Consultation
            </Button>
          </div>
        </AnimateOnScroll>
      </Section>
    </>
  );
}

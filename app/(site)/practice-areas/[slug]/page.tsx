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

      <Section className="bg-bg-secondary">
        <AnimateOnScroll>
          <h2 className="font-serif text-2xl text-text-primary mb-8">Services</h2>
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
        </AnimateOnScroll>
      </Section>

      <Section>
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

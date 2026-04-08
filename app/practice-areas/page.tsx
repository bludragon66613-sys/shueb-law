import type { Metadata } from 'next';
import { SITE, PRACTICE_AREAS } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: `Practice Areas | ${SITE.name}`,
  description: 'Comprehensive legal services across criminal, civil, corporate, constitutional, family, and technology law.',
};

export default function PracticeAreasPage() {
  return (
    <Section className="pt-32">
      <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
        Areas of Practice
      </p>
      <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">
        Practice Areas
      </h1>
      <p className="text-lg text-text-secondary max-w-2xl mb-16">
        Strategic legal counsel across six core practice areas — each enhanced by AI-powered research and case intelligence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PRACTICE_AREAS.map((area) => (
          <Card
            key={area.slug}
            title={area.title}
            description={area.shortDescription}
            href={`/practice-areas/${area.slug}`}
          />
        ))}
      </div>
    </Section>
  );
}

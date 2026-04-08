import type { Metadata } from 'next';
import { SITE, PRACTICE_AREAS, type PracticeArea } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';
import { PRACTICE_ICONS, type PracticeIconKey } from '@/components/ui/icons';

export const metadata: Metadata = {
  title: `Practice Areas | ${SITE.name}`,
  description: 'Comprehensive legal services across criminal, civil, corporate, constitutional, family, and technology law.',
};

const STAGGER_DELAYS = [0, 100, 200, 300, 400, 500] as const;

function getPracticeIcon(iconKey: string): React.ReactNode {
  const Icon = PRACTICE_ICONS[iconKey as PracticeIconKey];
  if (!Icon) return null;
  return <Icon size={24} />;
}

export default function PracticeAreasPage() {
  return (
    <Section className="pt-32">
      <AnimateOnScroll>
        <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
          Areas of Practice
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">
          Practice Areas
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mb-16">
          Strategic legal counsel across six core practice areas — each enhanced by AI-powered research and case intelligence.
        </p>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PRACTICE_AREAS.map((area: PracticeArea, index) => (
          <AnimateOnScroll key={area.slug} delay={STAGGER_DELAYS[index] ?? 0} className="h-full">
            <Card
              title={area.title}
              description={area.shortDescription}
              href={`/practice-areas/${area.slug}`}
              icon={getPracticeIcon(area.icon)}
            />
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  );
}

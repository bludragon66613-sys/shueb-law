import { PRACTICE_AREAS, type PracticeArea } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';
import { PRACTICE_ICONS, type PracticeIconKey } from '@/components/ui/icons';

const STAGGER_DELAYS = [0, 100, 200, 300, 400, 500] as const;

function getPracticeIcon(iconKey: string): React.ReactNode {
  const Icon = PRACTICE_ICONS[iconKey as PracticeIconKey];
  if (!Icon) return null;
  return <Icon size={24} />;
}

export function PracticePreview() {
  return (
    <Section className="bg-bg-secondary">
      <AnimateOnScroll>
        <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
          Areas of Practice
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-12">
          Comprehensive Legal Counsel
        </h2>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRACTICE_AREAS.map((area: PracticeArea, index) => (
          <AnimateOnScroll key={area.slug} delay={STAGGER_DELAYS[index] ?? 0}>
            <Card
              title={area.title}
              description={area.shortDescription}
              href={`/practice-areas/${area.slug}`}
              icon={getPracticeIcon(area.icon)}
            />
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll delay={300} className="mt-12 text-center">
        <Button href="/practice-areas" variant="ghost">
          View All Practice Areas &rarr;
        </Button>
      </AnimateOnScroll>
    </Section>
  );
}

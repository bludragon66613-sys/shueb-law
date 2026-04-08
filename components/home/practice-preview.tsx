import { PRACTICE_AREAS } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function PracticePreview() {
  return (
    <Section className="bg-bg-secondary">
      <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
        Areas of Practice
      </p>
      <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-12">
        Comprehensive Legal Counsel
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRACTICE_AREAS.map((area) => (
          <Card
            key={area.slug}
            title={area.title}
            description={area.shortDescription}
            href={`/practice-areas/${area.slug}`}
          />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button href="/practice-areas" variant="ghost">
          View All Practice Areas &rarr;
        </Button>
      </div>
    </Section>
  );
}

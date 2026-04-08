import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

export const metadata: Metadata = {
  title: `Legal Tools | ${SITE.name}`,
  description: 'Free AI-powered legal tools — IPC to BNS converter, AI consultation assistant, and more.',
};

export default function ToolsPage() {
  return (
    <Section className="pt-32">
      <AnimateOnScroll>
        <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
          Legal Tools
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">
          AI-Powered Tools
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mb-16">
          Free tools to assist with legal research and case preparation.
        </p>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimateOnScroll>
          <Card
            title="IPC to BNS Converter"
            description="Search and convert Indian Penal Code sections to their corresponding Bharatiya Nyaya Sanhita sections. Covers 50+ commonly referenced sections with change notes."
            href="/tools/bns-converter"
          />
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <Card
            title="AI Consultation Assistant"
            description="Describe your legal matter and our AI assistant will help clarify the nature of your issue, the relevant area of law, and what to expect in a formal consultation."
            href="/consult"
          />
        </AnimateOnScroll>
      </div>
    </Section>
  );
}

import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

export const metadata: Metadata = {
  title: `Legal Tools | ${SITE.name}`,
  description: 'Free legal code converters — IPC to BNS, CrPC to BNSS, IEA to BSA — plus an AI consultation assistant for Indian lawyers.',
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
          Free tools to assist with legal research and case preparation — updated for the 2024 criminal law reforms.
        </p>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimateOnScroll className="h-full">
          <Card
            title="IPC to BNS Converter"
            description="Convert Indian Penal Code (1860) sections to Bharatiya Nyaya Sanhita (2023) sections. 50+ commonly referenced sections with change notes."
            href="/tools/bns-converter"
          />
        </AnimateOnScroll>
        <AnimateOnScroll delay={100} className="h-full">
          <Card
            title="CrPC to BNSS Converter"
            description="Convert Code of Criminal Procedure (1973) sections to Bharatiya Nagarik Suraksha Sanhita (2023) sections. Bail, FIR, arrest, trial procedures and more."
            href="/tools/bnss-converter"
          />
        </AnimateOnScroll>
        <AnimateOnScroll delay={200} className="h-full">
          <Card
            title="IEA to BSA Converter"
            description="Convert Indian Evidence Act (1872) sections to Bharatiya Sakshya Adhiniyam (2023) sections. Electronic evidence, confessions, witnesses and more."
            href="/tools/bsa-converter"
          />
        </AnimateOnScroll>
        <AnimateOnScroll delay={300} className="h-full">
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

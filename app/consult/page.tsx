import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { ChatInterface } from './chat-interface';

export const metadata: Metadata = {
  title: `AI Consultation Assistant | ${SITE.name}`,
  description: 'Get preliminary guidance on your legal matter from our AI assistant before scheduling a consultation.',
};

export default function ConsultPage() {
  return (
    <>
      <Section className="pt-32 pb-8">
        <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
          AI Assistant
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">
          Consultation Assistant
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mb-2">
          Describe your legal matter and our AI assistant will help clarify the nature of your issue, the relevant area of law, and what to expect in a formal consultation.
        </p>
        <p className="text-xs text-text-muted max-w-2xl">
          This assistant provides general information only and does not constitute legal advice. For specific legal guidance, please schedule a consultation.
        </p>
      </Section>

      <div className="px-6 md:px-12 pb-24">
        <div className="mx-auto max-w-[72rem]">
          <ChatInterface />
        </div>
      </div>
    </>
  );
}

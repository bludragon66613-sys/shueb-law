import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { BnsConverter } from './bns-converter';

export const metadata: Metadata = {
  title: `IPC to BNS Converter | ${SITE.name}`,
  description: 'Convert Indian Penal Code (IPC) sections to Bharatiya Nyaya Sanhita (BNS) sections. Free reference tool for advocates and legal professionals.',
};

export default function BnsConverterPage() {
  return (
    <>
      <Section className="pt-32">
        <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
          Legal Tools
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">
          IPC to BNS Converter
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mb-4">
          Search and convert Indian Penal Code (1860) sections to their corresponding Bharatiya Nyaya Sanhita (2023) sections.
        </p>
        <p className="text-sm text-text-muted max-w-2xl mb-12">
          The BNS replaced the IPC effective July 1, 2024. Cases filed before this date continue under IPC; new cases use BNS sections.
        </p>
        <BnsConverter />
      </Section>

      <Section className="bg-bg-secondary">
        <h2 className="font-serif text-2xl text-text-primary mb-6">About This Tool</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-text-secondary leading-relaxed">
          <div>
            <h3 className="text-text-primary font-medium mb-2">What Changed</h3>
            <p>
              The Bharatiya Nyaya Sanhita 2023 replaced the colonial-era Indian Penal Code 1860, consolidating 511 sections into 358. Key changes include the replacement of &ldquo;sedition&rdquo; with acts endangering sovereignty, new provisions for organized crime, terrorism, and mob lynching, and enhanced penalties for offences against women.
            </p>
          </div>
          <div>
            <h3 className="text-text-primary font-medium mb-2">How to Use</h3>
            <p>
              Search by IPC section number (e.g., &ldquo;302&rdquo;), BNS section number (e.g., &ldquo;103&rdquo;), or by keyword (e.g., &ldquo;murder&rdquo;, &ldquo;theft&rdquo;, &ldquo;defamation&rdquo;). Results show the mapping between old and new sections along with notes on what changed. This tool covers the most commonly referenced sections.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

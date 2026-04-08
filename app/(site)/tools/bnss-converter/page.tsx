import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { BnssConverter } from './bnss-converter';

export const metadata: Metadata = {
  title: `CrPC to BNSS Converter | ${SITE.name}`,
  description: 'Convert Code of Criminal Procedure (CrPC) sections to Bharatiya Nagarik Suraksha Sanhita (BNSS) sections. Free reference tool for advocates and legal professionals.',
};

export default function BnssConverterPage() {
  return (
    <>
      <Section className="pt-32">
        <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
          Legal Tools
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">
          CrPC to BNSS Converter
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mb-4">
          Search and convert Code of Criminal Procedure (1973) sections to their corresponding Bharatiya Nagarik Suraksha Sanhita (2023) sections.
        </p>
        <p className="text-sm text-text-muted max-w-2xl mb-12">
          The BNSS replaced the CrPC effective July 1, 2024. Cases filed before this date continue under CrPC; new cases use BNSS sections.
        </p>
        <BnssConverter />
      </Section>

      <Section className="bg-bg-secondary">
        <h2 className="font-serif text-2xl text-text-primary mb-6">About This Tool</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-text-secondary leading-relaxed">
          <div>
            <h3 className="text-text-primary font-medium mb-2">What Changed</h3>
            <p>
              The Bharatiya Nagarik Suraksha Sanhita 2023 replaced the colonial-era Code of Criminal Procedure 1973, restructuring 484 sections into 531. Key changes include mandatory use of electronic communication for summons and notices, video-conferencing for trials, mandatory forensic investigation for offences punishable with 7+ years, Zero FIR provisions, and time-bound investigation and trial procedures.
            </p>
          </div>
          <div>
            <h3 className="text-text-primary font-medium mb-2">How to Use</h3>
            <p>
              Search by CrPC section number (e.g., &ldquo;438&rdquo;), BNSS section number (e.g., &ldquo;482&rdquo;), or by keyword (e.g., &ldquo;bail&rdquo;, &ldquo;FIR&rdquo;, &ldquo;arrest&rdquo;). Results show the mapping between old and new sections along with notes on what changed. This tool covers the most commonly referenced sections.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

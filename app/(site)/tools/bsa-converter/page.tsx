import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { BsaConverter } from './bsa-converter';

export const metadata: Metadata = {
  title: `IEA to BSA Converter | ${SITE.name}`,
  description: 'Convert Indian Evidence Act (IEA) sections to Bharatiya Sakshya Adhiniyam (BSA) sections. Free reference tool for advocates and legal professionals.',
};

export default function BsaConverterPage() {
  return (
    <>
      <Section className="pt-32">
        <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
          Legal Tools
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">
          IEA to BSA Converter
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mb-4">
          Search and convert Indian Evidence Act (1872) sections to their corresponding Bharatiya Sakshya Adhiniyam (2023) sections.
        </p>
        <p className="text-sm text-text-muted max-w-2xl mb-12">
          The BSA replaced the IEA effective July 1, 2024. Cases filed before this date continue under IEA; new cases use BSA sections.
        </p>
        <BsaConverter />
      </Section>

      <Section className="bg-bg-secondary">
        <h2 className="font-serif text-2xl text-text-primary mb-6">About This Tool</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-text-secondary leading-relaxed">
          <div>
            <h3 className="text-text-primary font-medium mb-2">What Changed</h3>
            <p>
              The Bharatiya Sakshya Adhiniyam 2023 replaced the colonial-era Indian Evidence Act 1872, restructuring 167 sections into 170. Key changes include formal recognition of electronic and digital evidence on par with physical evidence, expanded provisions for electronic records and their admissibility, updated definitions of documents to include electronic communications, and simplified procedures for proving digital evidence.
            </p>
          </div>
          <div>
            <h3 className="text-text-primary font-medium mb-2">How to Use</h3>
            <p>
              Search by IEA section number (e.g., &ldquo;65B&rdquo;), BSA section number (e.g., &ldquo;63&rdquo;), or by keyword (e.g., &ldquo;confession&rdquo;, &ldquo;witness&rdquo;, &ldquo;electronic&rdquo;). Results show the mapping between old and new sections along with notes on what changed. This tool covers the most commonly referenced sections.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

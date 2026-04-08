'use client';

import { LegalConverter } from '@/components/tools/legal-converter';
import { BNSS_MAPPINGS, searchBnssMappings } from '@/lib/bnss-data';

export function BnssConverter() {
  return (
    <LegalConverter
      mappings={BNSS_MAPPINGS}
      searchFn={searchBnssMappings}
      oldLawName="CrPC"
      oldLawYear="1973"
      newLawName="BNSS"
      newLawYear="2023"
      placeholder="Search by section number (438, 482) or keyword (bail, FIR, arrest, maintenance)..."
    />
  );
}

'use client';

import { LegalConverter } from '@/components/tools/legal-converter';
import { BSA_MAPPINGS, searchBsaMappings } from '@/lib/bsa-data';

export function BsaConverter() {
  return (
    <LegalConverter
      mappings={BSA_MAPPINGS}
      searchFn={searchBsaMappings}
      oldLawName="IEA"
      oldLawYear="1872"
      newLawName="BSA"
      newLawYear="2023"
      placeholder="Search by section number (65B, 63) or keyword (confession, electronic, witness, burden)..."
    />
  );
}

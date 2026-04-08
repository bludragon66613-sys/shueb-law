'use client';

import { useState, useMemo } from 'react';
import { BNS_MAPPINGS, searchBnsMappings } from '@/lib/bns-data';
import type { BnsMapping } from '@/lib/bns-data';

export function BnsConverter() {
  const [query, setQuery] = useState('');

  const results: readonly BnsMapping[] = useMemo(() => {
    if (!query.trim()) return BNS_MAPPINGS;
    return searchBnsMappings(query);
  }, [query]);

  return (
    <div>
      {/* Search */}
      <div className="relative mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by section number (302, 103) or keyword (murder, theft, rape)..."
          className="w-full rounded-sm border border-border bg-bg-card px-5 py-4 text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors text-base"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted text-sm">
          {results.length} result{results.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Results */}
      <div className="space-y-3">
        {results.length === 0 && (
          <div className="rounded-sm border border-border bg-bg-card p-8 text-center">
            <p className="text-text-muted">No sections found matching &ldquo;{query}&rdquo;</p>
          </div>
        )}
        {results.map((mapping) => (
          <BnsMappingCard key={`${mapping.ipcSection}-${mapping.bnsSection}`} mapping={mapping} />
        ))}
      </div>
    </div>
  );
}

function BnsMappingCard({ mapping }: { readonly mapping: BnsMapping }) {
  const isNew = mapping.ipcSection === 'N/A';

  return (
    <div className="rounded-sm border border-border bg-bg-card p-6 hover:border-border-hover transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-start">
        {/* IPC Side */}
        <div className={isNew ? 'opacity-40' : ''}>
          <p className="text-xs tracking-widest uppercase text-text-muted mb-1">IPC (1860)</p>
          <p className="font-serif text-lg text-text-primary">
            {isNew ? 'No Equivalent' : `Section ${mapping.ipcSection}`}
          </p>
          <p className="text-sm text-text-secondary mt-1">{mapping.ipcTitle}</p>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center justify-center pt-6">
          <span className="text-accent text-xl">&rarr;</span>
        </div>
        <div className="md:hidden flex items-center">
          <span className="text-accent text-xl">&darr;</span>
        </div>

        {/* BNS Side */}
        <div>
          <p className="text-xs tracking-widest uppercase text-accent mb-1">
            BNS (2023) {isNew && <span className="ml-2 rounded-sm bg-accent/20 px-2 py-0.5 text-accent">NEW</span>}
          </p>
          <p className="font-serif text-lg text-text-primary">
            Section {mapping.bnsSection}
          </p>
          <p className="text-sm text-text-secondary mt-1">{mapping.bnsTitle}</p>
        </div>
      </div>

      {/* Notes */}
      <div className="mt-4 pt-4 border-t border-border/50">
        <p className="text-xs text-text-muted">{mapping.notes}</p>
      </div>
    </div>
  );
}

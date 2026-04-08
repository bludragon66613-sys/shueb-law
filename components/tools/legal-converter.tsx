'use client';

import { useState, useMemo } from 'react';

export interface LegalMapping {
  readonly oldSection: string;
  readonly oldTitle: string;
  readonly newSection: string;
  readonly newTitle: string;
  readonly notes: string;
}

interface LegalConverterProps {
  readonly mappings: readonly LegalMapping[];
  readonly searchFn: (query: string) => readonly LegalMapping[];
  readonly oldLawName: string;
  readonly oldLawYear: string;
  readonly newLawName: string;
  readonly newLawYear: string;
  readonly placeholder: string;
}

export function LegalConverter({
  mappings,
  searchFn,
  oldLawName,
  oldLawYear,
  newLawName,
  newLawYear,
  placeholder,
}: LegalConverterProps) {
  const [query, setQuery] = useState('');

  const results: readonly LegalMapping[] = useMemo(() => {
    if (!query.trim()) return mappings;
    return searchFn(query);
  }, [query, mappings, searchFn]);

  return (
    <div>
      {/* Search */}
      <div className="relative mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
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
          <MappingCard
            key={`${mapping.oldSection}-${mapping.newSection}`}
            mapping={mapping}
            oldLawName={oldLawName}
            oldLawYear={oldLawYear}
            newLawName={newLawName}
            newLawYear={newLawYear}
          />
        ))}
      </div>
    </div>
  );
}

function MappingCard({
  mapping,
  oldLawName,
  oldLawYear,
  newLawName,
  newLawYear,
}: {
  readonly mapping: LegalMapping;
  readonly oldLawName: string;
  readonly oldLawYear: string;
  readonly newLawName: string;
  readonly newLawYear: string;
}) {
  const isNew = mapping.oldSection === 'N/A';

  return (
    <div className="rounded-sm border border-border bg-bg-card p-6 hover:border-border-hover transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-start">
        {/* Old Law Side */}
        <div className={isNew ? 'opacity-40' : ''}>
          <p className="text-xs tracking-widest uppercase text-text-muted mb-1">
            {oldLawName} ({oldLawYear})
          </p>
          <p className="font-serif text-lg text-text-primary">
            {isNew ? 'No Equivalent' : `Section ${mapping.oldSection}`}
          </p>
          <p className="text-sm text-text-secondary mt-1">{mapping.oldTitle}</p>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center justify-center pt-6">
          <span className="text-accent text-xl">&rarr;</span>
        </div>
        <div className="md:hidden flex items-center">
          <span className="text-accent text-xl">&darr;</span>
        </div>

        {/* New Law Side */}
        <div>
          <p className="text-xs tracking-widest uppercase text-accent mb-1">
            {newLawName} ({newLawYear}){' '}
            {isNew && <span className="ml-2 rounded-sm bg-accent/20 px-2 py-0.5 text-accent">NEW</span>}
          </p>
          <p className="font-serif text-lg text-text-primary">
            Section {mapping.newSection}
          </p>
          <p className="text-sm text-text-secondary mt-1">{mapping.newTitle}</p>
        </div>
      </div>

      {/* Notes */}
      <div className="mt-4 pt-4 border-t border-border/50">
        <p className="text-xs text-text-muted">{mapping.notes}</p>
      </div>
    </div>
  );
}

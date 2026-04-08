'use client';

import { useState, useEffect, useCallback } from 'react';
import { SITE } from '@/lib/constants';

const COOKIE_NAME = 'bci_disclaimer_accepted';

export function BciDisclaimer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = document.cookie
      .split('; ')
      .some((c) => c.startsWith(`${COOKIE_NAME}=true`));
    if (!accepted) setShow(true);
  }, []);

  const accept = useCallback(() => {
    const maxAge = 60 * 60 * 24 * 30; // 30 days
    document.cookie = `${COOKIE_NAME}=true;path=/;max-age=${maxAge};SameSite=Lax`;
    setShow(false);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="max-w-xl w-full bg-bg-card border border-border rounded-sm p-8 md:p-10 max-h-[80vh] overflow-y-auto">
        <h2 className="font-serif text-2xl text-text-primary mb-2">Disclaimer</h2>
        <p className="text-xs text-text-muted mb-6 tracking-widest uppercase">
          As per the Bar Council of India Rules
        </p>
        <p className="text-sm text-text-secondary leading-relaxed mb-8">
          {SITE.barCouncil.disclaimer}
        </p>
        <div className="flex gap-4">
          <button
            onClick={accept}
            className="flex-1 rounded-sm bg-accent px-6 py-3 text-sm font-medium text-bg-primary hover:bg-accent-hover transition-colors cursor-pointer"
          >
            I Agree &amp; Accept
          </button>
        </div>
      </div>
    </div>
  );
}

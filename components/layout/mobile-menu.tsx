'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  readonly links: readonly { readonly href: string; readonly label: string }[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <div className="md:hidden">
      <button
        onClick={toggle}
        className="flex flex-col gap-1.5 p-2"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span className={`block h-px w-6 bg-text-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
        <span className={`block h-px w-6 bg-text-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-[61px] z-40 bg-bg-primary/98 backdrop-blur-xl">
          <nav className="flex flex-col items-center justify-center gap-8 pt-24">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="font-serif text-2xl text-text-secondary hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/portal"
              onClick={close}
              className="font-serif text-lg text-text-muted hover:text-accent transition-colors"
            >
              Client Portal
            </Link>
            <Link
              href="/contact"
              onClick={close}
              className="mt-4 rounded-sm border border-accent px-8 py-3 text-accent hover:bg-accent hover:text-bg-primary transition-all"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

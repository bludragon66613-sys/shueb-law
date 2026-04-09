'use client';

import { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

interface MobileMenuProps {
  readonly links: readonly { readonly href: string; readonly label: string }[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const overlay =
    isOpen && mounted
      ? createPortal(
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 9999,
              backgroundColor: '#0a0a0b',
              overflowY: 'auto',
            }}
            aria-modal="true"
            role="dialog"
          >
            <div style={{ position: 'absolute', top: '1rem', right: '1.5rem' }}>
              <button
                onClick={close}
                className="flex flex-col gap-1.5 p-2"
                aria-label="Close menu"
              >
                <span className="block h-px w-6 bg-text-primary rotate-45 translate-y-[3.5px]" />
                <span className="block h-px w-6 bg-text-primary -rotate-45 -translate-y-[3.5px]" />
              </button>
            </div>

            <nav className="flex h-full flex-col items-center justify-center gap-8">
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
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="lg:hidden">
      <button
        onClick={toggle}
        className="flex flex-col gap-1.5 p-2"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span
          className={`block h-px w-6 bg-text-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`}
        />
        <span
          className={`block h-px w-6 bg-text-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`}
        />
      </button>
      {overlay}
    </div>
  );
}

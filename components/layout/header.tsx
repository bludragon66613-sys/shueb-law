import Link from 'next/link';
import { SITE } from '@/lib/constants';
import { MobileMenu } from './mobile-menu';

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/tools', label: 'Tools' },
  { href: '/knowledge', label: 'Knowledge' },
  { href: '/blog', label: 'Blog' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
] as const;

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-bg-primary/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[72rem] items-center justify-between px-6 md:px-12 py-4">
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-xl text-text-primary tracking-tight">
            {SITE.name}
          </span>
          <span className="text-[10px] text-text-muted tracking-wide">
            {SITE.qualifications}
          </span>
          <span className="text-xs text-text-muted tracking-widest uppercase">
            Advocate
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/portal"
            className="text-sm text-text-muted hover:text-accent transition-colors duration-200"
          >
            Client Portal
          </Link>
          <Link
            href="/contact"
            className="ml-2 rounded-sm border border-accent/50 px-5 py-2 text-sm text-accent hover:bg-accent hover:text-bg-primary hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all duration-200"
          >
            Book Consultation
          </Link>
        </div>

        <MobileMenu links={NAV_LINKS} />
      </nav>
    </header>
  );
}

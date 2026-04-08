import Link from 'next/link';
import { SITE } from '@/lib/constants';
import { LogoutButton } from './logout-button';

interface PortalHeaderProps {
  readonly name: string;
}

export function PortalHeader({ name }: PortalHeaderProps) {
  return (
    <div className="border-b border-border bg-bg-secondary">
      <div className="mx-auto max-w-[72rem] px-6 md:px-12 py-4 flex items-center justify-between">
        <div>
          <Link href="/portal" className="font-serif text-lg text-text-primary hover:text-accent transition-colors">
            {SITE.name}
          </Link>
          <p className="text-xs text-text-muted">Client Portal</p>
        </div>
        <div className="flex items-center gap-6">
          <p className="text-sm text-text-secondary hidden md:block">
            Welcome, <span className="text-text-primary">{name}</span>
          </p>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}

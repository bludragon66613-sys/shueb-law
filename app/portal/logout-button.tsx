'use client';

import { logoutAction } from './logout/actions';

export function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="text-xs text-text-muted hover:text-accent transition-colors cursor-pointer"
      >
        Sign Out
      </button>
    </form>
  );
}

'use client';

import { useActionState } from 'react';
import { loginAction } from './actions';

const initialState = { error: null as string | null };

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="space-y-5">
      {state.error && (
        <div className="rounded-sm border border-red-500/30 bg-red-500/10 p-4">
          <p className="text-sm text-red-400">{state.error}</p>
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-xs tracking-widest uppercase text-text-muted mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-sm border border-border bg-bg-card px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-xs tracking-widest uppercase text-text-muted mb-2">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="w-full rounded-sm border border-border bg-bg-card px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors"
          placeholder="Provided by office"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-sm bg-accent px-6 py-3 text-sm font-medium text-bg-primary hover:bg-accent-hover transition-colors disabled:opacity-50 cursor-pointer"
      >
        {isPending ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
}

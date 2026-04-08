'use client';

import { useActionState } from 'react';
import { submitContactForm } from './actions';

const initialState = { success: false, error: null };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="rounded-sm border border-accent/30 bg-accent-muted p-8 text-center">
        <p className="font-serif text-xl text-accent mb-2">Message Sent</p>
        <p className="text-sm text-text-secondary">
          Thank you for reaching out. You will receive a response within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.error && (
        <div className="rounded-sm border border-red-500/30 bg-red-500/10 p-4">
          <p className="text-sm text-red-400">{state.error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs tracking-widest uppercase text-text-muted mb-2">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-sm border border-border bg-bg-card px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs tracking-widest uppercase text-text-muted mb-2">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-sm border border-border bg-bg-card px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-xs tracking-widest uppercase text-text-muted mb-2">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-sm border border-border bg-bg-card px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-xs tracking-widest uppercase text-text-muted mb-2">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="w-full rounded-sm border border-border bg-bg-card px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors"
            placeholder="e.g., Criminal Defence, Corporate Matter"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs tracking-widest uppercase text-text-muted mb-2">
          Your Matter <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-sm border border-border bg-bg-card px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none transition-colors resize-none"
          placeholder="Briefly describe your legal matter and how we can assist you..."
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-sm bg-accent px-6 py-4 text-sm font-medium text-bg-primary hover:bg-accent-hover transition-colors disabled:opacity-50 cursor-pointer"
      >
        {isPending ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-xs text-text-muted/60 text-center">
        Your information is kept strictly confidential and is not shared with any third party.
      </p>
    </form>
  );
}

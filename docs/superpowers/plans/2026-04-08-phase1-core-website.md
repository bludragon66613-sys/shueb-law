# Phase 1: Core Website — Shueb Hussain Law

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the foundation website for Shueb Hussain's AI-powered law practice — a dark-themed, Ikigai Law-inspired site with homepage, profile, practice areas, contact form, and BCI-compliant disclaimer system.

**Architecture:** Next.js 16 App Router with server components by default, client components only where interactivity is needed (mobile menu, disclaimer modal, contact form). Tailwind CSS v4 for styling with a custom design token system (dark theme with warm cream/gold accents on charcoal). Static generation for all pages. BCI Rule 36 disclaimer as a blocking modal on first visit (cookie-persisted).

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript 5, pnpm, Vercel deployment

---

## File Structure

```
shueb-law/
├── app/
│   ├── layout.tsx              # Root layout: fonts, metadata, disclaimer wrapper
│   ├── page.tsx                # Homepage: hero, practice areas preview, CTA
│   ├── not-found.tsx           # Custom 404
│   ├── globals.css             # Tailwind imports + CSS custom properties (design tokens)
│   ├── about/
│   │   └── page.tsx            # Shueb's profile, credentials, philosophy
│   ├── practice-areas/
│   │   ├── page.tsx            # Practice areas grid
│   │   └── [slug]/
│   │       └── page.tsx        # Individual practice area detail
│   └── contact/
│       ├── page.tsx            # Contact form + office info
│       └── actions.ts          # Server action: form submission
├── components/
│   ├── layout/
│   │   ├── header.tsx          # Navigation bar (desktop + mobile)
│   │   ├── footer.tsx          # Footer with BCI registration, links
│   │   ├── mobile-menu.tsx     # Slide-out mobile menu (client component)
│   │   └── bci-disclaimer.tsx  # BCI Rule 36 disclaimer modal (client component)
│   ├── ui/
│   │   ├── button.tsx          # Reusable button component
│   │   ├── section.tsx         # Page section wrapper with consistent spacing
│   │   └── card.tsx            # Card component for practice areas
│   └── home/
│       ├── hero.tsx            # Homepage hero section
│       ├── practice-preview.tsx # Practice areas preview grid
│       └── philosophy.tsx      # "Why Shueb" section
├── lib/
│   ├── constants.ts            # Site metadata, practice area data, contact info
│   └── fonts.ts                # Font configuration (next/font)
├── public/
│   ├── favicon.ico
│   └── og-image.png            # Open Graph image placeholder
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
└── .env.local                  # Environment variables (empty for Phase 1)
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `.env.local`, `.gitignore`

- [ ] **Step 1: Initialize the project**

```bash
cd ~/shueb-law
pnpm init
pnpm add next@latest react@latest react-dom@latest
pnpm add -D typescript @types/react @types/react-dom @types/node tailwindcss@latest @tailwindcss/postcss postcss
```

- [ ] **Step 2: Create next.config.ts**

```ts
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

- [ ] **Step 3: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 4: Create postcss.config.mjs**

```js
// postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

- [ ] **Step 5: Create globals.css with design tokens**

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  /* Dark luxury palette — charcoal + warm gold */
  --color-bg-primary: #0a0a0b;
  --color-bg-secondary: #141416;
  --color-bg-card: #1a1a1f;
  --color-bg-elevated: #222228;

  --color-text-primary: #f0ece4;
  --color-text-secondary: #a09b91;
  --color-text-muted: #6b6660;

  --color-accent: #c9a84c;
  --color-accent-hover: #d4b85e;
  --color-accent-muted: rgba(201, 168, 76, 0.15);

  --color-border: #2a2a30;
  --color-border-hover: #3a3a42;

  /* Typography scale */
  --font-sans: var(--font-geist-sans), system-ui, sans-serif;
  --font-serif: var(--font-playfair), Georgia, serif;

  /* Spacing */
  --section-padding: 6rem;
  --container-max: 72rem;
}

html {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background-color: var(--color-accent-muted);
  color: var(--color-accent);
}
```

- [ ] **Step 6: Create font configuration**

```ts
// lib/fonts.ts
import { Geist } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';

export const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
});
```

- [ ] **Step 7: Create root layout**

```tsx
// app/layout.tsx
import type { Metadata } from 'next';
import { geistSans, playfair } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shueb Hussain | Advocate & Legal Counsel',
  description: 'AI-powered legal practice delivering precision, speed, and clarity. Based in India.',
  openGraph: {
    title: 'Shueb Hussain | Advocate & Legal Counsel',
    description: 'AI-powered legal practice delivering precision, speed, and clarity.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable}`}>
      <body className="bg-bg-primary text-text-primary font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 8: Create minimal homepage**

```tsx
// app/page.tsx
export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <h1 className="font-serif text-4xl text-accent">Shueb Hussain</h1>
    </main>
  );
}
```

- [ ] **Step 9: Create .env.local and .gitignore**

```bash
# .env.local
# Phase 1: No env vars needed yet
```

```gitignore
# .gitignore
node_modules/
.next/
.env*.local
*.tsbuildinfo
next-env.d.ts
```

- [ ] **Step 10: Verify dev server starts**

Run: `cd ~/shueb-law && pnpm dev`
Expected: Server starts on localhost:3000, page renders with "Shueb Hussain" in gold serif font on dark background.

- [ ] **Step 11: Initialize git and commit**

```bash
cd ~/shueb-law
git init
git add -A
git commit -m "feat: scaffold Next.js project with dark luxury design tokens"
```

---

### Task 2: Constants and Data Layer

**Files:**
- Create: `lib/constants.ts`

- [ ] **Step 1: Create site constants and practice area data**

```ts
// lib/constants.ts

export const SITE = {
  name: 'Shueb Hussain',
  title: 'Advocate & Legal Counsel',
  tagline: 'Precision. Clarity. Justice.',
  description: 'AI-powered legal practice delivering precision, speed, and clarity across civil, criminal, corporate, and constitutional law.',
  email: 'contact@shuebhussain.com',
  phone: '+91-XXXXXXXXXX',
  address: {
    line1: 'Office Address Line 1',
    line2: 'City, State — PIN',
    country: 'India',
  },
  barCouncil: {
    registration: 'Bar Council of India — Registration No. XXXXX/XXXX',
    disclaimer: 'This website is meant solely for the purpose of information and not for the purpose of advertising. Shueb Hussain & Associates does not wish to represent, warrant, or guarantee that the information contained herein is correct, complete, or updated. The contents of this website are for informational purposes only and should not be construed as solicitation or legal advice. Readers are advised not to act on any information provided herein without seeking appropriate professional advice. The use of this website does not create any lawyer-client relationship. Shueb Hussain & Associates shall not be liable for the consequences of any action taken by relying on the material/information provided on this website.',
  },
  social: {
    telegram: 'https://t.me/shuebhussain',
    linkedin: 'https://linkedin.com/in/shuebhussain',
  },
} as const;

export interface PracticeArea {
  readonly slug: string;
  readonly title: string;
  readonly shortDescription: string;
  readonly icon: string;
  readonly description: string;
  readonly services: readonly string[];
}

export const PRACTICE_AREAS: readonly PracticeArea[] = [
  {
    slug: 'criminal-law',
    title: 'Criminal Law',
    shortDescription: 'Defence and prosecution across all criminal matters under BNS, BNSS, and BSA.',
    icon: 'shield',
    description: 'Comprehensive criminal defence and advisory services covering the full spectrum of criminal law under the Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), and Bharatiya Sakshya Adhiniyam (BSA). From bail applications to trial representation, every case is handled with strategic precision.',
    services: [
      'Bail applications (regular, anticipatory, default)',
      'Trial defence and prosecution',
      'FIR quashing petitions (Section 528 BNSS)',
      'Criminal appeals and revisions',
      'White-collar crime defence',
      'Cybercrime matters under IT Act',
    ],
  },
  {
    slug: 'civil-litigation',
    title: 'Civil Litigation',
    shortDescription: 'Strategic civil litigation from district courts to the Supreme Court.',
    icon: 'scale',
    description: 'End-to-end civil litigation services covering property disputes, recovery suits, injunctions, declaratory actions, and appeals. Cases handled across District Courts, High Courts, and the Supreme Court of India.',
    services: [
      'Property and title disputes',
      'Recovery and money suits',
      'Injunctions and specific performance',
      'Partition and succession matters',
      'Consumer disputes (NCDRC, State, District)',
      'Appellate practice',
    ],
  },
  {
    slug: 'corporate-law',
    title: 'Corporate & Commercial',
    shortDescription: 'Business formation, contracts, compliance, and corporate governance.',
    icon: 'building',
    description: 'Advisory and transactional services for businesses of all sizes — from startup incorporation to complex commercial agreements and regulatory compliance under the Companies Act, SEBI regulations, and FEMA.',
    services: [
      'Company incorporation and structuring',
      'Commercial contracts and agreements',
      'Due diligence and M&A advisory',
      'NCLT/NCLAT proceedings',
      'SEBI and securities compliance',
      'Foreign investment (FEMA) advisory',
    ],
  },
  {
    slug: 'constitutional-law',
    title: 'Constitutional Law',
    shortDescription: 'Fundamental rights, writ petitions, and PIL before High Courts and the Supreme Court.',
    icon: 'book',
    description: 'Practice focused on constitutional remedies, fundamental rights enforcement, and public interest litigation. Writ petitions under Articles 32 and 226 for individuals, organizations, and public causes.',
    services: [
      'Writ petitions (Article 32 and 226)',
      'Public Interest Litigation (PIL)',
      'Fundamental rights enforcement',
      'Constitutional challenges to legislation',
      'Service and administrative law matters',
      'Election petitions',
    ],
  },
  {
    slug: 'family-law',
    title: 'Family & Matrimonial',
    shortDescription: 'Divorce, custody, maintenance, and succession across personal laws.',
    icon: 'users',
    description: 'Sensitive and strategic handling of family disputes across Hindu, Muslim, Christian, and Special Marriage Act provisions. Focus on mediation-first approaches with litigation readiness.',
    services: [
      'Divorce and judicial separation',
      'Child custody and visitation',
      'Maintenance and alimony',
      'Domestic violence (Protection of Women from DV Act)',
      'Succession and inheritance',
      'Muslim personal law matters',
    ],
  },
  {
    slug: 'technology-law',
    title: 'Technology & AI Law',
    shortDescription: 'Data protection, IT Act compliance, AI governance, and digital rights.',
    icon: 'cpu',
    description: 'Cutting-edge practice at the intersection of law and technology. Advisory on the Digital Personal Data Protection Act 2023, Information Technology Act, AI governance frameworks, and digital business compliance.',
    services: [
      'DPDP Act 2023 compliance',
      'IT Act advisory and cybercrime',
      'AI and algorithmic governance',
      'Data breach response',
      'SaaS and technology agreements',
      'Intermediary liability and safe harbour',
    ],
  },
] as const;
```

- [ ] **Step 2: Commit**

```bash
git add lib/constants.ts
git commit -m "feat: add site constants and practice area data"
```

---

### Task 3: UI Primitives

**Files:**
- Create: `components/ui/button.tsx`, `components/ui/section.tsx`, `components/ui/card.tsx`

- [ ] **Step 1: Create Button component**

```tsx
// components/ui/button.tsx
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  readonly children: React.ReactNode;
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly href?: string;
  readonly className?: string;
  readonly type?: 'button' | 'submit';
  readonly disabled?: boolean;
  readonly onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-bg-primary hover:bg-accent-hover font-medium',
  secondary: 'border border-border text-text-primary hover:border-accent hover:text-accent',
  ghost: 'text-text-secondary hover:text-accent',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-sm transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
```

- [ ] **Step 2: Create Section wrapper**

```tsx
// components/ui/section.tsx
interface SectionProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 ${className}`}>
      <div className="mx-auto max-w-[72rem]">
        {children}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create Card component**

```tsx
// components/ui/card.tsx
import Link from 'next/link';

interface CardProps {
  readonly title: string;
  readonly description: string;
  readonly href?: string;
  readonly icon?: React.ReactNode;
  readonly className?: string;
}

export function Card({ title, description, href, icon, className = '' }: CardProps) {
  const content = (
    <div className={`group rounded-sm border border-border bg-bg-card p-8 transition-all duration-300 hover:border-accent/40 hover:bg-bg-elevated ${className}`}>
      {icon && <div className="mb-4 text-accent">{icon}</div>}
      <h3 className="font-serif text-xl text-text-primary mb-3 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
```

- [ ] **Step 4: Commit**

```bash
git add components/ui/
git commit -m "feat: add UI primitives — Button, Section, Card"
```

---

### Task 4: Layout Components — Header and Footer

**Files:**
- Create: `components/layout/header.tsx`, `components/layout/footer.tsx`, `components/layout/mobile-menu.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create Header**

```tsx
// components/layout/header.tsx
import Link from 'next/link';
import { SITE } from '@/lib/constants';
import { MobileMenu } from './mobile-menu';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/practice-areas', label: 'Practice Areas' },
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
          <span className="text-xs text-text-muted tracking-widest uppercase">
            Advocate
          </span>
        </Link>

        {/* Desktop nav */}
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
            href="/contact"
            className="ml-4 rounded-sm border border-accent/50 px-5 py-2 text-sm text-accent hover:bg-accent hover:text-bg-primary transition-all duration-200"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <MobileMenu links={NAV_LINKS} />
      </nav>
    </header>
  );
}
```

- [ ] **Step 2: Create MobileMenu (client component)**

```tsx
// components/layout/mobile-menu.tsx
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
```

- [ ] **Step 3: Create Footer**

```tsx
// components/layout/footer.tsx
import Link from 'next/link';
import { SITE } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-[72rem] px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl text-text-primary mb-2">{SITE.name}</p>
            <p className="text-sm text-text-muted">{SITE.title}</p>
            <p className="mt-4 text-sm text-text-secondary leading-relaxed">
              {SITE.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs tracking-widest uppercase text-text-muted mb-4">Navigation</p>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-text-secondary hover:text-accent transition-colors">About</Link>
              <Link href="/practice-areas" className="text-sm text-text-secondary hover:text-accent transition-colors">Practice Areas</Link>
              <Link href="/contact" className="text-sm text-text-secondary hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase text-text-muted mb-4">Contact</p>
            <div className="flex flex-col gap-3 text-sm text-text-secondary">
              <a href={`mailto:${SITE.email}`} className="hover:text-accent transition-colors">{SITE.email}</a>
              <p>{SITE.address.line1}</p>
              <p>{SITE.address.line2}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-text-muted leading-relaxed mb-4">
            {SITE.barCouncil.registration}
          </p>
          <p className="text-xs text-text-muted/60 leading-relaxed">
            &copy; {currentYear} {SITE.name}. All rights reserved. This website has been designed only for the purpose of dissemination of basic information; information which is otherwise available on the internet, various public platforms and social media.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Update root layout to include Header and Footer**

```tsx
// app/layout.tsx — replace body content
<body className="bg-bg-primary text-text-primary font-sans min-h-screen">
  <Header />
  <main className="pt-[61px]">
    {children}
  </main>
  <Footer />
</body>
```

Add imports at top:
```tsx
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
```

- [ ] **Step 5: Verify header/footer render correctly**

Run: `pnpm dev`
Expected: Fixed header with navigation, footer with BCI registration info. Mobile hamburger menu works.

- [ ] **Step 6: Commit**

```bash
git add components/layout/ app/layout.tsx
git commit -m "feat: add Header, Footer, and MobileMenu layout components"
```

---

### Task 5: BCI Disclaimer Modal

**Files:**
- Create: `components/layout/bci-disclaimer.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create BCI Disclaimer modal (client component)**

```tsx
// components/layout/bci-disclaimer.tsx
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
```

- [ ] **Step 2: Add BciDisclaimer to root layout**

In `app/layout.tsx`, add inside `<body>` before `<Header />`:
```tsx
import { BciDisclaimer } from '@/components/layout/bci-disclaimer';

// Inside body:
<BciDisclaimer />
<Header />
```

- [ ] **Step 3: Verify disclaimer appears on first visit**

Run: `pnpm dev`, open incognito window
Expected: Modal blocks the page. Clicking "I Agree & Accept" dismisses it and sets a 30-day cookie. Refreshing the page does NOT show the modal again.

- [ ] **Step 4: Commit**

```bash
git add components/layout/bci-disclaimer.tsx app/layout.tsx
git commit -m "feat: add BCI Rule 36 disclaimer modal with cookie persistence"
```

---

### Task 6: Homepage

**Files:**
- Create: `components/home/hero.tsx`, `components/home/practice-preview.tsx`, `components/home/philosophy.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create Hero section**

```tsx
// components/home/hero.tsx
import { SITE } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary to-bg-secondary" />

      <div className="relative z-10 max-w-3xl">
        <p className="mb-6 text-xs tracking-[0.3em] uppercase text-text-muted">
          {SITE.title}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight text-text-primary mb-6">
          {SITE.name}
        </h1>
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-4">
          {SITE.tagline}
        </p>
        <p className="text-sm text-text-muted max-w-xl mx-auto mb-12 leading-relaxed">
          A modern legal practice powered by AI — delivering the research depth of a top-tier firm with the personal attention of a trusted counsel.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg">
            Book a Consultation
          </Button>
          <Button href="/practice-areas" variant="secondary" size="lg">
            Practice Areas
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create Practice Areas preview**

```tsx
// components/home/practice-preview.tsx
import { PRACTICE_AREAS } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function PracticePreview() {
  return (
    <Section className="bg-bg-secondary">
      <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
        Areas of Practice
      </p>
      <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-12">
        Comprehensive Legal Counsel
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRACTICE_AREAS.map((area) => (
          <Card
            key={area.slug}
            title={area.title}
            description={area.shortDescription}
            href={`/practice-areas/${area.slug}`}
          />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button href="/practice-areas" variant="ghost">
          View All Practice Areas &rarr;
        </Button>
      </div>
    </Section>
  );
}
```

- [ ] **Step 3: Create Philosophy section**

```tsx
// components/home/philosophy.tsx
import { Section } from '@/components/ui/section';

export function Philosophy() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            Why This Practice is Different
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-8">
            Intelligence Meets Advocacy
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Every brief is strengthened by AI-powered research across millions of Indian judgments. Every contract is reviewed with machine precision before human judgment is applied. Every deadline is tracked by systems that never sleep.
          </p>
          <p className="text-text-secondary leading-relaxed">
            The result: the research depth and response speed of a top-tier firm, delivered with the personal commitment of a lawyer who knows your case inside out.
          </p>
        </div>
        <div className="space-y-6">
          {[
            { metric: '1M+', label: 'Indian judgments searchable via AI' },
            { metric: '3x', label: 'Faster legal research turnaround' },
            { metric: '24/7', label: 'Case tracking and client portal access' },
          ].map((stat) => (
            <div key={stat.label} className="border-l-2 border-accent/30 pl-6 py-2">
              <p className="font-serif text-3xl text-accent">{stat.metric}</p>
              <p className="text-sm text-text-secondary mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
```

- [ ] **Step 4: Assemble homepage**

```tsx
// app/page.tsx
import { Hero } from '@/components/home/hero';
import { PracticePreview } from '@/components/home/practice-preview';
import { Philosophy } from '@/components/home/philosophy';

export default function Home() {
  return (
    <>
      <Hero />
      <PracticePreview />
      <Philosophy />
    </>
  );
}
```

- [ ] **Step 5: Verify homepage renders all sections**

Run: `pnpm dev`
Expected: Hero with name + tagline + CTAs, practice areas grid (6 cards), philosophy section with stats. Dark theme throughout. Gold accents on hover.

- [ ] **Step 6: Commit**

```bash
git add components/home/ app/page.tsx
git commit -m "feat: build homepage — hero, practice areas preview, philosophy section"
```

---

### Task 7: About Page

**Files:**
- Create: `app/about/page.tsx`

- [ ] **Step 1: Create About page**

```tsx
// app/about/page.tsx
import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: `About | ${SITE.name}`,
  description: `Learn about ${SITE.name} — credentials, practice philosophy, and approach to AI-powered legal counsel.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <Section className="pt-32">
        <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">About</p>
        <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-8">
          {SITE.name}
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
          {SITE.title} — combining deep legal expertise with cutting-edge AI technology to deliver exceptional results for every client.
        </p>
      </Section>

      {/* Bio */}
      <Section className="bg-bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <h2 className="font-serif text-2xl text-text-primary">Background</h2>
            <p className="text-text-secondary leading-relaxed">
              Shueb Hussain is a practicing Advocate enrolled with the Bar Council of India. With a practice spanning criminal law, civil litigation, corporate advisory, constitutional law, family matters, and technology law, he brings a multidisciplinary perspective to every engagement.
            </p>
            <p className="text-text-secondary leading-relaxed">
              His practice stands at the forefront of legal technology adoption in India — leveraging AI-powered research tools, automated document analysis, and intelligent case management systems to deliver results that match the depth and speed of large institutional firms.
            </p>
            <h2 className="font-serif text-2xl text-text-primary pt-4">Philosophy</h2>
            <p className="text-text-secondary leading-relaxed">
              The law is fundamentally about access to justice. Technology should lower barriers, not raise them. Every AI tool in this practice exists to serve one purpose: ensuring that no argument goes unresearched, no deadline is missed, and no client feels like a number.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-3">Credentials</p>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="border-l-2 border-accent/30 pl-4">Bar Council of India — Enrolled Advocate</li>
                <li className="border-l-2 border-accent/30 pl-4">Practice across Supreme Court, High Courts, and Tribunals</li>
                <li className="border-l-2 border-accent/30 pl-4">Specialist in BNS/BNSS transition advisory</li>
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-3">Practice Areas</p>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="border-l-2 border-border pl-4">Criminal Law</li>
                <li className="border-l-2 border-border pl-4">Civil Litigation</li>
                <li className="border-l-2 border-border pl-4">Corporate & Commercial</li>
                <li className="border-l-2 border-border pl-4">Constitutional Law</li>
                <li className="border-l-2 border-border pl-4">Family & Matrimonial</li>
                <li className="border-l-2 border-border pl-4">Technology & AI Law</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="font-serif text-3xl text-text-primary mb-4">
            Ready to discuss your matter?
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Schedule a consultation to understand how AI-powered legal counsel can make a difference in your case.
          </p>
          <Button href="/contact" size="lg">
            Book a Consultation
          </Button>
        </div>
      </Section>
    </>
  );
}
```

- [ ] **Step 2: Verify About page**

Run: `pnpm dev`, navigate to `/about`
Expected: Full profile page with bio, credentials sidebar, CTA at bottom.

- [ ] **Step 3: Commit**

```bash
git add app/about/
git commit -m "feat: add About page with profile, credentials, and philosophy"
```

---

### Task 8: Practice Areas Pages

**Files:**
- Create: `app/practice-areas/page.tsx`, `app/practice-areas/[slug]/page.tsx`

- [ ] **Step 1: Create Practice Areas index page**

```tsx
// app/practice-areas/page.tsx
import type { Metadata } from 'next';
import { SITE, PRACTICE_AREAS } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: `Practice Areas | ${SITE.name}`,
  description: 'Comprehensive legal services across criminal, civil, corporate, constitutional, family, and technology law.',
};

export default function PracticeAreasPage() {
  return (
    <Section className="pt-32">
      <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
        Areas of Practice
      </p>
      <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">
        Practice Areas
      </h1>
      <p className="text-lg text-text-secondary max-w-2xl mb-16">
        Strategic legal counsel across six core practice areas — each enhanced by AI-powered research and case intelligence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PRACTICE_AREAS.map((area) => (
          <Card
            key={area.slug}
            title={area.title}
            description={area.shortDescription}
            href={`/practice-areas/${area.slug}`}
          />
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Create individual Practice Area detail page**

```tsx
// app/practice-areas/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SITE, PRACTICE_AREAS } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';

export function generateStaticParams() {
  return PRACTICE_AREAS.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `${area.title} | ${SITE.name}`,
    description: area.shortDescription,
  };
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);
  if (!area) notFound();

  return (
    <>
      <Section className="pt-32">
        <Button href="/practice-areas" variant="ghost" className="mb-8">
          &larr; All Practice Areas
        </Button>
        <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
          Practice Area
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-8">
          {area.title}
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">
          {area.description}
        </p>
      </Section>

      <Section className="bg-bg-secondary">
        <h2 className="font-serif text-2xl text-text-primary mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {area.services.map((service) => (
            <div
              key={service}
              className="flex items-start gap-3 rounded-sm border border-border bg-bg-card p-5"
            >
              <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <p className="text-sm text-text-secondary">{service}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="font-serif text-3xl text-text-primary mb-4">
            Need help with {area.title.toLowerCase()}?
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Discuss your matter with an advocate who combines deep expertise with AI-powered research capability.
          </p>
          <Button href="/contact" size="lg">
            Book a Consultation
          </Button>
        </div>
      </Section>
    </>
  );
}
```

- [ ] **Step 3: Verify practice area pages**

Run: `pnpm dev`
- Navigate to `/practice-areas` — grid of 6 cards
- Click "Criminal Law" — detail page with description and services list
- Click back arrow — returns to grid

- [ ] **Step 4: Commit**

```bash
git add app/practice-areas/
git commit -m "feat: add Practice Areas index and dynamic detail pages"
```

---

### Task 9: Contact Page with Server Action

**Files:**
- Create: `app/contact/page.tsx`, `app/contact/actions.ts`, `app/contact/contact-form.tsx`

- [ ] **Step 1: Create the server action for form submission**

```ts
// app/contact/actions.ts
'use server';

interface ContactFormState {
  readonly success: boolean;
  readonly error: string | null;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const subject = formData.get('subject');
  const message = formData.get('message');

  // Validate required fields
  if (!name || !email || !message) {
    return { success: false, error: 'Please fill in all required fields.' };
  }

  // Basic email validation
  const emailStr = String(email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr)) {
    return { success: false, error: 'Please enter a valid email address.' };
  }

  // TODO Phase 4: Send to Telegram bot / email service
  // For now, log and return success
  console.log('Contact form submission:', { name, email, phone, subject, message });

  return { success: true, error: null };
}
```

- [ ] **Step 2: Create the ContactForm client component**

```tsx
// app/contact/contact-form.tsx
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
```

- [ ] **Step 3: Create Contact page**

```tsx
// app/contact/page.tsx
import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { ContactForm } from './contact-form';

export const metadata: Metadata = {
  title: `Contact | ${SITE.name}`,
  description: 'Schedule a consultation or send a message. Responses within 24 hours.',
};

export default function ContactPage() {
  return (
    <>
      <Section className="pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left column: Info */}
          <div className="lg:col-span-2">
            <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">Contact</p>
            <h1 className="font-serif text-4xl text-text-primary mb-6">
              Get in Touch
            </h1>
            <p className="text-text-secondary leading-relaxed mb-12">
              Whether you need legal counsel for an active matter or want to explore your options, reach out for a confidential consultation.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-widest uppercase text-text-muted mb-2">Email</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-text-primary hover:text-accent transition-colors"
                >
                  {SITE.email}
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-text-muted mb-2">Office</p>
                <p className="text-text-secondary text-sm">{SITE.address.line1}</p>
                <p className="text-text-secondary text-sm">{SITE.address.line2}</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-text-muted mb-2">Telegram</p>
                <a
                  href={SITE.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent transition-colors"
                >
                  @shuebhussain
                </a>
              </div>
            </div>
          </div>

          {/* Right column: Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
```

- [ ] **Step 4: Verify contact page and form submission**

Run: `pnpm dev`, navigate to `/contact`
Expected: Split layout with contact info left, form right. Submit with empty fields shows error. Submit with valid data shows success message.

- [ ] **Step 5: Commit**

```bash
git add app/contact/
git commit -m "feat: add Contact page with server action form submission"
```

---

### Task 10: 404 Page and Final Polish

**Files:**
- Create: `app/not-found.tsx`

- [ ] **Step 1: Create custom 404 page**

```tsx
// app/not-found.tsx
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <Section className="flex items-center justify-center min-h-[70vh]">
      <div className="text-center">
        <p className="font-serif text-8xl text-accent/20 mb-4">404</p>
        <h1 className="font-serif text-2xl text-text-primary mb-4">Page Not Found</h1>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button href="/">Return Home</Button>
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Verify 404 page**

Run: `pnpm dev`, navigate to `/anything-random`
Expected: Custom 404 with return home button.

- [ ] **Step 3: Run production build**

Run: `pnpm build`
Expected: Build completes with no errors. All routes statically generated.

- [ ] **Step 4: Commit**

```bash
git add app/not-found.tsx
git commit -m "feat: add custom 404 page"
```

---

### Task 11: GitHub Repo and Vercel Deploy

- [ ] **Step 1: Create GitHub repository**

```bash
cd ~/shueb-law
gh repo create bludragon66613-sys/shueb-law --public --source=. --push
```

- [ ] **Step 2: Deploy to Vercel**

```bash
cd ~/shueb-law
npx vercel --yes
```

- [ ] **Step 3: Verify deployment**

Open the Vercel URL. All pages should render correctly.

- [ ] **Step 4: Final commit with deployment config**

```bash
git add -A
git commit -m "chore: initial Vercel deployment"
git push
```

---

## Phase 1 Complete Checklist

- [ ] Dark luxury design with gold accents renders correctly
- [ ] BCI disclaimer modal appears on first visit, persists via cookie
- [ ] Homepage: hero + practice areas preview + philosophy section
- [ ] About page: profile, credentials, philosophy
- [ ] Practice Areas: index grid + 6 detail pages with services
- [ ] Contact: working form with server action validation
- [ ] 404 page with branded design
- [ ] Mobile responsive: hamburger menu, stacked layouts
- [ ] Production build passes with zero errors
- [ ] Deployed to Vercel

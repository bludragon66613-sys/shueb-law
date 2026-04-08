interface IconProps {
  readonly className?: string;
  readonly size?: number;
}

function iconBase(size: number, className: string) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  };
}

export function ShieldIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...iconBase(size, className)} aria-hidden="true">
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" />
    </svg>
  );
}

export function ScaleIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...iconBase(size, className)} aria-hidden="true">
      <path d="M12 3v18M3 6l9-3 9 3" />
      <path d="M6 9l-3 6h6L6 9z" />
      <path d="M18 9l-3 6h6l-3-6z" />
    </svg>
  );
}

export function BuildingIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...iconBase(size, className)} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M9 21V9h6v12" />
      <path d="M3 9h18" />
      <path d="M9 3v6M15 3v6" />
    </svg>
  );
}

export function BookIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...iconBase(size, className)} aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="8" y1="11" x2="16" y2="11" />
      <line x1="8" y1="15" x2="12" y2="15" />
    </svg>
  );
}

export function UsersIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...iconBase(size, className)} aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function CpuIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg {...iconBase(size, className)} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9"  y1="1"  x2="9"  y2="4" />
      <line x1="15" y1="1"  x2="15" y2="4" />
      <line x1="9"  y1="20" x2="9"  y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9"  x2="23" y2="9" />
      <line x1="20" y1="15" x2="23" y2="15" />
      <line x1="1"  y1="9"  x2="4"  y2="9" />
      <line x1="1"  y1="15" x2="4"  y2="15" />
    </svg>
  );
}

export const PRACTICE_ICONS = {
  shield:   ShieldIcon,
  scale:    ScaleIcon,
  building: BuildingIcon,
  book:     BookIcon,
  users:    UsersIcon,
  cpu:      CpuIcon,
} as const;

export type PracticeIconKey = keyof typeof PRACTICE_ICONS;

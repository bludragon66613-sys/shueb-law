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

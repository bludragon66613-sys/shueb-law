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

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
    <div
      className={`card-border-reveal group relative h-full rounded-sm border border-border bg-bg-card p-8 transition-all duration-300 hover:border-accent/40 hover:bg-bg-elevated ${className}`}
    >
      {icon && (
        <div className="mb-4 text-accent text-2xl w-6 h-6 flex items-center justify-center">
          {icon}
        </div>
      )}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-serif text-xl text-text-primary mb-3 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            {description}
          </p>
        </div>
        {href && (
          <span
            aria-hidden="true"
            className="shrink-0 text-accent opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300 mt-1"
          >
            &rarr;
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{content}</Link>;
  }

  return content;
}

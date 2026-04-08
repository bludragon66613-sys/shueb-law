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

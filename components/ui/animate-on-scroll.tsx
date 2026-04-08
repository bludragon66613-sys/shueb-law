'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimateOnScrollProps {
  readonly children: React.ReactNode;
  readonly delay?: number;
  readonly className?: string;
}

export function AnimateOnScroll({
  children,
  delay = 0,
  className = '',
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            const timer = setTimeout(() => setVisible(true), delay);
            observer.unobserve(el);
            return () => clearTimeout(timer);
          }
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${visible ? 'animate-on-scroll-visible' : 'animate-on-scroll-hidden'} ${className}`}
      style={delay > 0 && !visible ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

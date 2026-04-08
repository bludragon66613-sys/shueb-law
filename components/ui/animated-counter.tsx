'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  readonly value: string;
  readonly duration?: number;
}

/**
 * Parses a metric like "1M+", "3x", "24/7" into:
 * - a numeric part to count up
 * - a suffix to append unchanged
 * - a flag for values that should just fade in (no counting)
 */
function parseMetric(value: string): {
  numeric: number | null;
  suffix: string;
  fadeOnly: boolean;
} {
  // "24/7" — no clean number to count; fade in only
  if (/\//.test(value)) {
    return { numeric: null, suffix: value, fadeOnly: true };
  }

  // "1M+" → numeric=1, suffix="M+"
  // "3x"  → numeric=3, suffix="x"
  const match = value.match(/^(\d+)(.*)$/);
  if (match) {
    return { numeric: parseInt(match[1], 10), suffix: match[2] ?? '', fadeOnly: false };
  }

  return { numeric: null, suffix: value, fadeOnly: true };
}

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function AnimatedCounter({ value, duration = 1500 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState('');
  const [started, setStarted] = useState(false);

  const { numeric, suffix, fadeOnly } = parseMetric(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    if (fadeOnly || numeric === null) {
      setDisplay(value);
      return;
    }

    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOut(progress);
      const current = Math.round(eased * numeric!);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, fadeOnly, numeric, suffix, duration, value]);

  // Before intersection: show nothing (fade in handled by parent AnimateOnScroll)
  return <span ref={ref}>{display || (started ? value : '')}</span>;
}

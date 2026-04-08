import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

export default function NotFound() {
  return (
    <Section className="flex items-center justify-center min-h-[70vh]">
      <AnimateOnScroll>
        <div className="text-center">
          <p className="font-serif text-[10rem] leading-none text-accent/10 select-none mb-2">
            404
          </p>
          {/* Gold divider */}
          <div
            aria-hidden="true"
            className="mx-auto mb-8 h-px w-24"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%)',
            }}
          />
          <h1 className="font-serif text-2xl text-text-primary mb-4">Page Not Found</h1>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
          <Button href="/">Return Home</Button>
        </div>
      </AnimateOnScroll>
    </Section>
  );
}

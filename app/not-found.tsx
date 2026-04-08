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

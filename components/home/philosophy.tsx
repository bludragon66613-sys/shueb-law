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

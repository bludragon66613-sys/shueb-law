import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';
import {
  THESIS_OVERVIEW,
  DISSERTATION_STEPS,
  DISSERTATION_STRUCTURE,
  CITATION_GUIDE,
  COMMON_MISTAKES,
} from '@/lib/thesis';

export const metadata: Metadata = {
  title: `Dissertation & Thesis Guide | ${SITE.name}`,
  description:
    'Complete guide to writing an LL.M. dissertation — from topic selection to viva-voce. Step-by-step procedure, citation formats, chapter structure, and common mistakes to avoid.',
};

export default function ThesisPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            LL.M. Research Guidance
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">
            {THESIS_OVERVIEW.title}
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mb-4">
            {THESIS_OVERVIEW.description}
          </p>
          <p className="text-sm text-text-muted">
            Curated by {SITE.name}, {SITE.qualifications}
          </p>
        </AnimateOnScroll>
      </Section>

      {/* Step-by-Step Process */}
      <Section className="bg-bg-secondary">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            Step-by-Step Process
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-4">
            From Topic to Submission
          </h2>
          <p className="text-text-secondary max-w-2xl mb-12">
            Eight structured steps that take you from selecting your research question all the way through to the viva-voce examination. Follow the sequence — each stage builds on the last.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {DISSERTATION_STEPS.map((step, i) => (
            <AnimateOnScroll key={step.step} delay={i * 60} className="h-full">
              <div className="rounded-sm border border-border bg-bg-card p-8 h-full card-border-reveal">
                <div className="flex items-start gap-4 mb-4">
                  <span className="shrink-0 font-serif text-accent text-sm tracking-widest uppercase">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {step.description}
                </p>
                <div>
                  <p className="text-xs tracking-widest uppercase text-text-muted mb-3">
                    Key Tips
                  </p>
                  <ul className="space-y-2">
                    {step.tips.map((tip) => (
                      <li
                        key={tip}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      {/* Final Document Structure */}
      <Section>
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            Document Structure
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-4">
            Final Dissertation Layout
          </h2>
          <p className="text-text-secondary max-w-2xl mb-12">
            The complete ordered structure of a NALSAR LL.M. dissertation — every component that must appear in the final bound submission, in the correct sequence.
          </p>
        </AnimateOnScroll>

        <div className="space-y-4">
          {DISSERTATION_STRUCTURE.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 50}>
              <div className="border-l-2 border-accent/30 pl-6 py-2">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 text-xs text-accent tracking-widest font-medium tabular-nums mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-text-primary mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      {/* Citation Reference */}
      <Section className="bg-bg-secondary">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            Citation Reference
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-4">
            ILI &amp; Bluebook Citation Formats
          </h2>
          <p className="text-text-secondary max-w-2xl mb-12">
            The ten most common citation types in LL.M. dissertations — format pattern and a worked example for each. Pick one style and apply it without exception throughout your dissertation.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CITATION_GUIDE.map((cite, i) => (
            <AnimateOnScroll key={cite.category} delay={i * 60} className="h-full">
              <div className="rounded-sm border border-border bg-bg-card p-8 h-full card-border-reveal">
                <p className="text-xs tracking-widest uppercase text-accent mb-3">
                  {cite.category}
                </p>
                <div className="mb-4">
                  <p className="text-xs tracking-widest uppercase text-text-muted mb-2">
                    Format
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed font-mono">
                    {cite.format}
                  </p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-text-muted mb-2">
                    Example
                  </p>
                  <p className="text-sm text-text-primary leading-relaxed border-l-2 border-accent/30 pl-4">
                    {cite.example}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      {/* Common Mistakes */}
      <Section>
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            Common Mistakes
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-4">
            Errors That Cost Marks
          </h2>
          <p className="text-text-secondary max-w-2xl mb-12">
            Seven avoidable mistakes that examiners see repeatedly. Identifying them early saves marks, supervisor feedback rounds, and last-minute rewrites.
          </p>
        </AnimateOnScroll>

        <div className="space-y-4">
          {COMMON_MISTAKES.map((mistake, i) => (
            <AnimateOnScroll key={mistake} delay={i * 70}>
              <div className="rounded-sm border border-border bg-bg-card p-6 card-border-reveal">
                <div className="flex items-start gap-4">
                  <span className="mt-1 block h-2 w-2 rounded-full bg-accent shrink-0" />
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {mistake}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-bg-secondary">
        <AnimateOnScroll className="text-center">
          <h2 className="font-serif text-3xl text-text-primary mb-4">
            Need help with your dissertation?
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Whether you are choosing a topic, structuring your chapters, or preparing for the viva, a focused consultation can save weeks of misdirected effort.
          </p>
          <Button href="/consult" size="lg">
            Book Consultation
          </Button>
        </AnimateOnScroll>
      </Section>
    </>
  );
}

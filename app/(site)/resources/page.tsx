import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';
import { LLB_SUBJECTS, LLM_SUBJECTS, AIBE_GUIDE, COURT_PRACTICE } from '@/lib/resources';

export const metadata: Metadata = {
  title: `Student Resources | ${SITE.name}`,
  description:
    'Comprehensive study materials for LLB and LLM students — landmark judgments, subject guides, AIBE preparation, and court practice fundamentals.',
};

function SubjectCard({
  subject,
  delay,
}: {
  readonly subject: {
    readonly title: string;
    readonly semester?: string;
    readonly description: string;
    readonly landmarks: readonly { readonly name: string; readonly citation: string; readonly principle: string }[];
    readonly topics: readonly string[];
    readonly scope: string;
  };
  readonly delay: number;
}) {
  return (
    <AnimateOnScroll delay={delay}>
      <div className="rounded-sm border border-border bg-bg-card p-8 card-border-reveal">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="font-serif text-xl text-text-primary">
            {subject.title}
          </h3>
          {subject.semester && (
            <span className="text-xs text-accent tracking-widest uppercase whitespace-nowrap">
              {subject.semester}
            </span>
          )}
        </div>
        <p className="text-sm text-text-secondary leading-relaxed mb-6">
          {subject.description}
        </p>

        <div className="mb-6">
          <p className="text-xs tracking-widest uppercase text-text-muted mb-3">
            Key Topics
          </p>
          <div className="flex flex-wrap gap-2">
            {subject.topics.map((topic) => (
              <span
                key={topic}
                className="text-xs text-text-secondary border border-border rounded-sm px-2 py-1"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-xs tracking-widest uppercase text-text-muted mb-3">
            Landmark Judgments
          </p>
          <div className="space-y-3">
            {subject.landmarks.map((lm) => (
              <div key={lm.name} className="border-l-2 border-accent/30 pl-4">
                <p className="text-sm text-text-primary font-medium">
                  {lm.name}
                </p>
                <p className="text-xs text-accent">{lm.citation}</p>
                <p className="text-xs text-text-muted mt-1">{lm.principle}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-text-muted mb-2">
            Scope &amp; Practice
          </p>
          <p className="text-sm text-text-secondary leading-relaxed">
            {subject.scope}
          </p>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            Student &amp; Intern Resources
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">
            Law Student Reference Library
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mb-4">
            Comprehensive study materials covering every major LLB and LLM subject — landmark judgments, key topics, scope of practice, and examination guidance. Built for students preparing for university exams, the AIBE, and the courtroom.
          </p>
          <p className="text-sm text-text-muted">
            Curated by {SITE.name}, {SITE.qualifications}
          </p>
        </AnimateOnScroll>
      </Section>

      {/* LLB Subjects */}
      <Section className="bg-bg-secondary">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            LL.B. Curriculum
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-4">
            Core Subjects &amp; Landmark Cases
          </h2>
          <p className="text-text-secondary max-w-2xl mb-12">
            Every subject a law graduate must master — with the landmark judgments that define each field and the practical scope for courtroom application.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {LLB_SUBJECTS.map((subject, i) => (
            <SubjectCard key={subject.title} subject={subject} delay={i * 60} />
          ))}
        </div>
      </Section>

      {/* LLM Subjects */}
      <Section>
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            LL.M. Advanced Studies
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-4">
            Postgraduate Specialisations
          </h2>
          <p className="text-text-secondary max-w-2xl mb-12">
            Advanced subjects for LL.M. scholars — deeper constitutional analysis, human rights jurisprudence, and international law frameworks.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {LLM_SUBJECTS.map((subject, i) => (
            <SubjectCard key={subject.title} subject={subject} delay={i * 60} />
          ))}
        </div>
      </Section>

      {/* AIBE Preparation */}
      <Section className="bg-bg-secondary">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            AIBE Preparation
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-4">
            All India Bar Examination Guide
          </h2>
          <p className="text-text-secondary max-w-2xl mb-12">
            {AIBE_GUIDE.introduction}
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <AnimateOnScroll>
            <div className="rounded-sm border border-border bg-bg-card p-6">
              <p className="font-serif text-lg text-text-primary mb-3">Format</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                {AIBE_GUIDE.format.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="rounded-sm border border-border bg-bg-card p-6">
              <p className="font-serif text-lg text-text-primary mb-3">Key Subjects</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                {AIBE_GUIDE.subjects.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="rounded-sm border border-border bg-bg-card p-6">
              <p className="font-serif text-lg text-text-primary mb-3">Preparation Tips</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                {AIBE_GUIDE.tips.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </Section>

      {/* Court Practice Fundamentals */}
      <Section>
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            Court Practice
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-4">
            From Classroom to Courtroom
          </h2>
          <p className="text-text-secondary max-w-2xl mb-12">
            What law school doesn&apos;t teach you — practical skills for surviving and thriving in Indian courts.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COURT_PRACTICE.map((section, i) => (
            <AnimateOnScroll key={section.title} delay={i * 80}>
              <div className="rounded-sm border border-border bg-bg-card p-8 h-full card-border-reveal">
                <h3 className="font-serif text-xl text-text-primary mb-3">
                  {section.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {section.description}
                </p>
                <ul className="space-y-2">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-bg-secondary">
        <AnimateOnScroll className="text-center">
          <h2 className="font-serif text-3xl text-text-primary mb-4">
            Interested in interning with us?
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            We welcome motivated law students who want hands-on experience in a modern, AI-powered legal practice. Reach out to discuss internship opportunities.
          </p>
          <Button href="/contact" size="lg">
            Get in Touch
          </Button>
        </AnimateOnScroll>
      </Section>
    </>
  );
}

import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';
import { LLB_SUBJECTS, LLM_SUBJECTS, AIBE_GUIDE, COURT_PRACTICE, AIBE_SYLLABUS, OU_LLM_BRANCHES, TS_LAWCET, TS_PGLCET } from '@/lib/resources';

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
    <AnimateOnScroll delay={delay} className="h-full">
      <div className="rounded-sm border border-border bg-bg-card p-8 h-full card-border-reveal">
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

      {/* AIBE-XX Official Syllabus */}
      <Section className="bg-bg-secondary">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            AIBE Syllabus
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-2">
            AIBE-XX Official Syllabus
          </h2>
          <p className="text-text-secondary max-w-2xl mb-2">
            All India Bar Examination — 100 MCQs, Open Book, 3.5 Hours
          </p>
          <p className="text-xs text-text-muted mb-12">
            Source: {AIBE_SYLLABUS.source}, dated {AIBE_SYLLABUS.date}
          </p>
        </AnimateOnScroll>

        <div className="rounded-sm border border-border overflow-hidden">
          {AIBE_SYLLABUS.subjects.map((subject, i) => (
            <AnimateOnScroll key={subject.name} delay={i * 40}>
              <div className={`flex items-center justify-between gap-4 px-6 py-4 ${i % 2 === 0 ? 'bg-bg-card' : 'bg-bg-secondary'} border-b border-border last:border-b-0`}>
                <span className="text-sm text-text-primary">{subject.name}</span>
                <span className="shrink-0 rounded-sm bg-accent/10 border border-accent/30 text-accent text-xs font-medium px-3 py-1 tracking-wide">
                  {subject.questions} Qs
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      {/* Osmania University LL.M. Branches */}
      <Section>
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            LL.M. Programme
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-2">
            Osmania University — LL.M. Specialisations
          </h2>
          <p className="text-text-secondary max-w-2xl mb-12">
            {OU_LLM_BRANCHES.duration} &middot; {OU_LLM_BRANCHES.totalMarks} Total Marks &middot; {OU_LLM_BRANCHES.revision}
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {OU_LLM_BRANCHES.branches.map((branch, i) => (
            <AnimateOnScroll key={branch.number} delay={i * 60} className="h-full">
              <div className="rounded-sm border border-border bg-bg-card p-8 h-full card-border-reveal">
                <div className="flex items-start gap-4 mb-4">
                  <span className="shrink-0 font-serif text-accent text-sm tracking-widest uppercase">
                    Branch {branch.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-text-primary mb-4">
                  {branch.name}
                </h3>
                <p className="text-xs tracking-widest uppercase text-text-muted mb-3">
                  Papers
                </p>
                <ul className="space-y-2">
                  {branch.papers.map((paper) => (
                    <li key={paper} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent/40 shrink-0" />
                      {paper}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      {/* TS LAWCET 2026 */}
      <Section className="bg-bg-secondary">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            Entrance Examination
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-2">
            TS LAWCET 2026
          </h2>
          <p className="text-text-secondary max-w-2xl mb-4">
            Telangana State Law Common Entrance Test — LL.B. 3-Year &amp; 5-Year
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <span className="text-xs text-accent border border-accent/30 rounded-sm px-3 py-1">
              {TS_LAWCET.totalQuestions} Questions
            </span>
            <span className="text-xs text-accent border border-accent/30 rounded-sm px-3 py-1">
              {TS_LAWCET.totalMarks} Marks
            </span>
            <span className="text-xs text-accent border border-accent/30 rounded-sm px-3 py-1">
              {TS_LAWCET.duration}
            </span>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {TS_LAWCET.parts.map((part, i) => (
            <AnimateOnScroll key={part.name} delay={i * 100}>
              <div className="rounded-sm border border-border bg-bg-card p-6 h-full">
                <h3 className="font-serif text-base text-text-primary mb-2">
                  {part.name}
                </h3>
                <div className="flex gap-3 mb-4">
                  <span className="text-xs text-accent">{part.questions} questions</span>
                  <span className="text-xs text-text-muted">/</span>
                  <span className="text-xs text-accent">{part.marks} marks</span>
                </div>
                <p className="text-xs tracking-widest uppercase text-text-muted mb-3">
                  Topics
                </p>
                <ul className="space-y-2">
                  {part.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={300}>
          <p className="text-xs text-text-muted border-l-2 border-accent/30 pl-4">
            {TS_LAWCET.note}
          </p>
        </AnimateOnScroll>
      </Section>

      {/* TS PGLCET 2026 */}
      <Section>
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            Postgraduate Entrance
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-2">
            TS PGLCET 2026
          </h2>
          <p className="text-text-secondary max-w-2xl mb-4">
            Postgraduate Law Common Entrance Test — LL.M. Entrance
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <span className="text-xs text-accent border border-accent/30 rounded-sm px-3 py-1">
              {TS_PGLCET.totalQuestions} Questions
            </span>
            <span className="text-xs text-accent border border-accent/30 rounded-sm px-3 py-1">
              {TS_PGLCET.totalMarks} Marks
            </span>
            <span className="text-xs text-accent border border-accent/30 rounded-sm px-3 py-1">
              {TS_PGLCET.duration}
            </span>
          </div>
        </AnimateOnScroll>

        {TS_PGLCET.parts.map((part, partIndex) => (
          <div key={part.name} className={partIndex > 0 ? 'mt-12' : ''}>
            <AnimateOnScroll>
              <div className="flex items-center gap-4 mb-6">
                <h3 className="font-serif text-xl text-text-primary">{part.name}</h3>
                <div className="flex gap-3">
                  <span className="text-xs text-accent border border-accent/30 rounded-sm px-3 py-1">
                    {part.questions} questions
                  </span>
                  <span className="text-xs text-accent border border-accent/30 rounded-sm px-3 py-1">
                    {part.marks} marks
                  </span>
                </div>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {part.sections.map((section, i) => (
                <AnimateOnScroll key={section.name} delay={i * 80}>
                  <div className="rounded-sm border border-border bg-bg-card p-6 h-full card-border-reveal">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h4 className="font-serif text-base text-text-primary">
                        {section.name}
                      </h4>
                      <span className="shrink-0 text-xs text-accent border border-accent/30 rounded-sm px-2 py-1">
                        {section.questions} Qs
                      </span>
                    </div>
                    <p className="text-xs tracking-widest uppercase text-text-muted mb-3">
                      Topics
                    </p>
                    <ul className="space-y-2">
                      {section.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent/40 shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        ))}
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

import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/constants';
import { ARTICLES } from '@/lib/articles';
import { Section } from '@/components/ui/section';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

export const metadata: Metadata = {
  title: `Knowledge Hub | ${SITE.name}`,
  description: 'Legal insights, analysis, and guides on Indian law — criminal, civil, corporate, constitutional, and technology law.',
};

export default function KnowledgePage() {
  return (
    <Section className="pt-32">
      <AnimateOnScroll>
        <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
          Knowledge Hub
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">
          Legal Insights
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mb-16">
          Analysis, guides, and updates on Indian law — from criminal code transitions to data protection compliance.
        </p>
      </AnimateOnScroll>

      <div className="space-y-6">
        {ARTICLES.map((article, index) => (
          <AnimateOnScroll key={article.slug} delay={index * 100}>
            <Link href={`/knowledge/${article.slug}`}>
              <article className="group rounded-sm border border-border bg-bg-card p-8 transition-all duration-300 hover:border-accent/40 hover:bg-bg-elevated">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs tracking-widest uppercase text-accent">
                        {article.category}
                      </span>
                      <span className="text-xs text-text-muted">&middot;</span>
                      <span className="text-xs text-text-muted">{article.readTime} read</span>
                    </div>
                    <h2 className="font-serif text-xl text-text-primary mb-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <time className="text-xs text-text-muted whitespace-nowrap md:pt-1">
                    {new Date(article.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
              </article>
            </Link>
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  );
}

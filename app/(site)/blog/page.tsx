import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/constants';
import { getAllBlogPosts } from '@/lib/blog';
import { Section } from '@/components/ui/section';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

export const metadata: Metadata = {
  title: `Blog | ${SITE.name}`,
  description:
    'Legal insights, practical guides, and expert analysis on Indian law — written for laypersons navigating the legal system in Telangana and Hyderabad.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <Section className="pt-32">
      <AnimateOnScroll>
        <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
          Blog
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">
          Legal Insights
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mb-16">
          Practical guides and expert analysis on Indian law — from property
          registration to criminal defence, written for laypersons navigating
          the legal system.
        </p>
      </AnimateOnScroll>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <AnimateOnScroll key={post.slug} delay={index * 80}>
            <Link href={`/blog/${post.slug}`}>
              <article className="group rounded-sm border border-border bg-bg-card p-8 transition-all duration-300 hover:border-accent/40 hover:bg-bg-elevated card-border-reveal">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs tracking-widest uppercase text-accent">
                        {post.category}
                      </span>
                      <span className="text-xs text-text-muted">
                        &middot;
                      </span>
                      <span className="text-xs text-text-muted">
                        {post.readTime} read
                      </span>
                    </div>
                    <h2 className="font-serif text-xl text-text-primary mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <time className="text-xs text-text-muted whitespace-nowrap md:pt-1">
                    {new Date(post.date).toLocaleDateString('en-IN', {
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

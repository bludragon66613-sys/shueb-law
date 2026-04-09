import Link from 'next/link';
import { getRecentBlogPosts } from '@/lib/blog';
import { Section } from '@/components/ui/section';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

export function BlogPreview() {
  const posts = getRecentBlogPosts(3);

  if (posts.length === 0) return null;

  return (
    <Section>
      <AnimateOnScroll>
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
              From the Blog
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-text-primary">
              Latest Articles
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm text-accent hover:text-accent-hover transition-colors hidden md:block"
          >
            View All &rarr;
          </Link>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <AnimateOnScroll key={post.slug} delay={index * 120}>
            <Link href={`/blog/${post.slug}`}>
              <article className="group h-full rounded-sm border border-border bg-bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:bg-bg-elevated card-border-reveal">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs tracking-widest uppercase text-accent">
                    {post.category}
                  </span>
                  <span className="text-xs text-text-muted">&middot;</span>
                  <span className="text-xs text-text-muted">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-text-primary mb-2 group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <time className="block text-xs text-text-muted mt-4">
                  {new Date(post.date).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </article>
            </Link>
          </AnimateOnScroll>
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link
          href="/blog"
          className="text-sm text-accent hover:text-accent-hover transition-colors"
        >
          View All Articles &rarr;
        </Link>
      </div>
    </Section>
  );
}

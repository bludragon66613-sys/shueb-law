import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SITE } from '@/lib/constants';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';

export function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${SITE.name}`,
    description: post.excerpt,
  };
}

function renderMarkdown(content: string) {
  return content.split('\n\n').map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2
          key={i}
          className="font-serif text-2xl text-text-primary mt-12 mb-4"
        >
          {block.replace('## ', '')}
        </h2>
      );
    }
    if (block.startsWith('### ')) {
      return (
        <h3
          key={i}
          className="font-serif text-xl text-text-primary mt-8 mb-3"
        >
          {block.replace('### ', '')}
        </h3>
      );
    }
    if (block.match(/^\d+\.\s/)) {
      const items = block.split('\n').filter(Boolean);
      return (
        <ol key={i} className="space-y-2 my-4 ml-4">
          {items.map((item, j) => (
            <li
              key={j}
              className="text-sm text-text-secondary leading-relaxed list-decimal ml-4"
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: item
                    .replace(/^\d+\.\s/, '')
                    .replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-text-primary">$1</strong>',
                    )
                    .replace(
                      /\[(.*?)\]\((.*?)\)/g,
                      '<a href="$2" class="text-accent hover:underline">$1</a>',
                    ),
                }}
              />
            </li>
          ))}
        </ol>
      );
    }
    if (block.startsWith('- ')) {
      const items = block.split('\n').filter(Boolean);
      return (
        <ul key={i} className="space-y-2 my-4">
          {items.map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
            >
              <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <span
                dangerouslySetInnerHTML={{
                  __html: item
                    .replace(/^-\s/, '')
                    .replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-text-primary">$1</strong>',
                    )
                    .replace(
                      /\[(.*?)\]\((.*?)\)/g,
                      '<a href="$2" class="text-accent hover:underline">$1</a>',
                    ),
                }}
              />
            </li>
          ))}
        </ul>
      );
    }
    if (!block.trim()) return null;
    return (
      <p
        key={i}
        className="text-text-secondary leading-relaxed mb-4"
        dangerouslySetInnerHTML={{
          __html: block
            .replace(
              /\*\*(.*?)\*\*/g,
              '<strong class="text-text-primary">$1</strong>',
            )
            .replace(
              /\[(.*?)\]\((.*?)\)/g,
              '<a href="$2" class="text-accent hover:underline">$1</a>',
            ),
        }}
      />
    );
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Section className="pt-32">
        <Button href="/blog" variant="ghost" className="mb-8">
          &larr; Back to Blog
        </Button>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs tracking-widest uppercase text-accent">
            {post.category}
          </span>
          <span className="text-xs text-text-muted">&middot;</span>
          <span className="text-xs text-text-muted">
            {post.readTime} read
          </span>
          <span className="text-xs text-text-muted">&middot;</span>
          <time className="text-xs text-text-muted">
            {new Date(post.date).toLocaleDateString('en-IN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>

        <h1 className="font-serif text-3xl md:text-5xl text-text-primary mb-4 max-w-3xl leading-tight">
          {post.title}
        </h1>
        <p className="text-sm text-text-muted mb-8">By {post.author}</p>
        <p className="text-lg text-text-secondary max-w-2xl">
          {post.excerpt}
        </p>
      </Section>

      <Section className="pt-0">
        <div className="max-w-3xl">{renderMarkdown(post.content)}</div>
      </Section>

      <Section className="bg-bg-secondary">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-text-primary mb-4">
            Need specific guidance?
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            This article provides general information. For advice tailored to
            your situation, schedule a consultation.
          </p>
          <Button href="/contact" size="lg">
            Book a Consultation
          </Button>
        </div>
      </Section>
    </>
  );
}

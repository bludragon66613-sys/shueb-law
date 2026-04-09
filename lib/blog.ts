import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  readonly slug: string;
  readonly title: string;
  readonly date: string;
  readonly excerpt: string;
  readonly category: string;
  readonly readTime: string;
  readonly author: string;
  readonly content: string;
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export function getAllBlogPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));

  const posts = files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);

    return {
      slug: (data.slug as string) ?? filename.replace('.mdx', ''),
      title: (data.title as string) ?? '',
      date: (data.date as string) ?? '',
      excerpt: (data.excerpt as string) ?? '',
      category: (data.category as string) ?? '',
      readTime: (data.readTime as string) ?? '',
      author: (data.author as string) ?? 'Shueb Hussain, B.Com., LL.B., LL.M., Ph.D.',
      content: content.trim(),
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((p) => p.slug === slug);
}

export function getRecentBlogPosts(count: number): BlogPost[] {
  return getAllBlogPosts().slice(0, count);
}

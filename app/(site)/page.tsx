import { Hero } from '@/components/home/hero';
import { PracticePreview } from '@/components/home/practice-preview';
import { Philosophy } from '@/components/home/philosophy';
import { BlogPreview } from '@/components/home/blog-preview';
import { CtaBanner } from '@/components/home/cta-banner';

export default function Home() {
  return (
    <>
      <Hero />
      <PracticePreview />
      <Philosophy />
      <BlogPreview />
      <CtaBanner />
    </>
  );
}

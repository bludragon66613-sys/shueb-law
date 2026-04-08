import { BciDisclaimer } from '@/components/layout/bci-disclaimer';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BciDisclaimer />
      <Header />
      <main className="pt-[61px]">
        {children}
      </main>
      <Footer />
    </>
  );
}

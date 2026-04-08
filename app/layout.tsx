import type { Metadata } from 'next';
import { geistSans, playfair } from '@/lib/fonts';
import { BciDisclaimer } from '@/components/layout/bci-disclaimer';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shueb Hussain | Advocate & Legal Counsel',
  description: 'AI-powered legal practice delivering precision, speed, and clarity. Based in India.',
  openGraph: {
    title: 'Shueb Hussain | Advocate & Legal Counsel',
    description: 'AI-powered legal practice delivering precision, speed, and clarity.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable}`}>
      <body className="bg-bg-primary text-text-primary font-sans min-h-screen">
        <BciDisclaimer />
        <Header />
        <main className="pt-[61px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

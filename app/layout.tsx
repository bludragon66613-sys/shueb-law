import type { Metadata, Viewport } from 'next';
import { geistSans, playfair } from '@/lib/fonts';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#0a0a0b',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://shueb.io'),
  title: {
    default: 'Shueb Hussain, Ph.D., LL.M., Dual MBA, LL.B., B.Com. | Advocate & Legal Counsel',
    template: '%s | Shueb Hussain, Advocate',
  },
  description: 'AI-powered legal practice in Hyderabad delivering precision, speed, and clarity across criminal, civil, corporate, constitutional, family, and technology law.',
  keywords: [
    'advocate hyderabad', 'lawyer hyderabad', 'criminal lawyer hyderabad',
    'high court advocate', 'BNS lawyer', 'AI legal counsel',
    'corporate lawyer hyderabad', 'family lawyer hyderabad',
    'Shueb Hussain', 'legal consultation hyderabad',
    'property lawyer hyderabad', 'divorce lawyer hyderabad',
    'bail lawyer telangana', 'writ petition high court',
    'consumer court hyderabad', 'cyber crime lawyer hyderabad',
    'RERA lawyer telangana', 'company registration hyderabad',
    'law student resources india', 'AIBE preparation',
    'telangana high court advocate', 'best lawyer hyderabad',
  ],
  authors: [{ name: 'Shueb Hussain, Ph.D., LL.M., Dual MBA, LL.B., B.Com.' }],
  creator: 'Shueb Hussain',
  openGraph: {
    title: 'Shueb Hussain, Ph.D., LL.M., Dual MBA, LL.B., B.Com. | Advocate & Legal Counsel',
    description: 'AI-powered legal practice in Hyderabad — criminal, civil, corporate, constitutional, family, and technology law.',
    url: 'https://shueb.io',
    siteName: 'Shueb Hussain — Advocate & Legal Counsel',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shueb Hussain, Ph.D., LL.M., Dual MBA, LL.B., B.Com. | Advocate & Legal Counsel',
    description: 'AI-powered legal practice in Hyderabad delivering precision, speed, and clarity.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://shueb.io',
  },
};

function LegalPracticeJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Shueb Hussain, Ph.D., LL.M., Dual MBA, LL.B., B.Com. — Advocate & Legal Counsel',
    description: 'AI-powered legal practice delivering precision, speed, and clarity across criminal, civil, corporate, constitutional, family, and technology law.',
    url: 'https://shueb.io',
    telephone: '+919063363633',
    email: 'advocate@shueb.io',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '21-7-762/1, Ground Floor Third Shutter Masjid Lane, Opp. Post Office, Ghansi Bazaar',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500066',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 17.3616,
      longitude: 78.4747,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable}`}>
      <body className="bg-bg-primary text-text-primary font-sans min-h-screen">
        <LegalPracticeJsonLd />
        {children}
      </body>
    </html>
  );
}

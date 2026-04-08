import { Geist } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';

export const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
});

import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { siteConfig } from '@/src/config/site';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Yaganti Signature Suites | Luxury Apartments in Guntur',
    template: '%s | Yaganti Signature Suites',
  },
  description: siteConfig.siteDescription,
  keywords: ['luxury apartments Guntur', 'Yaganti Signature Suites', 'premium flats Guntur', 'Yaganti Constructions', '3550 sq ft apartment Guntur'],
  openGraph: {
    title: 'Yaganti Signature Suites | Luxury Apartments in Guntur',
    description: siteConfig.siteDescription,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Yaganti Signature Suites',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yaganti Signature Suites | Luxury Apartments in Guntur',
    description: siteConfig.siteDescription,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="font-body bg-ivory text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}

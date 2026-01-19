import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import CookieConsent from '@/components/ui/CookieConsent';
import ServiceWorkerRegister from '@/components/ui/ServiceWorkerRegister';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://caculator-world.vercel.app'),
  title: 'Calculator World - Free Online Calculator & Unit Converter',
  description: 'A minimalist, powerful calculator app with scientific calculations, unit conversion, and multi-language support. Free to use for everyone.',
  keywords: 'calculator, unit converter, scientific calculator, online calculator, free calculator, math calculator, conversion tool',
  authors: [{ name: 'Calculator World', url: 'https://caculator-world.vercel.app' }],
  creator: 'Calculator World',
  publisher: 'Calculator World',
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'es': '/',
      'fr': '/',
      'de': '/',
    },
  },
  openGraph: {
    title: 'Calculator World - Free Online Calculator & Unit Converter',
    description: 'A minimalist, powerful calculator app with scientific calculations, unit conversion, and multi-language support.',
    type: 'website',
    url: 'https://caculator-world.vercel.app',
    siteName: 'Calculator World',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Calculator World',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculator World - Free Online Calculator',
    description: 'Minimalist, powerful calculator with scientific calculations and unit conversion.',
    creator: '@calculatorworld',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'dSvyi8ugxh5gSyQK40vW2UI6EG_luAKTEf3793gGE6c',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#5B9BD5" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <ServiceWorkerRegister />
          <Navbar />
          {children}
          <Footer />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}

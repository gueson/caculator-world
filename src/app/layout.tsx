import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.caculator-world.online'),
  title: 'Calculator World - Free Online Calculator & Unit Converter',
  description: 'A minimalist, powerful calculator app with scientific calculations, unit conversion, and multi-language support. Free to use for everyone.',
  keywords: 'calculator, unit converter, scientific calculator, online calculator, free calculator, math calculator, conversion tool',
  authors: [{ name: 'Calculator World', url: 'https://www.caculator-world.online' }],
  creator: 'Calculator World',
  publisher: 'Calculator World',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icon-192.png',
    other: {
      rel: 'icon',
      url: '/icon-192.png',
      sizes: '192x192',
      type: 'image/png',
    },
  },
  alternates: {
    canonical: 'https://www.caculator-world.online',
  },
  robots: {
    index: true, // Allow indexing for proper redirect handling
    follow: true,
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
        {children}
      </body>
    </html>
  );
}

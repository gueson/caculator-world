import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import '../globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import CookieConsent from '@/components/ui/CookieConsent';
import ServiceWorkerRegister from '@/components/ui/ServiceWorkerRegister';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { languages } from '@/lib/i18n';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

interface Props {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

export function generateMetadata({ params }: { params: { lang: string } }) {
  const currentLang = params.lang || 'en';
  const langNames: Record<string, string> = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    de: 'Deutsch'
  };

  return {
    metadataBase: new URL('https://www.caculator-world.online'),
    title: `Calculator World - Free Online Calculator & Unit Converter in ${langNames[currentLang]}`,
    description: `Powerful ${langNames[currentLang]} calculator with scientific functions, unit conversion, and multi-language support. Free, easy-to-use, and accurate for students, professionals, and everyday use.`,
    keywords: `calculator, unit converter, scientific calculator, online calculator, free calculator, math calculator, conversion tool, ${currentLang} calculator`,
    authors: [{ name: 'Calculator World', url: 'https://www.caculator-world.online' }],
    creator: 'Calculator World',
    publisher: 'Calculator World',
    alternates: {
      canonical: `https://www.caculator-world.online/${currentLang}`,
      languages: {
        'en': '/en',
        'es': '/es',
        'fr': '/fr',
        'de': '/de',
      },
    },
    openGraph: {
      title: `Calculator World - Free Online Calculator & Unit Converter in ${langNames[currentLang]}`,
      description: `Powerful ${langNames[currentLang]} calculator with scientific functions, unit conversion, and multi-language support.`,
      type: 'website',
      url: `https://www.caculator-world.online/${currentLang}`,
      siteName: 'Calculator World',
      locale: currentLang === 'en' ? 'en_US' : currentLang,
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
      title: `Calculator World - Free Online Calculator in ${langNames[currentLang]}`,
      description: `Powerful ${langNames[currentLang]} calculator with scientific functions and unit conversion.`,
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
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function LanguageLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> | { lang: string } }) {
  const currentLang = (typeof params === 'object' && 'lang' in params) ? params.lang : 'en';

  return (
    <html lang={currentLang}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#5B9BD5" />
        {/* Hreflang tags for SEO */}
        {languages.map(lang => (
          <link
            key={lang.code}
            rel="alternate"
            hrefLang={lang.code}
            href={`https://www.caculator-world.online/${lang.code}`}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.caculator-world.online/en"
        />
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1VV0PH91M0" />
      </head>
      <body className={inter.className}>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1VV0PH91M0', {
              page_path: '/${currentLang}'
            });
          `}
        </Script>
        <LanguageProvider>
          <ServiceWorkerRegister />
          <Navbar />
          {children}
          <Footer />
          <CookieConsent />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import CookieConsent from '@/components/ui/CookieConsent';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { languages } from '@/lib/i18n';

const langNames: Record<string, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  zh: '中文'
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = lang || 'en';

  return {
    metadataBase: new URL('https://www.caculator-world.online'),
    title: `Calculator World - Free Online Calculator & Unit Converter in ${langNames[currentLang]}`,
    description: `Powerful ${langNames[currentLang]} calculator with scientific functions, unit conversion, and multi-language support. Free, easy-to-use and accurate for students, professionals, and everyday use.`,
    keywords: `free calculator, unit converter, scientific and math calculator, conversion tool, ${currentLang} calculator`,
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
        'zh': '/zh',
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

export default function LanguageLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Navbar />
      {children}
      <Footer />
      <CookieConsent />
      <Analytics />
      {/* Google tag (gtag.js) */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1VV0PH91M0" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1VV0PH91M0');
        `}
      </Script>
    </LanguageProvider>
  );
}

'use client';

import AdBanner from '@/components/ads/AdBanner';
import Calculator from '@/components/calculator/Calculator';
import UnitConverter from '@/components/converter/UnitConverter';
import { useState } from 'react';
import { useTranslation } from '@/lib/i18n/LanguageContext';
import Script from 'next/script';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'calculator' | 'converter'>('calculator');
  const { t } = useTranslation();
  const homeText = t('home');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Calculator World',
    'description': 'A minimalist, powerful calculator application with scientific calculations, unit conversion, and multi-language support.',
    'url': 'https://www.caculator-world.online',
    'applicationCategory': 'UtilitiesApplication',
    'operatingSystem': 'All',
    'browserRequirements': 'Requires JavaScript. Requires HTML5.',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'featureList': [
      'Basic arithmetic calculations',
      'Scientific calculator functions',
      'Unit conversion tools',
      'Calculation history',
      'Multi-language support (English, Spanish, French, German)'
    ],
    'inLanguage': ['en', 'es', 'fr', 'de'],
    'creator': {
      '@type': 'Organization',
      'name': 'Calculator World',
      'email': 'gueson1989@gmail.com'
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AdBanner position="top" />

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-6 py-3 rounded-btn font-medium transition-all ${
                activeTab === 'calculator'
                  ? 'bg-primary text-white'
                  : 'bg-white border border-border text-text-secondary hover:bg-bg-tertiary'
              }`}
            >
              {homeText.calculator}
            </button>
            <button
              onClick={() => setActiveTab('converter')}
              className={`px-6 py-3 rounded-btn font-medium transition-all ${
                activeTab === 'converter'
                  ? 'bg-primary text-white'
                  : 'bg-white border border-border text-text-secondary hover:bg-bg-tertiary'
              }`}
            >
              {homeText.unitConverter}
            </button>
          </div>
        </div>

        {activeTab === 'calculator' ? <Calculator /> : <UnitConverter />}
      </div>

      <AdBanner position="bottom" />
    </main>
  );
}

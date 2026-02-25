'use client';

import Calculator from '@/components/calculator/Calculator';
import UnitConverter from '@/components/converter/UnitConverter';
import { useState, useEffect } from 'react';
import { useTranslation } from '@/lib/i18n/LanguageContext';
import Script from 'next/script';
import { languages } from '@/lib/i18n';
import { useParams } from 'next/navigation';

export default function Home() {
  const params = useParams();
  const lang = params.lang as string || 'en';
  const langNames: Record<string, string> = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    de: 'Deutsch'
  };
  const [activeTab, setActiveTab] = useState<'calculator' | 'converter'>('calculator');
  const { t, setLanguage } = useTranslation();
  const homeText = t('home');

  // Set language based on URL parameter
  useEffect(() => {
    if (lang && languages.some(l => l.code === lang)) {
      setLanguage(lang);
    }
  }, [lang, setLanguage]);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Calculator World',
      'url': `https://www.caculator-world.online/${lang}`,
      'logo': 'https://www.caculator-world.online/icon-192.png',
      'contactPoint': {
        '@type': 'ContactPoint',
        'email': 'support@calculatorworld.com',
        'contactType': 'Customer Support'
      },
      'sameAs': [
        'https://www.facebook.com/calculatorworld',
        'https://twitter.com/calculatorworld',
        'https://www.instagram.com/calculatorworld'
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      'name': 'Calculator World',
      'description': `Powerful ${langNames[lang]} calculator with scientific functions, unit conversion, and multi-language support. Free, easy-to-use, and accurate for students, professionals, and everyday use.`,
      'url': `https://www.caculator-world.online/${lang}`,
      'applicationCategory': 'UtilitiesApplication',
      'operatingSystem': 'All',
      'browserRequirements': 'Requires JavaScript. Requires HTML5.',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD',
        'availability': 'https://schema.org/InStock'
      },
      'featureList': [
        'Basic arithmetic calculations',
        'Scientific calculator functions (trigonometry, logarithms, exponents)',
        'Unit conversion tools (length, weight, temperature, area, volume)',
        'Calculation history with local storage',
        'Multi-language support (English, Spanish, French, German)'
      ],
      'inLanguage': [lang],
      'creator': {
        '@type': 'Organization',
        'name': 'Calculator World',
        'url': 'https://www.caculator-world.online'
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.8',
        'reviewCount': '1000',
        'bestRating': '5',
        'worstRating': '1'
      }
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-text-primary mb-4">{homeText.calculator} & {homeText.unitConverter}</h1>
          <p className="text-text-secondary mb-6">A powerful, easy-to-use calculator suite with scientific functions and unit conversion tools. Perfect for students, professionals, and anyone who needs quick and accurate calculations.</p>
        </div>

        <div className="mb-8">
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

        {activeTab === 'calculator' && (
          <div className="mb-8">
            <div className="bg-bg-card rounded-card shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">Calculator Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-text-primary mb-2">Basic Calculations</h3>
                  <p className="text-text-secondary">Perform addition, subtraction, multiplication, and division with ease.</p>
                </div>
                <div>
                  <h3 className="font-medium text-text-primary mb-2">Scientific Functions</h3>
                  <p className="text-text-secondary">Trigonometric functions, logarithms, exponents, and more.</p>
                </div>
                <div>
                  <h3 className="font-medium text-text-primary mb-2">Calculation History</h3>
                  <p className="text-text-secondary">Keep track of your previous calculations and reuse them.</p>
                </div>
                <div>
                  <h3 className="font-medium text-text-primary mb-2">Percentage Calculations</h3>
                  <p className="text-text-secondary">Quickly calculate percentages for taxes, discounts, and more.</p>
                </div>
              </div>
            </div>
            <Calculator />
          </div>
        )}

        {activeTab === 'converter' && (
          <div className="mb-8">
            <div className="bg-bg-card rounded-card shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">Unit Converter Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-medium text-text-primary mb-2">Length</h3>
                  <p className="text-text-secondary">Convert between meters, kilometers, miles, feet, and more.</p>
                </div>
                <div>
                  <h3 className="font-medium text-text-primary mb-2">Weight</h3>
                  <p className="text-text-secondary">Convert between kilograms, grams, pounds, ounces, and more.</p>
                </div>
                <div>
                  <h3 className="font-medium text-text-primary mb-2">Temperature</h3>
                  <p className="text-text-secondary">Convert between Celsius, Fahrenheit, and Kelvin.</p>
                </div>
                <div>
                  <h3 className="font-medium text-text-primary mb-2">Area</h3>
                  <p className="text-text-secondary">Convert between square meters, square feet, acres, and more.</p>
                </div>
                <div>
                  <h3 className="font-medium text-text-primary mb-2">Volume</h3>
                  <p className="text-text-secondary">Convert between liters, gallons, cubic meters, and more.</p>
                </div>
              </div>
            </div>
            <UnitConverter />
          </div>
        )}

        <div className="bg-bg-card rounded-card shadow-md p-6 mt-8">
          <h2 className="text-xl font-semibold text-text-primary mb-4">How to Use</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-text-primary mb-2">Calculator Tips</h3>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Click the &quot;Scientific&quot; button to access advanced functions</li>
                <li>Use the &quot;History&quot; button to view and reuse previous calculations</li>
                <li>Press &quot;C&quot; to clear the current calculation</li>
                <li>Press &quot;DEL&quot; to delete the last character</li>
                <li>Use parentheses for complex expressions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-text-primary mb-2">Unit Converter Tips</h3>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Select the category of units you want to convert</li>
                <li>Choose the input and output units</li>
                <li>Enter the value you want to convert</li>
                <li>The result will be calculated automatically</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

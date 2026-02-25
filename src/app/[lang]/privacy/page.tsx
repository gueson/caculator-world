import type { Metadata } from 'next';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export function generateMetadata({ params }: { params?: Promise<{ lang: string }> }) {
  const lang = 'en';
  const langNames: Record<string, string> = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    de: 'Deutsch'
  };

  return {
    title: `Privacy Policy - Calculator World in ${langNames[lang]}`,
    description: `Comprehensive privacy policy for Calculator World in ${langNames[lang]}. Learn how we collect, use, and protect your personal data in compliance with GDPR and CCPA.`,
    keywords: `privacy policy, data protection, GDPR, CCPA, calculator world, ${langNames[lang]} privacy`,
    canonical: `https://www.caculator-world.online/${lang}/privacy`,
    openGraph: {
      title: `Privacy Policy - Calculator World in ${langNames[lang]}`,
      description: `Comprehensive privacy policy for Calculator World in ${langNames[lang]}.`,
      type: 'article',
      url: `https://www.caculator-world.online/${lang}/privacy`,
      siteName: 'Calculator World',
    },
  };
}

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const commonTranslations = t('common');
  const privacyTitle = commonTranslations.privacy;

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-text-primary mb-6">{privacyTitle}</h1>

          <div className="prose prose-blue max-w-none text-text-secondary">
            <p className="mb-4">Last updated: January 25, 2026</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Introduction</h2>
              <p className="mb-4">At Calculator World, we value your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and safeguard your data when you use our website.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Information We Collect</h2>
              <h3 className="text-lg font-medium text-text-primary mb-2">Automatically Collected Information</h3>
              <p className="mb-4">When you use our website, we may automatically collect certain information about your device and usage:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Device information (model, operating system)</li>
                <li>Browser information (type, version)</li>
                <li>IP address</li>
                <li>Usage data (pages visited, features used)</li>
                <li>Language settings</li>
              </ul>

              <h3 className="text-lg font-medium text-text-primary mb-2">User-Provided Information</h3>
              <p className="mb-4">We may also collect information that you voluntarily provide:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Calculator history (stored locally)</li>
                <li>User preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">How We Use Your Information</h2>
              <p className="mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>To provide and improve our services</li>
                <li>To personalize your experience</li>
                <li>To display relevant advertisements</li>
                <li>To analyze website usage</li>
                <li>To comply with legal requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Data Storage</h2>
              <p className="mb-4">Most of your data is stored locally on your device. We may store some aggregated usage data on our servers to improve our services.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Third-Party Services</h2>
              <p className="mb-4">We may use third-party services to enhance our website:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Google AdMob (for advertisements)</li>
                <li>Google Analytics (for website analytics)</li>
              </ul>
              <p className="mb-4">These third-party services may have their own privacy policies. We encourage you to review them.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Cookies</h2>
              <p className="mb-4">We use cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Your Rights</h2>
              <p className="mb-4">You have certain rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access to your personal data</li>
                <li>Rectification of inaccurate data</li>
                <li>Erasure of your data</li>
                <li>Data portability</li>
                <li>Objection to data processing</li>
                <li>Opt-out of personalized advertising</li>
              </ul>
              <p className="mb-4">To exercise these rights, please contact us using the information below.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Children&apos;s Privacy</h2>
              <p className="mb-4">Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">International Data Transfer</h2>
              <p className="mb-4">Your information may be transferred to and processed in countries other than your own. We take steps to ensure your data is protected.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Changes to This Policy</h2>
              <p className="mb-4">We may update this privacy policy from time to time. We will notify you of any significant changes by posting the updated policy on our website.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Contact Us</h2>
              <p className="mb-4">If you have any questions about this privacy policy, please contact us:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Email: support@calculatorworld.com</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

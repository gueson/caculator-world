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
    title: `Terms of Service - Calculator World in ${langNames[lang]}`,
    description: `Terms of Service for Calculator World in ${langNames[lang]}. Read our comprehensive terms and conditions for using our online calculator and unit converter services.`,
    keywords: `terms of service, terms and conditions, calculator world, online calculator, unit converter, ${langNames[lang]} terms`,
    canonical: `https://www.caculator-world.online/${lang}/terms`,
    openGraph: {
      title: `Terms of Service - Calculator World in ${langNames[lang]}`,
      description: `Terms of Service for Calculator World in ${langNames[lang]}.`,
      type: 'article',
      url: `https://www.caculator-world.online/${lang}/terms`,
      siteName: 'Calculator World',
    },
  };
}

export default function TermsOfService() {
  const { t } = useTranslation();
  const commonTranslations = t('common');
  const termsTitle = commonTranslations.terms;

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-text-primary mb-6">{termsTitle}</h1>

          <div className="prose prose-blue max-w-none text-text-secondary">
            <p className="mb-4">Last updated: January 25, 2026</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Acceptance of Terms</h2>
              <p className="mb-4">By accessing or using Calculator World, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with these terms, please do not use our services.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Service Description</h2>
              <p className="mb-4">Calculator World provides the following services:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Basic calculations (addition, subtraction, multiplication, division)</li>
                <li>Scientific functions (trigonometric, logarithmic, exponential)</li>
                <li>Unit conversion (length, weight, temperature, area, volume)</li>
                <li>Calculation history storage</li>
                <li>Multi-language support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">User Responsibilities</h2>
              <p className="mb-4">As a user of Calculator World, you agree to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Use the service for lawful purposes only</li>
                <li>Not reverse engineer or attempt to extract the source code of the service</li>
                <li>Not access the service in a way that could damage, disable, or impair it</li>
                <li>Respect the intellectual property rights of Calculator World and others</li>
                <li>Not interfere with the proper functioning of the service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Intellectual Property</h2>
              <p className="mb-4">All content and materials on Calculator World, including but not limited to text, graphics, logos, and code, are the property of Calculator World and are protected by intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Accuracy Disclaimer</h2>
              <p className="mb-4">Calculator World strives to provide accurate calculations and conversions. However, we do not guarantee the accuracy, completeness, or reliability of any information or calculations provided through the service.</p>
              <p className="mb-4">You should verify critical calculations independently before making decisions based on them.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Advertising</h2>
              <p className="mb-4">Calculator World may display advertisements from third-party ad networks. By using our service, you agree to the display of these advertisements.</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Advertisements may be displayed throughout the service</li>
                <li>We use third-party ad networks that may collect and use information about your visits to this site and other websites</li>
                <li>Advertisers are responsible for the content of their advertisements</li>
                <li>The display of advertisements does not imply endorsement by Calculator World</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Limitation of Liability</h2>
              <p className="mb-4">Calculator World shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the service.</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>We do not guarantee uninterrupted or error-free access to the service</li>
                <li>We are not responsible for content provided by third parties</li>
                <li>We are not responsible for any damages resulting from information obtained through the service</li>
                <li>We are not responsible for unauthorized access to your account or data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Indemnification</h2>
              <p className="mb-4">You agree to indemnify and hold harmless Calculator World and its affiliates from any claims, damages, losses, or expenses arising from:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Your use of or access to the service</li>
                <li>Your violation of these Terms of Service</li>
                <li>Your violation of any rights of a third party</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Privacy Policy</h2>
              <p className="mb-4">Your use of Calculator World is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Termination</h2>
              <p className="mb-4">Calculator World reserves the right to terminate or suspend your access to the service at any time, without prior notice, for any reason, including but not limited to a violation of these Terms of Service.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Governing Law</h2>
              <p className="mb-4">These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Calculator World operates, without regard to its conflict of law provisions.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Changes to Terms</h2>
              <p className="mb-4">Calculator World may modify these Terms of Service from time to time. We will notify you of any significant changes by posting the updated terms on our website. Your continued use of the service after such changes constitutes your acceptance of the new terms.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">Contact Us</h2>
              <p className="mb-4">If you have any questions about these Terms of Service, please contact us:</p>
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

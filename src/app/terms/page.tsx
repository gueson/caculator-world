import type { Metadata } from 'next';
import AdBanner from '@/components/ads/AdBanner';

export const metadata: Metadata = {
  title: 'Terms of Service - Calculator World',
  description: 'Terms of Service for Calculator World app. Read our terms and conditions.',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen flex flex-col">
      <AdBanner position="top" />

      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-text-primary mb-6">Terms of Service</h1>

          <div className="prose prose-blue max-w-none text-text-secondary">
            <p className="mb-4">Last updated: January 18, 2026</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing or using Calculator World (&quot;the App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the App.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">2. Description of Service</h2>
              <p className="mb-4">
                Calculator World is a free online calculator application that provides:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Basic arithmetic calculations</li>
                <li>Scientific calculator functions</li>
                <li>Unit conversion tools</li>
                <li>Calculation history</li>
                <li>Multi-language support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">3. User Responsibilities</h2>
              <p className="mb-4">As a user of the App, you agree to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Use the App for lawful purposes only</li>
                <li>Not attempt to reverse engineer, modify, or hack the App</li>
                <li>Not use automated tools to access the App excessively</li>
                <li>Respect the intellectual property rights of Calculator World</li>
                <li>Not interfere with the operation of the App</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">4. Intellectual Property</h2>
              <p className="mb-4">
                Calculator World and its entire contents, features, and functionality are owned by Calculator World and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">5. Accuracy of Calculations</h2>
              <p className="mb-4">
                While we strive to provide accurate calculations, Calculator World does not guarantee the accuracy, completeness, or reliability of any calculation results. You should verify important calculations independently.
              </p>
              <p className="mb-4">
                <strong>Disclaimer:</strong> Calculator World is not responsible for any errors or losses resulting from the use of calculation results.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">6. Advertising</h2>
              <p className="mb-4">
                Calculator World is a free service supported by advertising. By using the App, you acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Advertisements may be displayed within the App</li>
                <li>We may use third-party advertising networks (e.g., Google AdMob)</li>
                <li>Third-party advertisers are responsible for their ad content</li>
                <li>We do not endorse any advertised products or services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">7. Limitation of Liability</h2>
              <p className="mb-4">
                To the fullest extent permitted by law, Calculator World shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Your access or use of or inability to access or use the App</li>
                <li>Any conduct or content of any third party on the App</li>
                <li>Any content obtained from the App</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">8. Indemnification</h2>
              <p className="mb-4">
                You agree to indemnify and hold harmless Calculator World, its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney&apos;s fees), resulting from or arising out of:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Your use and access of the App</li>
                <li>Your violation of any term of these Terms</li>
                <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">9. Privacy Policy</h2>
              <p className="mb-4">
                Your use of the App is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the App and informs users of our data collection practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">10. Termination</h2>
              <p className="mb-4">
                Calculator World reserves the right, in its sole discretion, to terminate or suspend your access to the App for any reason, including but not limited to breach of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">11. Governing Law</h2>
              <p className="mb-4">
                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">12. Changes to Terms</h2>
              <p className="mb-4">
                Calculator World reserves the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page. Your continued use of the App after such modifications constitutes your acceptance of the updated Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">13. Contact Us</h2>
              <p className="mb-4">If you have any questions about these Terms of Service, please contact us:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Email: y_xk199@126.com</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <AdBanner position="bottom" />
    </main>
  );
}

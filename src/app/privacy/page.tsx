import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Calculator World',
  description: 'Privacy Policy for Calculator World app. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-text-primary mb-6">Privacy Policy</h1>

          <div className="prose prose-blue max-w-none text-text-secondary">
            <p className="mb-4">Last updated: January 18, 2026</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">1. Introduction</h2>
              <p className="mb-4">
                Calculator World (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our calculator application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">2. Information We Collect</h2>
              <h3 className="text-lg font-medium text-text-primary mb-2">2.1 Automatically Collected Information</h3>
              <p className="mb-4">
                We may automatically collect certain information about your device and usage of our app, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Device type and operating system</li>
                <li>Browser type and version</li>
                <li>IP address</li>
                <li>Usage data and preferences</li>
                <li>Language settings</li>
              </ul>

              <h3 className="text-lg font-medium text-text-primary mb-2">2.2 Information You Provide</h3>
              <p className="mb-4">
                We collect information you voluntarily provide, such as:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Calculator history (stored locally on your device)</li>
                <li>Theme and language preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">3. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>To provide and improve our services</li>
                <li>To personalize your experience (language, theme preferences)</li>
                <li>To display relevant advertisements</li>
                <li>To analyze usage patterns and app performance</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">4. Data Storage and Security</h2>
              <p className="mb-4">
                Calculator history is stored locally on your device and is not transmitted to our servers. We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">5. Third-Party Services</h2>
              <p className="mb-4">Our app may use third-party services, including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Google AdMob:</strong> For displaying advertisements</li>
                <li><strong>Analytics Services:</strong> For usage analytics and performance monitoring</li>
              </ul>
              <p className="mb-4">
                These third parties may collect information about your use of our app. Please review their privacy policies for more details.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">6. Cookies</h2>
              <p className="mb-4">
                We use cookies and similar technologies to enhance your experience, remember your preferences, and serve relevant advertisements. You can manage your cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">7. Your Rights (GDPR/CCPA)</h2>
              <p className="mb-4">Under GDPR and CCPA, you have the following rights:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
                <li><strong>Right to Opt-Out:</strong> Opt-out of data collection (CCPA)</li>
              </ul>
              <p className="mb-4">
                To exercise these rights, please contact us at: gueson1989@gmail.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">8. Children&apos;s Privacy</h2>
              <p className="mb-4">
                Our app is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take immediate steps to delete the information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">9. International Data Transfers</h2>
              <p className="mb-4">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with GDPR requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">10. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. Your continued use of the app after such modifications constitutes your acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-3">11. Contact Us</h2>
              <p className="mb-4">If you have any questions or concerns about this Privacy Policy, please contact us:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Email: gueson1989@gmail.com</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  const cookieText = t('cookieConsent');

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-text-secondary">
              {cookieText.message}{' '}
              <a href="/privacy" className="text-primary hover:underline">
                {cookieText.privacyPolicy}
              </a>.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {t('common').reject}
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 text-sm bg-primary hover:bg-primary-hover text-white rounded-btn transition-colors"
            >
              {t('common').accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

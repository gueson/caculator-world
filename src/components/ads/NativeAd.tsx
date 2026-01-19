'use client';

import { useTranslation } from '@/lib/i18n/LanguageContext';

export default function NativeAd() {
  const { t } = useTranslation();
  const adText = t('ads');

  return (
    <div className="bg-bg-tertiary rounded-btn p-4 border border-border hover:bg-gray-200 transition-colors cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-white rounded-btn flex items-center justify-center shadow-sm">
          <span className="text-2xl">📱</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-text-primary text-sm">{adText.sponsored}</h3>
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">{adText.ad}</span>
          </div>
          <p className="text-xs text-text-secondary">
            {adText.description}
          </p>
        </div>
      </div>
    </div>
  );
}

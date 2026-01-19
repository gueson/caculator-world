'use client';

import { useTranslation } from '@/lib/i18n/LanguageContext';

interface HistoryPanelProps {
  history: Array<{ expression: string; result: string }>;
  onClear: () => void;
}

export default function HistoryPanel({ history, onClear }: HistoryPanelProps) {
  const { t } = useTranslation();
  const calcText = t('calculator');

  if (history.length === 0) {
    return (
      <div className="bg-bg-card rounded-card shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-text-primary">{calcText.history}</h2>
          <button
            onClick={onClear}
            className="text-sm text-error hover:text-red-600 transition-colors"
          >
            {calcText.clear}
          </button>
        </div>
        <p className="text-text-secondary text-sm">{calcText.noHistory}</p>
      </div>
    );
  }

  return (
    <div className="bg-bg-card rounded-card shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-text-primary">{calcText.history}</h2>
        <button
          onClick={onClear}
          className="text-sm text-error hover:text-red-600 transition-colors"
        >
          {calcText.clear}
        </button>
      </div>
      <div className="space-y-3 max-h-[500px] overflow-y-auto">
        {history.map((item, index) => (
          <div
            key={index}
            className="bg-bg-tertiary rounded-btn p-3 hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <div className="text-right text-text-tertiary text-sm truncate">
              {item.expression}
            </div>
            <div className="text-right text-text-primary font-mono text-lg">
              {item.result}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

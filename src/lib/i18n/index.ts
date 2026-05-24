import en from './en.json';
import es from './es.json';
import fr from './fr.json';
import de from './de.json';
import zh from './zh.json';

export type Translations = typeof en;

export const translations: Record<string, Translations> = {
  en,
  es,
  fr,
  de,
  zh,
};

export const languages = [
  { code: 'en', label: '🇺🇸 EN', name: 'English' },
  { code: 'es', label: '🇪🇸 ES', name: 'Español' },
  { code: 'fr', label: '🇫🇷 FR', name: 'Français' },
  { code: 'de', label: '🇩🇪 DE', name: 'Deutsch' },
  { code: 'zh', label: '🇨🇳 中文', name: '中文' },
];

export const defaultLanguage = 'en';

export type TranslationKey = keyof Translations;

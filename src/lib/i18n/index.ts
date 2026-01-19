import en from './en.json';
import es from './es.json';
import fr from './fr.json';
import de from './de.json';

export type Translations = typeof en;

export const translations: Record<string, Translations> = {
  en,
  es,
  fr,
  de,
};

export const languages = [
  { code: 'en', label: '🇺🇸 EN', name: 'English' },
  { code: 'es', label: '🇪🇸 ES', name: 'Español' },
  { code: 'fr', label: '🇫🇷 FR', name: 'Français' },
  { code: 'de', label: '🇩🇪 DE', name: 'Deutsch' },
];

export const defaultLanguage = 'en';

export type TranslationKey = keyof Translations;

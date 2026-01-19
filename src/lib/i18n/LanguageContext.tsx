'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, defaultLanguage, Translations, TranslationKey } from './index';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: <K extends TranslationKey>(key: K) => Translations[K];
  currentTranslations: Translations;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState(defaultLanguage);
  const [currentTranslations, setCurrentTranslations] = useState<Translations>(translations[defaultLanguage]);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || defaultLanguage;
    setLanguage(savedLang);
    setCurrentTranslations(translations[savedLang]);
  }, []);

  const handleSetLanguage = (lang: string) => {
    setLanguage(lang);
    setCurrentTranslations(translations[lang]);
    localStorage.setItem('language', lang);
  };

  const t = <K extends TranslationKey>(key: K): Translations[K] => {
    return currentTranslations[key] || translations[defaultLanguage][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, currentTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}

'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from '@/lib/i18n/LanguageContext';
import { languages } from '@/lib/i18n';

export default function Navbar() {
  const { language, setLanguage, t } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    
    // Navigate to the new language version
    if (pathname.startsWith('/en') || pathname.startsWith('/es') || pathname.startsWith('/fr') || pathname.startsWith('/de') || pathname.startsWith('/zh')) {
      // Replace the language part in the URL
      const newPathname = pathname.replace(/^\/(en|es|fr|de|zh)/, `/${newLang}`);
      router.push(newPathname);
    } else {
      // If on root, redirect to the new language version
      router.push(`/${newLang}`);
    }
  };

  return (
    <nav className="bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-[60px]">
          <Link href="/en" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-semibold text-text-primary">{t('navbar').title}</span>
          </Link>

          <div className="flex items-center gap-4">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="px-3 py-2 border border-border rounded-btn text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

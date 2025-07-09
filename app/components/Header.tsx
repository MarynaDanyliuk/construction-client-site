'use client';

import Link from 'next/link';
import {
  Home,
  Info,
  Briefcase,
  Hammer,
  Phone,
  Newspaper,
} from 'lucide-react';
import type { Dictionary } from '../dictionaries/types';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import MobileMenu from './MobileMenu';

type HeaderProps = {
  locale: 'uk' | 'en';
  t: Dictionary;
};

export default function Header({ locale, t }: HeaderProps) {
  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
      {/* <Link href={`/${locale}`} className="text-xl font-bold">
        {t.siteName}
      </Link> */}

      <Link href={`/${locale}`} className="flex items-center gap-2">
  <img
    src="/logo.png"
    alt="Логотип"
    className="w-10 h-10 object-contain"
  />
  <span className="text-xl font-bold">{t.siteName}</span>
</Link>

      <nav className="flex gap-4 items-center">
        {/* бургер на мобілках */}
        <div className="block md:hidden">
          <MobileMenu locale={locale} t={t} />
        </div>

        {/* класична навігація на md+ */}
        <div className="hidden md:flex gap-4 items-center">
          <Link href={`/${locale}`} className="flex flex-col items-center">
            <Home size={20} className="block lg:hidden" />
            <span className="hidden lg:block">{t.home}</span>
          </Link>

          <Link href={`/${locale}/about`} className="flex flex-col items-center">
            <Info size={20} className="block lg:hidden" />
            <span className="hidden lg:block">{t.about.title}</span>
          </Link>

          <Link href={`/${locale}/portfolio`} className="flex flex-col items-center">
            <Briefcase size={20} className="block lg:hidden" />
            <span className="hidden lg:block">{t.cases}</span>
          </Link>

          <Link href={`/${locale}/services`} className="flex flex-col items-center">
            <Hammer size={20} className="block lg:hidden" />
            <span className="hidden lg:block">{t.services.title}</span>
          </Link>

          <Link href={`/${locale}/contacts`} className="flex flex-col items-center">
            <Phone size={20} className="block lg:hidden" />
            <span className="hidden lg:block">{t.contacts.title}</span>
          </Link>

          {/* 🔥 Новий пункт меню — Блог */}
          <Link href={`/${locale}/blog`} className="flex flex-col items-center">
            <Newspaper size={20} className="block lg:hidden" />
            <span className="hidden lg:block">{t.blog.title}</span>
          </Link>

          {/* мова і тема — після меню на md+ */}
          <LanguageToggle currentLocale={locale} />
          <ThemeToggle currentLocale={locale} />
        </div>

        {/* мова і тема — на мобілках окремо */}
        <div className="flex md:hidden gap-4">
          <LanguageToggle currentLocale={locale} />
          <ThemeToggle currentLocale={locale} />
        </div>
      </nav>
    </header>
  );
}
import Link from 'next/link';
import { Home, Info, Briefcase, Hammer, Phone, Languages } from 'lucide-react';
import type { Dictionary } from '../dictionaries/types';

type HeaderProps = {
  locale: 'uk' | 'en';
  t: Dictionary;
};

export default function Header({ locale, t }: HeaderProps) {
  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-200">
      <h1 className="text-xl font-bold">{t.siteName}</h1>
      <nav className="flex gap-4 items-center">
        <Link href={`/${locale}`} className="flex flex-col items-center">
          <Home size={20} />
          <span className="hidden md:block">{t.home}</span>
        </Link>
        <Link href={`/${locale}/about`} className="flex flex-col items-center">
          <Info size={20} />
          <span className="hidden md:block">{t.about.title}</span>
        </Link>
        <Link href={`/${locale}/cases`} className="flex flex-col items-center">
          <Briefcase size={20} />
          <span className="hidden md:block">{t.cases}</span>
        </Link>
        <Link href={`/${locale}/services`} className="flex flex-col items-center">
          <Hammer size={20} />
          <span className="hidden md:block">{t.services.title}</span>
        </Link>
        <Link href={`/${locale}/contact`} className="flex flex-col items-center">
          <Phone size={20} />
          <span className="hidden md:block">{t.contact.title}</span>
        </Link>
        {locale === 'uk' ? (
          <Link href="/en" className="flex flex-col items-center">
            <Languages size={20} />
            <span className="hidden md:block">EN</span>
          </Link>
        ) : (
          <Link href="/uk" className="flex flex-col items-center">
            <Languages size={20} />
            <span className="hidden md:block">UK</span>
          </Link>
        )}
      </nav>
    </header>
  );
}

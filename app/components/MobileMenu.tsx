'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Home, Info, Briefcase, Hammer, Phone } from 'lucide-react';
import type { Dictionary } from '../dictionaries/types';

type MobileMenuProps = {
  locale: 'uk' | 'en';
  t: Dictionary;
};

export default function MobileMenu({ locale, t }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 focus:outline-none transition-transform duration-300"
        aria-label="Toggle menu"
      >
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? 'rotate-90' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      <div
        className={`
          absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded border border-gray-200 dark:border-gray-700 z-50
          transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
        `}
      >
        <nav className="flex flex-col text-left p-2">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <Home size={16} />
            {t.home}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <Info size={16} />
            {t.about.title}
          </Link>
          <Link
            href={`/${locale}/cases`}
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <Briefcase size={16} />
            {t.cases}
          </Link>
          <Link
            href={`/${locale}/services`}
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <Hammer size={16} />
            {t.services.title}
          </Link>
          <Link
            href={`/${locale}/contacts`}
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={16} />
            {t.contact.title}
          </Link>
        </nav>
      </div>
    </div>
  );
}

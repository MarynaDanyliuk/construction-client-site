'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Home,
  Info,
  Briefcase,
  Hammer,
  Phone,
  X,
  Newspaper,
} from 'lucide-react';
import type { Dictionary } from '../dictionaries/types';

type MobileMenuProps = {
  locale: 'uk' | 'en';
  t: Dictionary;
};

export default function MobileMenu({ locale, t }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`p-2 focus:outline-none relative z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-label="Open menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className={`fixed inset-0 z-40 ${isOpen ? 'block' : 'hidden'}`}>
        <div
          className="absolute inset-0 bg-black/10 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>

        <div
          className={`
            fixed top-0 left-0 h-full w-2/3
            bg-white dark:bg-gray-900 shadow-lg
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            flex flex-col gap-4 p-6 pt-16
            text-gray-900 dark:text-white z-50
          `}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          <nav className="flex flex-col gap-4 w-full text-left">
            {[
              { href: `/${locale}`, label: t.home, icon: <Home size={20} /> },
              { href: `/${locale}/about`, label: t.about.title, icon: <Info size={20} /> },
              { href: `/${locale}/portfolio`, label: t.cases, icon: <Briefcase size={20} /> },
              { href: `/${locale}/services`, label: t.services.title, icon: <Hammer size={20} /> },
              { href: `/${locale}/contacts`, label: t.contacts.title, icon: <Phone size={20} /> },
              // 🆕 Додано блог
              { href: `/${locale}/blog`, label: t.blog.title, icon: <Newspaper size={20} /> },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Home, Info, Briefcase, Hammer, Phone, X } from 'lucide-react';
import type { Dictionary } from '../dictionaries/types';

type MobileMenuProps = {
  locale: 'uk' | 'en';
  t: Dictionary;
};

export default function MobileMenu({ locale, t }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 focus:outline-none relative z-50"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* бекдроп */}
      <div
        className={`
          fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* full height, 2/3 width */}
      <div
        className={`
          fixed top-0 left-0 w-2/3 h-full bg-white dark:bg-gray-900 z-40
          flex flex-col items-start p-6 gap-4
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <nav className="flex flex-col gap-4 w-full text-left mt-16 text-gray-900 dark:text-white">
          {[
            {
              href: `/${locale}`,
              label: t.home,
              icon: <Home size={20} />,
            },
            {
              href: `/${locale}/about`,
              label: t.about.title,
              icon: <Info size={20} />,
            },
            {
              href: `/${locale}/cases`,
              label: t.cases,
              icon: <Briefcase size={20} />,
            },
            {
              href: `/${locale}/services`,
              label: t.services.title,
              icon: <Hammer size={20} />,
            },
            {
              href: `/${locale}/contacts`,
              label: t.contact.title,
              icon: <Phone size={20} />,
            },
          ].map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-2 text-lg
                transform transition duration-500
                ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}
                delay-[${index * 100}ms]
              `}
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

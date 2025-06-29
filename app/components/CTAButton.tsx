'use client';

import Link from 'next/link';
import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type CTAButtonProps = {
  href: string;
  label: string;
  icon?: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
};

const CTAButton: FC<CTAButtonProps> = ({
  href,
  label,
  icon,
  variant = 'primary',
  className = '',
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 ease-out transform hover:scale-105 active:scale-95 hover:brightness-110 shadow-md hover:shadow-xl motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-in-out';

  const variants: Record<string, string> = {
    primary:
      'relative overflow-hidden bg-yellow-500 hover:bg-yellow-450 text-white font-medium px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base tracking-tight rounded-full transition-transform duration-200 ease-in-out transform hover:scale-104 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 after:content-[""] after:absolute after:bg-white/30 after:rounded-full after:scale-0 after:opacity-0 after:transition-transform after:duration-700 active:after:scale-150 active:after:opacity-100',
    outline:
      'relative overflow-hidden bg-transparent border border-yellow-500 text-yellow-600 font-medium px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base tracking-tight rounded-full transition-transform duration-200 ease-in-out hover:bg-yellow-100 hover:text-yellow-700 hover:scale-104 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 after:content-[""] after:absolute after:bg-yellow-400/30 after:rounded-full after:scale-0 after:opacity-0 after:transition-transform after:duration-700 active:after:scale-150 active:after:opacity-100',

    ghost:
      'relative overflow-hidden bg-transparent text-yellow-600 font-medium px-4 py-2.5 text-sm sm:text-base rounded-full hover:text-yellow-700 hover:bg-yellow-50 transition-transform duration-200 ease-in-out hover:scale-104 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 after:content-[""] after:absolute after:bg-yellow-300/30 after:rounded-full after:scale-0 after:opacity-0 after:transition-transform after:duration-700 active:after:scale-150 active:after:opacity-100',
  };

  return (
    <Link href={href} className={clsx(baseStyles, variants[variant], className)}>
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </Link>
  );
};

export default CTAButton;

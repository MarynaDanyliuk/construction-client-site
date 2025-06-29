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
    primary: 'bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-base sm:text-lg',
    outline:
      'border border-yellow-600 text-yellow-700 hover:bg-yellow-50 px-6 py-3 text-sm sm:text-base',
    ghost: 'text-yellow-600 hover:underline px-4 py-2 text-sm',
  };

  return (
    <Link href={href} className={clsx(baseStyles, variants[variant], className)}>
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </Link>
  );
};

export default CTAButton;

'use client';

import { usePathname, useRouter } from 'next/navigation';

type Props = {
  currentLocale: 'uk' | 'en';
};

export default function LanguageToggle({ currentLocale }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = () => {
    const segments = pathname.split('/');
    segments[1] = currentLocale === 'uk' ? 'en' : 'uk';
    const newPath = segments.join('/') || '/';
    router.push(newPath);
  };

  return (
    <div className="flex gap-2 items-center">
      <button onClick={switchLocale} className="text-sm font-semibold" aria-label="Switch language">
        {currentLocale === 'uk' ? 'EN' : 'UK'}
      </button>
    </div>
  );
}

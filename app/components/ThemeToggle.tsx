'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

type Props = {
  currentLocale: 'uk' | 'en';
};

export default function ThemeToggle({ currentLocale }: Props) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <button onClick={toggleTheme} aria-label="Toggle theme">
        {isDark ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </div>
  );
}

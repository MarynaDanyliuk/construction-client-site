'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    document.documentElement.classList.toggle('dark', theme);
    setIsDark(theme);
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.theme = next ? 'dark' : 'light';
  };

  if (!isMounted) {
    // Щоб уникнути гідраційного конфлікту
    return (
      <button
        className="px-3 py-1 rounded bg-gray-200 text-transparent dark:bg-gray-700 transition-colors duration-300"
        aria-hidden="true"
      >
        ...
      </button>
      //   <button
      //     onClick={toggleTheme}
      //     className={`px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 transition-colors duration-300
      //       ${isMounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      //   >
      //     {isDark ? '🌙 Dark' : '☀️ Light'}
      //   </button>
    );
  }

  return (
    <button onClick={toggleTheme} className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700">
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}

// 'use client';

// import { useEffect, useState } from 'react';

// export default function ThemeToggle() {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     if (
//       localStorage.theme === 'dark' ||
//       (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
//     ) {
//       document.documentElement.classList.add('dark');
//       setIsDark(true);
//     } else {
//       document.documentElement.classList.remove('dark');
//       setIsDark(false);
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (isDark) {
//       document.documentElement.classList.remove('dark');
//       localStorage.theme = 'light';
//       setIsDark(false);
//     } else {
//       document.documentElement.classList.add('dark');
//       localStorage.theme = 'dark';
//       setIsDark(true);
//     }
//   };

//   return (
//     <button onClick={toggleTheme} className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700">
//       {isDark ? '🌙 Dark' : '☀️ Light'}
//     </button>
//   );
// }

// 'use client';

// import { useEffect, useState } from 'react';

// export default function ThemeToggle() {
//   const [isDark, setIsDark] = useState<boolean | null>(null); // 🟡 Спочатку невідомо

//   useEffect(() => {
//     const theme =
//       localStorage.theme === 'dark' ||
//       (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

//     setIsDark(theme);
//     document.documentElement.classList.toggle('dark', theme);
//   }, []);

//   if (isDark === null) return null; // ⏳ Не рендеримо кнопку поки не знаємо тему

//   const toggleTheme = () => {
//     const next = !isDark;
//     setIsDark(next);
//     document.documentElement.classList.toggle('dark', next);
//     localStorage.theme = next ? 'dark' : 'light';
//   };

//   return (
//     <button onClick={toggleTheme} className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700">
//       {isDark ? '🌙 Dark' : '☀️ Light'}
//     </button>
//   );
// }

// 'use client';

// import { useEffect, useState } from 'react';

// export default function ThemeToggle() {
//   const [isDark, setIsDark] = useState(() => {
//     // 🧠 Рендер відразу з урахуванням теми, якщо це вже клієнт
//     if (typeof window !== 'undefined') {
//       return (
//         localStorage.theme === 'dark' ||
//         (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
//       );
//     }
//     return false; // ⬅️ Не null, щоб уникнути "дірки" в рендері
//   });

//   useEffect(() => {
//     // 🔄 Синхронізуємо стан, якщо щось змінилось
//     const theme =
//       localStorage.theme === 'dark' ||
//       (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

//     setIsDark(theme);
//     document.documentElement.classList.toggle('dark', theme);
//   }, []);

//   const toggleTheme = () => {
//     const next = !isDark;
//     setIsDark(next);
//     document.documentElement.classList.toggle('dark', next);
//     localStorage.theme = next ? 'dark' : 'light';
//   };

//   return (
//     <button onClick={toggleTheme} className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700">
//       {isDark ? '🌙 Dark' : '☀️ Light'}
//     </button>
//   );
// }

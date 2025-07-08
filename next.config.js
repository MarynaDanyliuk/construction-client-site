/** @type {import('next').NextConfig} */
const nextConfig = {
  // Інші параметри (за потреби додай сюди)
  typescript: {
    ignoreBuildErrors: false,
  },
  experimental: {
    // сюди можна додавати лише дійсні експериментальні опції
    // наприклад: serverActions: true
  },
};

export default nextConfig;

// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {};

// export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   i18n: {
//     locales: ["uk", "en"], // Використовуємо міжнародні коди мов
//     defaultLocale: "uk",
//     localeDetection: true,
//   },
//   images: {
//     domains: ["construction-client-site.vercel.app"],
//   },
//   reactStrictMode: true,
//   experimental: {
//     typedRoutes: true, // Якщо ти хочеш використовувати типізовані маршрути
//   },
// };

// export default nextConfig;

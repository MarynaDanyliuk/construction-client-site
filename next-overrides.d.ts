// next-overrides.d.ts
declare module 'next/app' {
  interface AppProps {
    params: { locale: 'uk' | 'en' };
  }
}
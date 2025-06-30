import 'next';

declare module 'next' {
  interface PageProps {
    params: { locale: 'uk' | 'en' };
  }
}
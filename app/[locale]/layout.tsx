import { ReactNode } from 'react';
import { getDictionary } from '../dictionaries';
import '../globals.css';

import MetaHead from '../components/MetaHead';
import StructuredData from '../components/StructuredData';
import OrganizationSchema from '../components/OrganizationSchema';
import Header from '../components/Header';

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Служба замовника',
  url: 'https://construction-client-site.vercel.app',
  inLanguage: ['uk', 'en'],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: 'uk' | 'en' }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <>
      {/* 🌐 Альтернативні посилання для SEO */}
      <MetaHead title={t.metaTitle} description={t.metaDescription} localeCode={locale} />

      {/* 📦 Структуровані дані */}
      <StructuredData data={websiteSchema} scriptKey="site-schema" />
      <OrganizationSchema />

      <div>
        <Header locale={locale} t={t} />
        <main className="min-h-[80vh]">{children}</main>
        <footer className="p-6 text-center text-gray-500 border-t border-gray-200">
          © {year} {t.siteName}
        </footer>
      </div>
    </>
  );
}

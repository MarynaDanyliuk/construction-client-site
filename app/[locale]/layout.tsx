import { ReactNode } from 'react';
import { getDictionary } from '../dictionaries';

import '../globals.css';
import { inter, playfair } from '../fonts';

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

// 🧭 Ось тут — ключ до синхронного params
export function generateStaticParams() {
  return [{ locale: 'uk' }, { locale: 'en' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: 'uk' | 'en' } | Promise<{ locale: 'uk' | 'en' }>;
}) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const year = new Date().getFullYear();

  console.log("params in layout", params)

  return (
    <>
      <MetaHead title={t.metaTitle} description={t.metaDescription} localeCode={locale} />
      <StructuredData data={websiteSchema} scriptKey="site-schema" />
      <OrganizationSchema />
      <div className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Header locale={locale} t={t} />
        <main className="min-h-[80vh]">{children}</main>
        <footer className="p-6 text-center text-gray-500 border-t border-gray-200">
          © {year} {t.siteName}
        </footer>
      </div>
    </>
  );
}



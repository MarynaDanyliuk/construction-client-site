import { ReactNode } from 'react';
// import { dictionaries } from "../../dictionaries";
import { getDictionary } from '../dictionaries/index';
import Link from 'next/link';
import '../globals.css';

import MetaHead from '../components/MetaHead';
import StructuredData from '../components/StructuredData';
import OrganizationSchema from '../components/OrganizationSchema';
import Head from 'next/head';

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

  const resolvedParams = await params;
  const t = await getDictionary(resolvedParams.locale);

  const baseUrl = 'https://construction-client-site.vercel.app';
  const url = `${baseUrl}/${locale}`;
  const year = new Date().getFullYear();

  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="uk" href="https://construction-client-site.vercel.app/uk" />
        <link rel="alternate" hrefLang="en" href="https://construction-client-site.vercel.app/en" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://construction-client-site.vercel.app"
        />
      </Head>
      {/* ✅ Мета-теги */}
      <MetaHead
        title={t.metaTitle}
        description={t.metaDescription}
        url={url}
        locale={locale === 'uk' ? 'uk_UA' : 'en_US'}
      />
      {/* ✅ Структуровані дані */}
      <StructuredData data={websiteSchema} scriptKey="site-schema" />
      <OrganizationSchema />

      <div>
        <header className="flex justify-between p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold">{t.siteName}</h1>
          <nav className="space-x-4">
            <Link href={`/${locale}`}>{t.home}</Link>
            <Link href={`/${locale}/cases`}>{t.cases}</Link>
            {locale === 'uk' ? <Link href="/en">EN</Link> : <Link href="/uk">UK</Link>}
          </nav>
        </header>

        <main className="min-h-[80vh]">{children}</main>

        <footer className="p-6 text-center text-gray-500 border-t border-gray-200">
          © {year} {t.siteName}
        </footer>
      </div>
    </>
  );
}

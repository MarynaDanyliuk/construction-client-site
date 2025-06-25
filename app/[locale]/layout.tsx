import { ReactNode } from "react";
import { dictionaries } from "../../dictionaries";
import { getDictionary } from "../dictionaries/index";
import Link from "next/link";
import "../globals.css";

import MetaHead from "../components/MetaHead";
import StructuredData from "../components/StructuredData";
import OrganizationSchema from "../components/OrganizationSchema";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Служба замовника",
  url: "https://construction-client-site-9z5w.vercel.app",
  inLanguage: ["uk", "en"],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: "ua" | "en" }>;
}) {
  const { locale } = await params;

  const resolvedParams = await params;
  const t = await getDictionary(resolvedParams.locale);

  const baseUrl = "https://construction-client-site-9z5w.vercel.app";
  const url = `${baseUrl}/${locale}`;
  const year = new Date().getFullYear();

  return (
    <html lang={locale}>
      <body>
        {/* ✅ Мета-теги */}
        <MetaHead
          title={t.metaTitle}
          description={t.metaDescription}
          url={url}
          locale={locale === "ua" ? "uk_UA" : "en_US"}
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
              {locale === "ua" ? (
                <Link href="/en">EN</Link>
              ) : (
                <Link href="/ua">UA</Link>
              )}
            </nav>
          </header>

          <main className="min-h-[80vh]">{children}</main>

          <footer className="p-6 text-center text-gray-500 border-t border-gray-200">
            © {year} {t.siteName}
          </footer>
        </div>
      </body>
    </html>
  );
}

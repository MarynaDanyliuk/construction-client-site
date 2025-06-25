import { ReactNode } from "react";
import { dictionaries } from "../../dictionaries";
import Link from "next/link";
import "../globals.css";

import StructuredData from "../components/StructuredData";
import OrganizationSchema from "../components/OrganizationSchema";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Служба замовника",
  url: "https://construction-client-site-9z5w.vercel.app",
  inLanguage: ["uk", "en"],
};
// const schemaData = {
//   "@context": "https://schema.org",
//   "@type": "WebSite",
//   name: "Мій сайт",
//   url: "https://example.com",
//   potentialAction: {
//     "@type": "SearchAction",
//     target: "https://example.com/search?q={search_term_string}",
//     "query-input": "required name=search_term_string",
//   },
// };

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: "ua" | "en" }>;
}) {
  const { locale } = await params;

  const t =
    dictionaries[locale as keyof typeof dictionaries] ?? dictionaries.ua;

  const year = new Date().getFullYear();

  return (
    <div lang={locale}>
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
    </div>
  );
}

import { ReactNode } from "react";
import { dictionaries } from "../../dictionaries";
import Link from "next/link";
import "../globals.css";

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

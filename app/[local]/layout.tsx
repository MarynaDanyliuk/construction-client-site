import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { dictionaries } from "../../dictionaries";
import "../../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;
  const t =
    dictionaries[locale as keyof typeof dictionaries] || dictionaries.ua;

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-800`}
      >
        <header className="flex justify-between items-center p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">{t.siteName}</h1>
          <nav className="space-x-4">
            <Link href={`/${locale}`} className="hover:underline">
              {t.home}
            </Link>
            <Link href={`/${locale}/cases`} className="hover:underline">
              {t.cases}
            </Link>
            {locale === "ua" ? (
              <Link
                href="/en"
                className="ml-4 text-gray-600 hover:text-gray-900"
              >
                EN
              </Link>
            ) : (
              <Link
                href="/ua"
                className="ml-4 text-gray-600 hover:text-gray-900"
              >
                UA
              </Link>
            )}
          </nav>
        </header>

        <main className="min-h-[80vh]">{children}</main>

        <footer className="p-6 text-center text-gray-500 border-t border-gray-200">
          © {new Date().getFullYear()} {t.siteName}
        </footer>
      </body>
    </html>
  );
}

// import Link from "next/link";
// import { Geist, Geist_Mono } from "next/font/google";
// import { dictionaries } from "../../dictionaries";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function LocaleLayout({
//   children,
//   params,
// }: {
//   children: React.ReactNode;
//   params: { locale: string };
// }) {
//   const locale = params.locale;
//   const t =
//     dictionaries[locale as keyof typeof dictionaries] || dictionaries.ua;

//   return (
//     <html lang={locale}>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-800 font-sans`}
//       >
//         <header className="flex justify-between items-center p-6 border-b border-gray-200">
//           <h1 className="text-xl font-bold text-gray-900">{t.siteName}</h1>
//           <nav className="space-x-4">
//             <Link href={`/${locale}`}>{t.home}</Link>
//             <Link href={`/${locale}/cases`}>{t.cases}</Link>
//             {locale === "ua" ? (
//               <Link
//                 href={`/en`}
//                 className="ml-4 text-gray-600 hover:text-gray-900"
//               >
//                 EN
//               </Link>
//             ) : (
//               <Link
//                 href={`/ua`}
//                 className="ml-4 text-gray-600 hover:text-gray-900"
//               >
//                 UA
//               </Link>
//             )}
//           </nav>
//         </header>
//         <main>{children}</main>
//         <footer className="p-6 text-center text-gray-500 border-t border-gray-200">
//           © {new Date().getFullYear()} {t.siteName}
//         </footer>
//       </body>
//     </html>
//   );
// }

// import { ReactNode } from "react";
// import Link from "next/link";
// import { dictionaries } from "../../dictionaries";

// export default function LocaleLayout({
//   children,
//   params,
// }: {
//   children: ReactNode;
//   params: { locale: string };
// }) {
//   const locale = params.locale;
//   const t =
//     dictionaries[locale as keyof typeof dictionaries] || dictionaries.ua;

//   return (
//     <html lang={locale}>
//       <body className="bg-white text-gray-800 font-sans min-h-screen">
//         <header className="flex justify-between items-center p-6 border-b border-gray-200">
//           <h1 className="text-xl font-bold text-gray-900">{t.siteName}</h1>
//           <nav className="space-x-4">
//             <Link href={`/${locale}`}>{t.home}</Link>
//             <Link href={`/${locale}/cases`}>{t.cases}</Link>
//             {/* Перемикач мов */}
//             {locale === "ua" ? (
//               <Link
//                 href={`/en`}
//                 className="ml-4 text-gray-600 hover:text-gray-900"
//               >
//                 EN
//               </Link>
//             ) : (
//               <Link
//                 href={`/ua`}
//                 className="ml-4 text-gray-600 hover:text-gray-900"
//               >
//                 UA
//               </Link>
//             )}
//           </nav>
//         </header>
//         <main>{children}</main>
//         <footer className="p-6 text-center text-gray-500 border-t border-gray-200">
//           © {new Date().getFullYear()} {t.siteName}
//         </footer>
//       </body>
//     </html>
//   );
// }

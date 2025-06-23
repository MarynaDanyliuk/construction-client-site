import { getDictionary } from "../dictionaries/index";
// import type { Dictionary } from "../dictionaries/types";

type Props = {
  params: Promise<{ locale: "ua" | "en" }>;
};

export default async function Home({ params }: Props) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getDictionary(locale);

  return (
    <section className="px-6 py-12 sm:px-12 sm:py-20 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t.homeTitle}</h1>
        <p className="text-lg sm:text-xl leading-relaxed mb-8">
          {t.homeDescription}
        </p>
        <div className="flex justify-center gap-6">
          <a
            href={`/${locale}/cases`} // уже без помилки
            className="bg-black text-white px-6 py-3 rounded-full text-sm sm:text-base hover:bg-gray-800 transition"
          >
            {t.homeCTA}
          </a>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="p-6 bg-gray-100 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">{t.feature1Title}</h3>
          <p className="text-gray-600">{t.feature1Description}</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">{t.feature2Title}</h3>
          <p className="text-gray-600">{t.feature2Description}</p>
        </div>
      </div>
    </section>
  );
}

// type PageProps = {
//   params: Promise<{ locale: "ua" | "en" }>;
// };

// type PageProps = {
//   params: { locale: "ua" | "en" };
// };

// type PageProps = {
//   params: { locale: "ua" | "en" };
// };

// export default function Home({ params }: PageProps) {
//   const { locale } = params;
//   // const { locale } = await params; // Очікуємо асинхронно
//   const t: Dictionary = dictionaries[locale] ?? dictionaries["ua"];

//   return (
//     <section className="px-6 py-12 sm:px-12 sm:py-20 text-gray-800">
//       <div className="max-w-4xl mx-auto text-center">
//         <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t.homeTitle}</h1>
//         <p className="text-lg sm:text-xl leading-relaxed mb-8">
//           {t.homeDescription}
//         </p>
//         <div className="flex justify-center gap-6">
//           <a
//             href={`/${locale}/cases`} // уже без помилки
//             className="bg-black text-white px-6 py-3 rounded-full text-sm sm:text-base hover:bg-gray-800 transition"
//           >
//             {t.homeCTA}
//           </a>
//         </div>
//       </div>
//       <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
//         <div className="p-6 bg-gray-100 rounded-xl shadow">
//           <h3 className="text-xl font-semibold mb-2">{t.feature1Title}</h3>
//           <p className="text-gray-600">{t.feature1Description}</p>
//         </div>
//         <div className="p-6 bg-gray-100 rounded-xl shadow">
//           <h3 className="text-xl font-semibold mb-2">{t.feature2Title}</h3>
//           <p className="text-gray-600">{t.feature2Description}</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { dictionaries } from "../../dictionaries";
// import { Dictionary } from "../../dictionaries"; // шляхи підлаштуй до структури проєкту

// type PageProps = {
//   params: { locale: "ua" | "en" };
// };

// export default async function Home({ params }: PageProps) {
//   // const t = dictionaries[params.locale];
//   // const t = dictionaries[params.locale] ?? dictionaries["ua"];
//   const { locale } = await Promise.resolve(params);
//   const t: Dictionary = dictionaries[params.locale] ?? dictionaries["ua"];

//   return (
//     <section className="px-6 py-12 sm:px-12 sm:py-20 text-gray-800">
//       <div className="max-w-4xl mx-auto text-center">
//         <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t.homeTitle}</h1>
//         <p className="text-lg sm:text-xl leading-relaxed mb-8">
//           {t.homeDescription}
//         </p>
//         <div className="flex justify-center gap-6">
//           <a
//             href={`/${params.locale}/cases`}
//             className="bg-black text-white px-6 py-3 rounded-full text-sm sm:text-base hover:bg-gray-800 transition"
//           >
//             {t.homeCTA}
//           </a>
//         </div>
//       </div>
//       <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
//         <div className="p-6 bg-gray-100 rounded-xl shadow">
//           <h3 className="text-xl font-semibold mb-2">{t.feature1Title}</h3>
//           <p className="text-gray-600">{t.feature1Description}</p>
//         </div>
//         <div className="p-6 bg-gray-100 rounded-xl shadow">
//           <h3 className="text-xl font-semibold mb-2">{t.feature2Title}</h3>
//           <p className="text-gray-600">{t.feature2Description}</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Image from "next/image";

// type PageProps = {
//   params: Promise<{ locale: string }>;
// };

// export default async function Home({ params }: PageProps) {
//   const { locale } = await params;

//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               app/[locale]/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

// import { dictionaries } from "../../dictionaries";

// export default function Home({ params }: { params: { locale: string } }) {
//   const locale = params.locale;
//   const t =
//     dictionaries[locale as keyof typeof dictionaries] || dictionaries.ua;

//   return (
//     <section className="p-12 text-center bg-[#f7f5f2]">
//       <h2 className="text-4xl font-semibold mb-4 text-gray-900">
//         {t.heroTitle}
//       </h2>
//       <p className="text-lg text-gray-700 max-w-2xl mx-auto">
//         {t.heroSubtitle}
//       </p>
//       <button className="mt-8 bg-[#c49b63] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#b68b50] transition">
//         {t.cta}
//       </button>
//     </section>
//   );
// }

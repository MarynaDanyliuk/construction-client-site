import { getDictionary } from "../dictionaries/index";
import type { Dictionary } from "../dictionaries/types";
import { type Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "ua" | "en" }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const t = await getDictionary(resolvedParams.locale);

  const baseUrl = "https://construction-client-site-9z5w.vercel.app";
  const url = `${baseUrl}/${resolvedParams.locale}`;

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url,
      siteName: "Служба замовника",
      locale: resolvedParams.locale === "ua" ? "uk_UA" : "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Служба замовника — якість, довіра, ефективність",
        },
      ],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: "ua" | "en" }>;
}) {
  const resolvedParams = await params;
  const t = await getDictionary(resolvedParams.locale);

  return (
    <section className="px-6 py-12 sm:px-12 sm:py-20 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t.homeTitle}</h1>
        <p className="text-lg sm:text-xl leading-relaxed mb-8">
          {t.homeDescription}
        </p>
        <div className="flex justify-center gap-6">
          <a
            href={`/${resolvedParams.locale}/cases`}
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

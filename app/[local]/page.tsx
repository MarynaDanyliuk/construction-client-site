import { dictionaries } from "../../dictionaries";

export default function Home({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const t =
    dictionaries[locale as keyof typeof dictionaries] || dictionaries.ua;

  return (
    <section className="p-12 text-center bg-[#f7f5f2]">
      <h2 className="text-4xl font-semibold mb-4 text-gray-900">
        {t.heroTitle}
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        {t.heroSubtitle}
      </p>
      <button className="mt-8 bg-[#c49b63] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#b68b50] transition">
        {t.cta}
      </button>
    </section>
  );
}

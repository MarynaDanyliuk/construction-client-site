// File: app/[locale]/services/page.tsx

import { getDictionary } from "@/app/dictionaries";
import { Locale } from "@/i18n-config";

type ServicesPageProps = {
  params: { locale: 'uk' | 'en' };
};

export default function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = params;
  const dict = getDictionary(locale);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{dict.services.title}</h1>
      <p className="text-gray-700 mb-8">{dict.services.description}</p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-gray-100 rounded-xl shadow dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            {dict.services.item1Title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {dict.services.item1Description}
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-xl shadow dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            {dict.services.item2Title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {dict.services.item2Description}
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-xl shadow dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            {dict.services.item3Title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {dict.services.item3Description}
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-xl shadow dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            {dict.services.item4Title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {dict.services.item4Description}
          </p>
        </div>
      </div>
    </div>
  );
}
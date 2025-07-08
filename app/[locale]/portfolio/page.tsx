// app/[locale]/portfolio/page.tsx

import { getDictionary } from '../../dictionaries';

type PortfolioPageProps = {
  params: { locale: 'uk' | 'en' };
};

export default async function PortfolioPage({ params }: PortfolioPageProps) {
   const { locale } = params;
  const t = await getDictionary(locale);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{t.portfolio.title}</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-8">{t.portfolio.text}</p>

      <div className="grid gap-6 md:grid-cols-2">
        {t.portfolio.projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 rounded-xl shadow dark:bg-gray-800"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {project.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

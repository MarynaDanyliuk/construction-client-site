// app/[locale]/portfolio/page.tsx

import { getDictionary } from '../../dictionaries';
import MetaHead from '@/app/components/MetaHead';

type PortfolioPageProps = {
  params: { locale: 'uk' | 'en' };
};

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { locale } = await params;
  const t = getDictionary(locale);

  return (
       <><MetaHead
      title={locale === 'uk'
        ? 'Служба замовника — Портфоліо'
        : 'Construction Client Service — Portfolio'}
      description={locale === 'uk'
        ? 'Приклади успішних проєктів з супроводу будівництва, реалізовані нашою командою.'
        : 'Examples of successful construction support projects delivered by our team.'}
      localeCode={locale} /><section className="max-w-5xl mx-auto px-4 py-12">
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
      </section></>
  );
}

import { getDictionary } from '../dictionaries';
import MetaHead from '../components/MetaHead';

import { ArrowRight, Send, Rocket, Sparkles, ExternalLink } from 'lucide-react';

import CTAButton from '../components/CTAButton';
import FeatureCard from '../components/FeatureCard';

export default async function Home({ params }: { params: Promise<{ locale: 'uk' | 'en' }> }) {
  const { locale } = await params;
  const t = await getDictionary(locale);

  return (
    <>
      <MetaHead title={t.metaTitle} description={t.metaDescription} localeCode={locale} />

      <section className="px-6 py-12 sm:px-12 sm:py-20 text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t.homeTitle}</h1>
          <p className="text-lg sm:text-xl leading-relaxed mb-8">{t.homeDescription}</p>
          <div className="flex justify-center gap-6">
            <CTAButton
              href={`/${locale}/cases`}
              label={t.homeCTA}
              icon={<Send size={20} />}
              variant="primary"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <FeatureCard title={t.feature1Title} description={t.feature1Description} />
          <FeatureCard title={t.feature2Title} description={t.feature2Description} />
          <FeatureCard title={t.feature3Title} description={t.feature3Description} />
          <FeatureCard title={t.feature4Title} description={t.feature4Description} />
          {/* <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">{t.feature1Title}</h3>
            <p className="text-gray-600">{t.feature1Description}</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">{t.feature2Title}</h3>
            <p className="text-gray-600">{t.feature2Description}</p>
          </div> */}
        </div>
      </section>
    </>
  );
}

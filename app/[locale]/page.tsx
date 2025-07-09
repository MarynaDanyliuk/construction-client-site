import { getDictionary } from '../dictionaries';
import CTAButton from '../components/CTAButton';
import FeatureCard from '../components/FeatureCard';
import { Send } from 'lucide-react';
import type { Metadata } from 'next';

type PageParams = {
  locale: 'uk' | 'en';
};

type PageProps = {
  params: PageParams;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);

  const baseUrl = 'https://construction-client-site.vercel.app';
  const url = `${baseUrl}/${locale}`;

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url,
      siteName: 'Служба замовника',
      locale: locale === 'uk' ? 'uk_UA' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Служба замовника — якість, довіра, ефективність',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.metaTitle,
      description: t.metaDescription,
      images: [`${baseUrl}/images/og-image.jpg`],
    },
  };
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const t = getDictionary(locale);

  return (
    <section className="px-6 py-12 sm:px-12 sm:py-20 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t.homeTitle}</h1>
        <p className="text-lg sm:text-xl leading-relaxed mb-8">{t.homeDescription}</p>
        <div className="flex justify-center gap-6">
          <CTAButton
            href={`/${locale}/order`}
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
      </div>
    </section>
  );
}


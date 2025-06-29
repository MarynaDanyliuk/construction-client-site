'use client';

import Head from 'next/head';

type LocaleCode = 'uk' | 'en';

type MetaHeadProps = {
  title?: string;
  description?: string;
  localeCode: LocaleCode;
};

const MetaHead = ({
  title = 'Служба замовника',
  description = 'Якісне супроводження будівництва',
  localeCode,
}: MetaHeadProps) => {
  const baseUrl = 'https://construction-client-site.vercel.app';
  const url = `${baseUrl}/${localeCode}`;
  const resolvedLocale = localeCode === 'uk' ? 'uk_UA' : 'en_US';
  const ogImage = `${baseUrl}/images/og-image.jpg`;
  const siteName = 'Служба замовника';

  return (
    <Head>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={resolvedLocale} />
      <meta property="og:locale:alternate" content={localeCode === 'uk' ? 'en_US' : 'uk_UA'} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Служба замовника — якість, довіра, ефективність" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export default MetaHead;

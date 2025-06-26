'use client';

import Head from 'next/head';

type MetaHeadProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  locale?: 'uk_UA' | 'en_US';
};

const MetaHead = ({
  title = 'Служба замовника',
  description = 'Якісне супроводження будівництва',
  image = 'https://construction-client-site-9z5w.vercel.app/images/og-image.jpg',
  url = 'https://construction-client-site-9z5w.vercel.app',
  locale = 'uk_UA',
}: MetaHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default MetaHead;

'use client';

import Head from 'next/head';

type StructuredDataProps = {
  /** Будь-який schema.org-compatible JSON-LD об'єкт */
  data: Record<string, unknown>;
  /** Унікальний ключ — наприклад, 'site-schema', 'org-schema' */
  scriptKey?: string;
};

const StructuredData = ({ data, scriptKey = 'structured-data' }: StructuredDataProps) => {
  if (!data || typeof data !== 'object') return null;

  return (
    <Head>
      <script
        type="application/ld+json"
        key={scriptKey}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
};

export default StructuredData;

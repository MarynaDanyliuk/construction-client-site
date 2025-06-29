'use client';

import StructuredData from './StructuredData';

type OrganizationSchemaProps = {
  name?: string;
  url?: string;
  logoUrl?: string;
  phone?: string;
  social?: string[];
};

const OrganizationSchema = ({
  name = 'Служба замовника',
  url = 'https://construction-client-site.vercel.app',
  logoUrl = 'https://construction-client-site.vercel.app/logo.png',
  phone = '+380991234567',
  social = [],
}: OrganizationSchemaProps) => {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo: logoUrl,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: phone,
      contactType: 'Customer Support',
      areaServed: 'UA',
      availableLanguage: ['Ukrainian', 'English'],
    },
    sameAs: social,
  };

  return <StructuredData data={organization} scriptKey="organization-schema" />;
};

export default OrganizationSchema;

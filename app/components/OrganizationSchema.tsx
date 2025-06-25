"use client";

import Head from "next/head";

const OrganizationSchema = () => {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Служба замовника",
    url: "https://construction-client-site-9z5w.vercel.app",
    logo: "https://construction-client-site-9z5w.vercel.app/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+380991234567",
      contactType: "Customer Support",
      areaServed: "UA",
      availableLanguage: ["Ukrainian", "English"],
    },
    sameAs: [
      "https://www.instagram.com/your_instagram",
      "https://www.facebook.com/your_facebook",
      "https://t.me/your_telegram",
    ],
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        key="organization-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
    </Head>
  );
};

export default OrganizationSchema;

import Head from "next/head";

type StructuredDataProps = {
  data: Record<string, unknown>;
  scriptKey?: string;
};

const StructuredData = ({
  data,
  scriptKey = "structured-data",
}: StructuredDataProps) => {
  //   const jsonLd = {
  //     "@context": "https://schema.org",
  //     "@type": "WebSite",
  //     name: "construction-client-site",
  //     url: "https://construction-client-site-9z5w.vercel.app",
  //   };

  return (
    <Head>
      <script
        key={scriptKey}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
};

export default StructuredData;

/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */

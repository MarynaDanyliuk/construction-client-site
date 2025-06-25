import Head from "next/head";

type StructuredDataProps = {
  data: Record<string, unknown>;
  scriptKey?: string;
};

const StructuredData = ({
  data,
  scriptKey = "structured-data",
}: StructuredDataProps) => {
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

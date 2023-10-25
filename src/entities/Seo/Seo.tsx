import Head from "next/head";

interface ISeo {
  title: string;
  description?: string;
  creator?: string;
  type?: string;
  image?: string;
}

export const SEO = ({
  title,
  description,
  creator,
  type = "website",
  image,
}: ISeo) => {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      {creator && <meta name="twitter:creator" content={creator} />}
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="og:image" content={image} />}
      {/* End Twitter tags */}
    </Head>
  );
};

import { SITE, structuredDataPerson } from '../../lib/seo';

type Props = {
  title?: string;
  description?: string;
  path?: string; // path relative to site root, e.g. '/portfolio'
  image?: string; // absolute or site-relative
};

export const SEO = ({ title, description, path, image }: Props) => {
  const metaTitle = title ? `${title} — ${SITE.title}` : SITE.title;
  const metaDescription = description || SITE.description;
  const url = path ? SITE.siteUrl.replace(/\/$/, '') + path : SITE.siteUrl;
  const metaImage = image ? (image.startsWith('http') ? image : SITE.siteUrl.replace(/\/$/, '') + image) : SITE.siteUrl.replace(/\/$/, '') + SITE.defaultImage;

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:locale" content={SITE.language} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Structured data: Person */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredDataPerson()),
      }} />
    </>
  );
};

export default SEO;

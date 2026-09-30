import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.pettxo.com";

const DEFAULT_TITLE = "Pettxo — Where Pets & People Connect";

const DEFAULT_DESCRIPTION =
  "Pettxo connects pet parents, service providers, and pet lovers in one community-first platform for trusted pet connections and services.";

const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export default function SEO({
  description = DEFAULT_DESCRIPTION,
  canonical = "/",
}) {
  const canonicalUrl = canonical.startsWith("http")
    ? canonical
    : `${SITE_URL}${canonical}`;

 const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pettxo",
  url: SITE_URL,
  logo: OG_IMAGE,
  sameAs: [
    "https://www.linkedin.com/company/pettxo/posts/?feedView=all",
    "https://www.instagram.com/pettxo_app",
    "https://x.com/pettxo_app"
  ],
};

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{DEFAULT_TITLE}</title>

      <meta
        name="description"
        content={description}
      />

      {/* Canonical URL */}
      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content={DEFAULT_TITLE}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:image"
        content={OG_IMAGE}
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={DEFAULT_TITLE}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={OG_IMAGE}
      />

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
}
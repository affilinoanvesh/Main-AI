import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
}

export default function SEO({ title, description, canonical, type = 'website', image }: SEOProps) {
  const siteTitle = 'User Labs';
  const fullTitle = `${title} | ${siteTitle}`;
  const domain = 'https://userlabs.co.nz';
  const defaultImage = `${domain}/og-image.png`;
  const canonicalUrl = canonical ? `${domain}${canonical}` : domain;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Additional SEO tags */}
      <meta name="author" content="User Labs" />
      <meta name="publisher" content="User Labs" />
      <meta name="format-detection" content="telephone=no" />
    </Helmet>
  );
}
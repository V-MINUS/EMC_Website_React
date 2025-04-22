import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
  siteName?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Electronic Music Council',
  description = 'A community for electronic music producers and enthusiasts',
  ogImage = '/images/og-image.jpg',
  ogUrl = '[https://emc-website.com](https://emc-website.com)',
  siteName = 'Electronic Music Council'
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "[https://schema.org](https://schema.org)",
            "@type": "WebSite",
            "name": siteName,
            "url": ogUrl
          })
        }}
      />
    </Head>
  );
};

export default SEO;

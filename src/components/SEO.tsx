interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
}

export function SEO({ title, description, keywords }: SEOProps) {
  return (
    <Head>
      <title>{`${title} | ToxicGuard`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords?.join(', ')} />
      
      {/* Open Graph */}
      <meta property="og:title" content={`${title} | ToxicGuard`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="ToxicGuard" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ToxicGuard`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@toxiguard" />
      
      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": title,
          "description": description,
          "author": {
            "@type": "Organization",
            "name": "ToxicGuard"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ToxicGuard",
            "logo": {
              "@type": "ImageObject",
              "url": "https://toxiguard.site/logo.png"
            }
          }
        })}
      </script>
    </Head>
  );
} 
export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://toxiguard.site/",
    "name": "ToxiGuard",
    "description": "AI-powered protection against toxic clients and payment risks",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://toxiguard.site/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
} 
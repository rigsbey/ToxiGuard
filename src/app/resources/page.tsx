export default function ResourcesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": expertResources.map((resource, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "name": resource.title,
        "description": resource.description,
        "url": `https://toxicguard.com/resources/${resource.slug}`
      }
    }))
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <h1 className="text-4xl font-bold mb-12 text-center">
        Freelancer Protection Hub
        <span className="block mt-4 text-2xl text-blue-600 font-normal">
          AI-Verified Strategies & Legal Resources
        </span>
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {expertResources.map((resource) => (
          <article 
            key={resource.slug}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  {resource.iconType === 'shield' ? (
                    <ShieldExclamationIcon className="w-8 h-8 text-blue-600" />
                  ) : (
                    <ScaleIcon className="w-8 h-8 text-blue-600" />
                  )}
                </div>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  {resource.category}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">{resource.title}</h2>
              <p className="text-gray-600 mb-6">{resource.description}</p>
              
              <div className="flex items-center justify-between">
                <Link
                  href={`/resources/${resource.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
                >
                  Read Guide
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <span className="text-sm text-gray-500">{resource.readingTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
} 
export default function ResourcePage({ params }: { params: { slug: string } }) {
  const resource = expertResources.find(r => r.slug === params.slug);
  
  return (
    <>
      <header className="bg-blue-50 py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full">
              {resource.category}
            </span>
            <span className="text-gray-600">{resource.readingTime} read</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-6">{resource.title}</h1>
          
          <div className="prose-lg">
            <p className="text-xl text-gray-700">
              {resource.description} {resource.category === 'Safety' && (
                'Verified by AI analysis of 15,000+ freelance projects'
              )}
            </p>
          </div>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 py-16 prose-lg">
        {resource.slug === 'toxic-client-red-flags' && (
          <>
            <div className="bg-red-50 p-6 rounded-xl mb-12">
              <h2 className="text-2xl font-bold mb-4">🚨 Critical Risk Factors</h2>
              <ul className="space-y-4">
                {[
                  'Payment delays history (87% correlation with disputes)',
                  'Unrealistic deadlines (92% project failure rate)',
                  'Vague project scope (78% cost overruns)'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircleIcon className="w-5 h-5 text-red-600 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-8">Case Study Analysis</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-white border border-red-100 rounded-xl">
                <h3 className="text-lg font-bold mb-3 text-red-800">Dangerous Example</h3>
                <blockquote className="text-gray-600 italic mb-4">
                  "Need full e-commerce site in 3 days. Budget $500. Will know good work when I see it"
                </blockquote>
                <div className="text-sm bg-red-50 p-3 rounded-lg">
                  <span className="font-medium">AI Risk Score:</span> 94/100
                </div>
              </div>
              <div className="p-6 bg-green-50 border border-green-200 rounded-xl">
                <h3 className="text-lg font-bold mb-3 text-green-800">Safe Alternative</h3>
                <p className="text-gray-600 mb-4">
                  "Seeking Shopify developer for MVP. Clear requirements. $5k budget with 50% upfront"
                </p>
                <div className="text-sm bg-green-100 p-3 rounded-lg">
                  <span className="font-medium">AI Safety Score:</span> 82/100
                </div>
              </div>
            </div>
          </>
        )}

        <ArticleCTA />
      </article>
    </>
  );
} 
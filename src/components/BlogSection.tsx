import Link from "next/link";

export function BlogPreview() {
  return (
    <section id="blog-section" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Expert Resources</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48 overflow-hidden rounded-t-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent" />
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold mb-3">10 Signs of a Toxic Client</h3>
                <p className="text-gray-600 line-clamp-3">
                  Learn to identify red flags like unrealistic deadlines, 
                  payment delays, and scope creep before they cost you time and money.
                </p>
              </div>
            </div>
            <div className="p-6 border-t">
              <Link
                href="/blog/10-signs-toxic-client"
                className="text-primary-blue hover:underline font-medium"
              >
                Read Full Guide →
              </Link>
            </div>
          </article>

          {/* Повторить для других статей */}
        </div>
      </div>
    </section>
  );
} 
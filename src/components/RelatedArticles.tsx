import Link from 'next/link';
import SeoHeading from './SeoHeading';

interface Article {
  title: string;
  slug: string;
  excerpt: string;
  category?: string;
}

interface RelatedArticlesProps {
  articles: Article[];
  currentSlug: string;
  title?: string;
  className?: string;
}

export default function RelatedArticles({ 
  articles, 
  currentSlug, 
  title = 'Related Articles',
  className = ''
}: RelatedArticlesProps) {
  // Filter out the current article and limit to 2 articles
  const filteredArticles = articles
    .filter(article => article.slug !== currentSlug)
    .slice(0, 2);
  
  if (filteredArticles.length === 0) return null;
  
  return (
    <div className={`mt-16 ${className}`}>
      <SeoHeading 
        level={3} 
        className="text-2xl font-bold mb-6" 
        keywords={['related articles', 'freelance protection resources']}
      >
        {title}
      </SeoHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.map((article) => (
          <Link key={article.slug} href={`/blog/${article.slug}`} className="block">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
              <h4 className="text-lg font-semibold mb-2">{article.title}</h4>
              <p className="text-gray-600 text-sm">{article.excerpt}</p>
              {article.category && (
                <span className="inline-block mt-3 bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
                  {article.category}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 
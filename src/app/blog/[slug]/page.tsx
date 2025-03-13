import { Metadata } from 'next';
import Link from 'next/link';
import SeoHeading from '@/components/SeoHeading';
import Script from 'next/script';
import RelatedArticles from '@/components/RelatedArticles';
import { blogPosts, getPostBySlug, getRelatedPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | ToxiGuard',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: `${post.title} | ToxiGuard`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: `${post.title} | ToxiGuard`,
      description: post.excerpt,
      url: `https://toxiguard.site/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.isoDate,
      authors: ['https://toxiguard.site/about-us'],
      tags: post.keywords.slice(0, 5),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPost({ params }: BlogPostParams) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = getRelatedPosts(params.slug);
  
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": `https://toxiguard.site${post.image}`,
        "author": {
          "@type": "Organization",
          "name": "ToxiGuard",
          "url": "https://toxiguard.site"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ToxiGuard",
          "logo": {
            "@type": "ImageObject",
            "url": "https://toxiguard.site/logo.png"
          }
        },
        "datePublished": post.isoDate,
        "dateModified": post.isoDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://toxiguard.site/blog/${post.slug}`
        },
        "keywords": post.keywords.join(', ')
      })}} />
      
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10">
              <Link href="/blog" className="text-blue-600 hover:text-blue-800">
                ← Back to Blog
              </Link>
            </div>
            
            <div className="mb-8">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <time dateTime={post.isoDate} className="text-gray-500 ml-4">
                {post.date}
              </time>
            </div>
            
            <SeoHeading 
              level={1} 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6"
              keywords={post.keywords.slice(0, 4)}
            >
              {post.title}
            </SeoHeading>
            
            <div className="prose prose-lg prose-blue mx-auto">
              <p className="lead text-xl text-gray-600 mb-8">
                {post.excerpt}
              </p>
              
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full rounded-xl mb-8"
              />
              
              {/* Placeholder for article content */}
              <p>
                This is a placeholder for the full article content. In a real implementation, 
                this would be replaced with the actual content of the blog post, either from a CMS 
                or from a markdown file.
              </p>
              
              <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                <SeoHeading level={3} className="text-xl font-bold mb-4" keywords={['freelance protection tools', 'client screening software']}>
                  Protect Your Freelance Business
                </SeoHeading>
                <p>
                  ToxiGuard helps thousands of freelancers avoid toxic clients and protect their businesses. 
                  Our AI-powered Chrome extension analyzes Upwork job postings in real-time, identifying red flags 
                  and providing risk assessments before you bid.
                </p>
                <div className="mt-4">
                  <Link 
                    href="https://chromewebstore.google.com/detail/toxiguard/icijbieljniejiicoddalgfkdkadknnn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mr-4"
                  >
                    Install Free Extension
                  </Link>
                  <Link 
                    href="/blog"
                    className="inline-block text-blue-600 hover:text-blue-800"
                  >
                    Read More Articles
                  </Link>
                </div>
              </div>
            </div>
            
            <RelatedArticles 
              articles={relatedPosts} 
              currentSlug={params.slug} 
            />
          </div>
        </div>
      </div>
    </>
  );
} 
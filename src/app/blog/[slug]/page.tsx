import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// Отключаем динамические параметры
export const dynamicParams = false;

// Обновляем типы для Next.js 15+
type PageParams = {
  slug: string;
}

type PageProps = {
  params: Promise<PageParams>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

const articles = {
  'elizabeth-ux': {
    title: 'How ToxicGuard Saved 50+ Freelance Hours/Month: UX Designer Case Study',
    content: `
      <div class="prose lg:prose-xl">
        <h2>The Challenge: Toxic Client Red Flags</h2>
        <p>Project requirements:</p>
        <ul>
          <li>30 design mockups in 1 week</li>
          <li>$200 budget (83% below market rate)</li>
          <li>"Pay after approval" terms</li>
        </ul>

        <h2>The Solution: AI Risk Detection</h2>
        <p>ToxicGuard analysis revealed:</p>
        <div class="bg-red-50 p-4 rounded-lg my-6">
          <h3 class="text-red-600 font-bold mb-2">🚩 5 Critical Red Flags</h3>
          <ul class="list-disc pl-6">
            <li>Unrealistic deadline</li>
            <li>Below-market budget</li>
            <li>High payment risk score (92/100)</li>
          </ul>
        </div>

        <h2>The Result: Time & Money Saved</h2>
        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="bg-green-50 p-6 rounded-xl">
            <div class="text-3xl mb-2">⏳ 50h</div>
            <div class="font-medium">Monthly time saved</div>
          </div>
          <div class="bg-blue-50 p-6 rounded-xl">
            <div class="text-3xl mb-2">💰 $1300+</div>
            <div class="font-medium">Additional monthly income</div>
          </div>
        </div>
      </div>
    `,
    seoDescription: 'Learn how UX designer saved 50+ hours/month avoiding toxic clients using ToxicGuard AI risk detection',
    image: '/images/case-study-1.jpg'
  },
  // Add other articles
};

export async function generateMetadata(
  { params }: { params: PageParams }
): Promise<Metadata> {
  const article = articles[params.slug as keyof typeof articles];
  
  return article
    ? {
        title: `${article.title} | ToxiGuard Blog`,
        description: article.seoDescription,
        openGraph: {
          images: [article.image]
        }
      }
    : {
        title: 'Article Not Found | ToxiGuard Blog',
        description: 'The requested article does not exist',
      };
}

// Обновляем компонент страницы для поддержки асинхронных параметров
export default async function BlogArticlePage({ 
  params,
  searchParams 
}: PageProps) {
  // Вместо await Promise.resolve(params) просто ожидаем params
  const resolvedParams = await params;
  const article = articles[resolvedParams.slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Article Not Found</h1>
        <p className="text-gray-600 mb-6">The requested article does not exist.</p>
        <Link
          href="/blog"
          className="bg-primary-blue text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-blue/90 transition-all"
        >
          View All Articles
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
        <Image
          src={article.image}
          alt={article.title}
          width={800}
          height={450}
          className="rounded-xl"
        />
      </header>

      <div 
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <section className="mt-16 bg-blue-50 p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Protect Your Business?</h2>
        <p className="mb-6">Join 8,214+ professionals using ToxiGuard for client risk detection</p>
        <Link
          href="/early-access"
          className="bg-primary-blue text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-blue/90 transition-all"
        >
          Get Early Access Now
        </Link>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "image": article.image,
            "author": {
              "@type": "Person",
              "name": "ToxicGuard Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ToxicGuard",
              "logo": {
                "@type": "ImageObject",
                "url": "https://toxiguard.com/logo.png"
              }
            },
            "description": article.seoDescription,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://toxiguard.com/blog/${resolvedParams.slug}`
            }
          })
        }}
      />
    </article>
  );
}

export async function generateStaticParams(): Promise<PageParams[]> {
  return Object.keys(articles).map(slug => ({
    slug
  }));
} 
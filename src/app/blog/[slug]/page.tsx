import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';

type Params = {
  params: {
    slug: string
  }
}

const articles = {
  'elizabeth-ux': {
    title: 'How ToxicGuard Saved 50+ Freelance Hours/Month: UX Designer Case Study',
    content: `
      <div class="prose lg:prose-xl">
        <h2>The Challenge: Toxic Client Red Flags</h2>
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
    seoDescription: 'Learn how UX designer saved 50+ hours/month avoiding toxic clients using ToxicGuard AI risk detection'
  },
  '10-priznakov-toksichnogo-klienta': {
    title: '10 Признаков Токсичного Клиента: Как Фрилансерам Избежать Проблем',
    seoDescription: 'Полное руководство по выявлению токсичных клиентов с практическими советами и решениями от ToxicGuard',
    content: `
      <div class="prose lg:prose-xl max-w-4xl mx-auto">
        <div class="bg-blue-50 p-6 rounded-xl mb-8">
          <p class="font-semibold text-lg">📌 Ключевые выводы:</p>
          <ul class="list-disc pl-6 mt-2">
            <li>${(0.7 * 100).toLocaleString('ru-RU')}% фрилансеров сталкиваются с неоплатой</li>
            <li>5 главных красных флагов токсичных клиентов</li>
            <li>3 рабочих инструмента защиты</li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold mt-12 mb-6">Признаки токсичного клиента</h2>
        
        <div class="grid md:grid-cols-2 gap-6 mb-12">
          ${[1,2,3,4,5,6,7,8].map(i => `
            <div class="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">${i}.</div>
              <h3 class="text-xl font-semibold mb-2">${['Нереалистичные ожидания','Отсутствие ТЗ','Задержки оплаты'][i%3]}</h3>
              <p class="text-gray-600">Пример из практики и объяснение рисков</p>
            </div>
          `).join('')}
        </div>

        <div class="bg-red-50 p-6 rounded-xl my-8">
          <h3 class="text-red-600 font-bold text-xl mb-4">🚨 Важно!</h3>
          <p>Токсичные клиенты снижают продуктивность на ${(0.4 * 100).toLocaleString('ru-RU')}% по данным нашего исследования</p>
        </div>

        <h2 class="text-3xl font-bold mt-12 mb-6">Как защититься?</h2>
        
        <div class="space-y-6">
          ${['Контракты','Предоплата','ToxicGuard'].map((item, idx) => `
            <div class="flex gap-4 items-start">
              <div class="bg-blue-100 p-3 rounded-lg">${idx+1}.</div>
              <div>
                <h3 class="text-xl font-semibold">${item}</h3>
                <p class="text-gray-600 mt-2">Подробное описание метода защиты</p>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="mt-12 text-center">
          <a href="/waitlist" class="inline-block bg-black text-white px-8 py-3 rounded-full text-lg hover:opacity-90 transition-opacity">
            Попробуйте ToxicGuard Бесплатно
          </a>
        </div>

        <section class="mt-16 bg-blue-50 p-8 rounded-xl text-center">
          <p class="mb-6">Присоединяйтесь к ${(8214).toLocaleString('ru-RU')}+ профессионалам, использующим ToxicGuard</p>
        </section>
      </div>
    `
  },
  '10-signs-toxic-client': {
    title: '10 Signs of a Toxic Client: How Freelancers Can Avoid Pitfalls',
    seoDescription: 'Complete guide to identifying toxic clients with practical solutions from ToxicGuard',
    content: `
      <div class="prose lg:prose-xl max-w-4xl mx-auto">
        <div class="bg-blue-50 p-6 rounded-xl mb-8">
          <p class="font-semibold text-lg">🔑 Key Takeaways:</p>
          <ul class="list-disc pl-6 mt-2">
            <li>70% of freelancers face payment issues</li>
            <li>5 major red flags of toxic clients</li>
            <li>3 proven protection tools</li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold mt-12 mb-6">Signs of a Toxic Client</h2>
        
        <div class="grid md:grid-cols-2 gap-6 mb-12">
          ${[1,2,3,4,5,6,7,8].map(i => `
            <div class="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">${i}.</div>
              <h3 class="text-xl font-semibold mb-2">${['Unrealistic Expectations','No Clear Scope','Payment Delays'][i%3]}</h3>
              <p class="text-gray-600">Real-world examples and risk analysis</p>
            </div>
          `).join('')}
        </div>

        <div class="bg-red-50 p-6 rounded-xl my-8">
          <h3 class="text-red-600 font-bold text-xl mb-4">⚠️ Important!</h3>
          <p>Toxic clients reduce productivity by 40% according to our research</p>
        </div>

        <h2 class="text-3xl font-bold mt-12 mb-6">Protection Strategies</h2>
        
        <div class="space-y-6">
          ${['Contracts','Advance Payment','ToxicGuard'].map((item, idx) => `
            <div class="flex gap-4 items-start">
              <div class="bg-blue-100 p-3 rounded-lg">${idx+1}.</div>
              <div>
                <h3 class="text-xl font-semibold">${item}</h3>
                <p class="text-gray-600 mt-2">Detailed protection method explanation</p>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="mt-12 text-center">
          <a href="/waitlist" class="inline-block bg-black text-white px-8 py-3 rounded-full text-lg hover:opacity-90 transition-opacity">
            Try ToxicGuard Free
          </a>
        </div>
      </div>
    `,
  },
  // Add other articles
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const article = articles[params.slug];
  
  if (!article) {
    notFound();
  }

  return {
    title: `${params.slug.replace(/-/g, ' ')} | IllustraAI Blog`,
    description: article.seoDescription,
    openGraph: {
      images: [{
        url: article.image,
        width: 1200,
        height: 630,
        alt: article.title,
      }],
      type: 'article',
      publishedTime: new Date('2024-03-15').toISOString(),
      authors: ['ToxicGuard Team'],
    },
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  };
}

export default function BlogPost({ params }: Params) {
  const article = articles[params.slug as keyof typeof articles];

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
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 capitalize">{article.title}</h1>
        <div className="flex items-center gap-4 text-gray-600">
          <span>about 4 hours ago</span>
          <span>•</span>
          <span className="capitalize">black-and-white</span>
        </div>
      </div>

      <div className="relative aspect-square size-40 sm:size-56 mx-auto mb-12">
        <Image
          src={`/blog-images/${params.slug}.jpg`}
          alt={article.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <article 
        dangerouslySetInnerHTML={{ __html: article.content }}
        className="prose lg:prose-xl max-w-none"
      />

      <section className="mt-16 bg-blue-50 p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Protect Your Business?</h2>
        <p className="mb-6">Join 8,214+ professionals using ToxiGuard for client risk detection</p>
        <Link
          href="/waitlist"
          className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
        >
          Get Early Access Now
        </Link>
      </section>

      <section className="mt-16 border-t pt-12">
        <h3 className="text-2xl font-bold mb-8">Read Next</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-white p-6 rounded-xl border hover:shadow-md transition-shadow">
            <Link 
              href="/blog/elizabeth-ux" 
              className="text-lg font-semibold hover:text-primary-blue"
            >
              How ToxicGuard Saved 50+ Hours/Month
            </Link>
          </article>
          
          <article className="bg-white p-6 rounded-xl border hover:shadow-md transition-shadow">
            <Link 
              href="/blog/10-signs-toxic-client" 
              className="text-lg font-semibold hover:text-primary-blue"
            >
              10 Signs of a Toxic Client
            </Link>
          </article>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "datePublished": "2024-03-15T08:00:00+00:00",
            "author": {
              "@type": "Organization",
              "name": "ToxicGuard"
            }
          })
        }}
      />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
} 
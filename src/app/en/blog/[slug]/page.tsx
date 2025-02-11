import { notFound } from 'next/navigation';

// Добавляем интерфейс для поста
interface BlogPost {
  title: string;
  content: string;
  seoDescription?: string;
  category?: string;
}

// Явно типизируем объект с постами
const englishPosts: Record<string, BlogPost> = {
  'freelancer-safety-guide': {
    title: 'Freelancer Safety Guide: Protecting Yourself From Toxic Clients',
    content: `
      <div class="prose lg:prose-xl max-w-4xl mx-auto">
        <div class="bg-blue-50 p-6 rounded-xl mb-8">
          <p class="font-semibold text-lg">🔑 Key Takeaways:</p>
          <ul class="list-disc pl-6 mt-2">
            <li>${(0.82 * 100).toFixed(0)}% of freelancers face payment issues</li>
            <li>5 red flags of problematic clients</li>
            <li>3 tools for secure collaboration</li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold mt-12 mb-6">Identifying Client Red Flags</h2>
        
        <div class="grid md:grid-cols-2 gap-6 mb-12">
          ${[1,2,3,4,5].map(i => `
            <div class="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">#${i}</div>
              <h3 class="text-xl font-semibold mb-2">${[
                'Unrealistic Expectations',
                'Vague Requirements', 
                'Payment Delays'
              ][i%3]}</h3>
              <p class="text-gray-600">Real case studies and risk analysis</p>
            </div>
          `).join('')}
        </div>
      </div>
    `
  },
  // ... другие статьи
};

export async function generateStaticParams() {
  return Object.keys(englishPosts).map(slug => ({ 
    slug 
  }));
}

interface BlogPageProps {
  params: { 
    slug: keyof typeof englishPosts // Указываем допустимые ключи
  }
}

export default function BlogPage({ params }: BlogPageProps) {
  // Добавляем проверку типа
  const post = params.slug in englishPosts 
    ? englishPosts[params.slug]
    : undefined;
  
  if (!post) return notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <article dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
} 
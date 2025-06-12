import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import { formatDate } from '@/utils/date';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Script from 'next/script';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BlogList } from '@/components/ui/blog-list';

const articles = [
  {
    id: 1,
    category: "Safety",
    author: {
      name: "Alex Thompson",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      initials: "AT"
    },
    title: "Top 10 Red Flags in Freelance Client Communication",
    description: "Learn to identify warning signs in client messages and project descriptions that could indicate potential problems. Protect yourself from toxic clients before it's too late.",
    image: "https://images.unsplash.com/photo-1586892477838-2b96e85e0f96?w=1200&h=675&fit=crop",
    date: "Jan 15, 2024"
  },
  {
    id: 2,
    category: "Tips",
    author: {
      name: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      initials: "SC"
    },
    title: "Secure Payment Methods for Freelancers",
    description: "A comprehensive guide to choosing the safest payment methods and protecting yourself from payment scams in the freelance world.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=675&fit=crop",
    date: "Feb 3, 2024"
  },
  {
    id: 3,
    category: "Guide",
    author: {
      name: "Mike Roberts",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      initials: "MR"
    },
    title: "Building a Bulletproof Freelance Contract",
    description: "Essential clauses and terms to include in your freelance contracts to protect your interests and ensure timely payments.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=675&fit=crop",
    date: "Feb 28, 2024"
  },
  {
    id: 4,
    category: "Tools",
    author: {
      name: "Laura Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      initials: "LJ"
    },
    title: "AI Tools for Freelancer Safety: ToxiGuard and Beyond",
    description: "Discover how AI-powered tools like ToxiGuard can help you identify potentially problematic clients before accepting a project.",
    image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=1200&h=675&fit=crop",
    date: "Mar 10, 2024"
  },
  {
    id: 5,
    category: "Story",
    author: {
      name: "David Wilson",
      image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=200&h=200&fit=crop",
      initials: "DW"
    },
    title: "How I Avoided a $10,000 Freelance Scam Using ToxiGuard",
    description: "A freelance developer shares his experience of how analyzing a suspicious client saved him from a potential scam and protected his business.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&h=675&fit=crop",
    date: "Mar 22, 2024"
  },
  {
    id: 6,
    category: "Security",
    author: {
      name: "Natalie Kim",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      initials: "NK"
    },
    title: "Privacy and Security for Freelancers: A Complete Guide",
    description: "Essential practices to keep your freelancing business, client data, and personal information secure in today's digital marketplace.",
    image: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?w=1200&h=675&fit=crop",
    date: "Apr 5, 2024"
  }
];

export const metadata: Metadata = {
  title: 'ToxiGuard Blog - Resources for Freelancer Protection',
  description: 'Expert tips, guides, and insights to help freelancers protect themselves from toxic clients and payment risks.',
  keywords: 'freelancer blog, client protection, toxic clients, payment security, freelance tips, client screening',
  alternates: { canonical: 'https://toxiguard.site/blog' },
  openGraph: {
    title: 'ToxiGuard Blog - Resources for Freelancer Protection',
    description: 'Expert tips, guides, and insights to help freelancers protect themselves from toxic clients and payment risks.',
    url: 'https://toxiguard.site/blog',
    siteName: 'ToxiGuard',
    images: [
      {
        url: 'https://toxiguard.site/images/og/blog-og.jpg',
        width: 1200,
        height: 630,
        alt: 'ToxiGuard Blog Resources',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ToxiGuard Blog - Resources for Freelancer Protection',
    description: 'Expert tips, guides, and insights to help freelancers protect themselves from toxic clients and payment risks.',
    images: ['https://toxiguard.site/images/og/blog-og.jpg'],
  },
};

// Категории для блога
const categories: Record<string, string> = {
  "10-signs-toxic-client": "Safety",
  "secure-contracts-freelancers": "Contract",
  "secure-payment-strategies-freelancers": "Payment",
  "setting-boundaries-with-clients": "Advice"
};

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  authorTitle?: string;
  category?: string;
  tags: string[];
  readingTime: string;
  image: string;
};

async function getBlogPosts(): Promise<BlogPost[]> {
  const postsDirectory = path.join(process.cwd(), 'src/data/blog-posts');
  
  try {
    const filenames = fs.readdirSync(postsDirectory);
    
    const posts = filenames
      .filter(filename => filename.endsWith('.md'))
      .map(filename => {
        const slug = filename.replace(/\.md$/, '');
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        
        // Extract title and description from the markdown content if not in frontmatter
        let title = data.title;
        let description = data.description;
        
        if (!title) {
          // Extract the first h1 heading as title
          const titleMatch = content.match(/^# (.*)/m);
          title = titleMatch ? titleMatch[1] : 'Untitled';
        }
        
        if (!description) {
          // Extract first paragraph after intro as description
          const descMatch = content.match(/^## Introduction\s*\n\n([^\n]+)/m);
          description = descMatch ? descMatch[1] : '';
        }
        
        // Estimate reading time
        const words = content.split(/\s+/).length;
        const readingTime = Math.ceil(words / 200) + ' мин';
        
        // Get category from mapping or first tag
        const category = categories[slug] || (data.tags && data.tags.length > 0 ? data.tags[0] : "Guide");
        
        // Use a default image for all blog posts since we don't have the actual images
        const defaultImage = data.image || '/images/upwork-screenshot.jpg';
        
        return {
          slug,
          title,
          description: description || `Learn more about ${title}`,
          date: data.date || new Date().toISOString().split('T')[0],
          author: data.author || 'ToxiGuard Team',
          authorTitle: data.authorTitle,
          category,
          tags: data.tags || ['freelancing', 'client protection'],
          readingTime,
          image: defaultImage,
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return posts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  // Загружаем реальные статьи из файловой системы
  const blogPosts = await getBlogPosts();

  // Адаптируем в нужный формат для компонента BlogList
  const formattedPosts = blogPosts.map(post => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: formatDate(post.date),
    image: post.image,
    category: post.category,
    author: {
      name: post.author,
      avatar: undefined, // У нас нет аватаров, поэтому используем fallback
    },
    readingTime: post.readingTime
  }));

  return (
    <>
      <Navbar />
      
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'ToxiGuard Blog',
            description: 'Expert tips, guides, and insights to help freelancers protect themselves from toxic clients and payment risks.',
            url: 'https://toxiguard.site/blog',
            publisher: {
              '@type': 'Organization',
              name: 'ToxiGuard',
              logo: {
                '@type': 'ImageObject',
                url: 'https://toxiguard.site/images/logo.png',
              }
            },
            blogPost: blogPosts.map(post => ({
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              author: {
                '@type': 'Person',
                name: post.author
              },
              url: `https://toxiguard.site/blog/${post.slug}`
            }))
          })
        }}
      />
      
      <main className="pt-32 pb-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ToxiGuard Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Insights, guides, and stories to help you freelance safely and successfully
            </p>
            <div className="border-b border-gray-200 dark:border-gray-800 pb-2 mb-12">
              <h2 className="text-xl font-semibold">All Articles</h2>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-12 mb-16">
            {formattedPosts.map((post) => (
              <article key={post.slug} className="border-b border-gray-200 dark:border-gray-800 pb-12 last:border-0">
                <Link href={`/blog/${post.slug}`} className="group">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                      <div className="aspect-video relative rounded-lg overflow-hidden">
                        <Image
                          src={post.image || '/images/upwork-screenshot.jpg'}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <div className="flex items-center gap-3 mb-3">
                        {post.category && (
                          <Badge variant="secondary" className="px-2 py-0.5 text-xs">
                            {post.category}
                          </Badge>
                        )}
                        <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {post.description}
                      </p>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{post.author.name}</span>
                        </div>
                        <span className="mx-3 text-gray-300 dark:text-gray-700">•</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{post.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Subscribe to our newsletter</h2>
            <Newsletter />
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
} 
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

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
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
        const readingTime = Math.ceil(words / 200) + ' min read';
        
        // Use a default image for all blog posts since we don't have the actual images
        const defaultImage = '/images/upwork-screenshot.jpg';
        
        return {
          slug,
          title,
          description: description || `Learn more about ${title}`,
          date: data.date || new Date().toISOString().split('T')[0],
          author: data.author || 'ToxiGuard Team',
          tags: data.tags || ['freelancing', 'client protection'],
          readingTime,
          image: defaultImage, // Use default image instead of data.image
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

  // Сопоставляем готовые статьи с реальными постами если возможно
  const realPosts = blogPosts.map((post, index) => {
    const matchedArticle = articles.find(a => a.title.toLowerCase().includes(post.title.toLowerCase()));
    return {
      ...post,
      category: matchedArticle?.category || "Guide",
      authorImage: matchedArticle?.author?.image || "",
      authorInitials: post.author.split(" ").map(name => name[0]).join("")
    };
  });

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
            blogPost: realPosts.map(post => ({
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              author: {
                '@type': 'Person',
                name: post.author,
              },
              image: post.image,
              url: `https://toxiguard.site/blog/${post.slug}`,
              keywords: post.tags?.join(', '),
            })),
          })
        }}
      />
      
      <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950/50 pt-32">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center mb-20">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                ToxiGuard Blog
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Insights, guides, and stories to help you navigate the freelance world safely and successfully.
              </p>
            </div>
          
            {realPosts.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Featured Articles</h2>
                <div className="grid grid-cols-1 gap-12">
                  <Link 
                    href={`/blog/${realPosts[0].slug}`}
                    className="flex flex-col md:flex-row gap-8 hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    <div 
                      className="bg-muted rounded-lg aspect-video bg-cover bg-center md:w-2/3"
                      style={{ backgroundImage: `url(${realPosts[0].image})` }}
                    />
                    <div className="flex flex-col justify-center md:w-1/3 gap-6">
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">{realPosts[0].category}</Badge>
                        <span className="text-sm text-muted-foreground">{formatDate(realPosts[0].date)}</span>
                      </div>
                      <h3 className="text-4xl font-semibold">{realPosts[0].title}</h3>
                      <p className="text-muted-foreground">{realPosts[0].description}</p>
                      <div className="flex items-center gap-3 mt-4">
                        <Avatar>
                          <AvatarImage src={realPosts[0].authorImage} alt={realPosts[0].author} />
                          <AvatarFallback>{realPosts[0].authorInitials}</AvatarFallback>
                        </Avatar>
                        <span>{realPosts[0].author}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
            
            {realPosts.length > 1 && (
              <div className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {realPosts.slice(1).map((post) => (
                    <Link 
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="flex flex-col gap-4 hover:opacity-90 transition-opacity cursor-pointer group"
                    >
                      <div 
                        className="bg-muted rounded-lg aspect-video bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${post.image})` }}
                      >
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-lg" />
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-sm text-muted-foreground">{formatDate(post.date)}</span>
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-muted-foreground text-sm">{post.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={post.authorImage} alt={post.author} />
                          <AvatarFallback>{post.authorInitials}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{post.author}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-6 text-center">Subscribe to Our Newsletter</h2>
              <div className="max-w-2xl mx-auto">
                <Newsletter />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
} 
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeftIcon, ClockIcon, CalendarIcon, TagIcon } from '@heroicons/react/24/outline';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Newsletter from '@/components/Newsletter';
import { formatDate } from '@/utils/date';
import { remark } from 'remark';
import html from 'remark-html';

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  authorTitle: string;
  tags: string[];
  readingTime: string;
  content: string;
  image: string;
};

// Generate metadata for the blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostData(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }
  
  return {
    title: `${post.title} | ToxiGuard Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.image.startsWith('/') ? `https://toxiguard.site${post.image}` : post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image.startsWith('/') ? `https://toxiguard.site${post.image}` : post.image,
    },
  };
}

// Get blog post data
async function getPostData(slug: string): Promise<BlogPost | null> {
  const postDirectory = path.join(process.cwd(), 'src/data/blog-posts');
  
  try {
    const filePath = path.join(postDirectory, `${slug}.md`);
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
    
    // Use a default image since we don't have the actual images
    const defaultImage = '/images/upwork-screenshot.jpg';
    
    // Process markdown content to HTML using remark
    const processedContent = content
      .replace(/^# .*$/m, '') // Remove the title (h1) as we display it separately
      .trim();
    
    // Convert markdown to HTML using remark
    const processedHtml = await remark()
      .use(html)
      .process(processedContent);
    
    const contentHtml = processedHtml.toString();
    
    return {
      slug,
      title,
      description,
      date: data.date || new Date().toISOString().split('T')[0],
      author: data.author || 'ToxiGuard Team',
      authorTitle: data.authorTitle || 'Freelance Protection Experts',
      tags: data.tags || ['freelancing', 'client protection'],
      readingTime,
      content: contentHtml,
      image: defaultImage,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const postDirectory = path.join(process.cwd(), 'src/data/blog-posts');
  
  try {
    const filenames = fs.readdirSync(postDirectory);
    return filenames
      .filter(filename => filename.endsWith('.md'))
      .map(filename => ({
        slug: filename.replace(/\.md$/, ''),
      }));
  } catch (error) {
    console.error('Error generating static paths:', error);
    return [];
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
              >
                <ChevronLeftIcon className="w-4 h-4 mr-1" />
                Back to Blog
              </Link>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-gray-600 text-sm gap-4 mb-6">
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  <time dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                </div>
                
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  {post.readingTime}
                </div>
                
                <div className="flex items-center">
                  <span className="font-medium">{post.author}</span>
                </div>
              </div>
              
              {post.image && (
                <div className="mb-8 rounded-xl overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-auto object-cover" 
                  />
                </div>
              )}
            </div>
            
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 flex-wrap mb-6">
                <TagIcon className="w-4 h-4 text-gray-600" />
                {post.tags.map(tag => (
                  <Link 
                    key={tag}
                    href={`/blog/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}
                    className="bg-gray-100 text-gray-700 py-1 px-2 rounded-md text-sm hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {post.author.split(' ').map(name => name[0]).join('')}
                  </span>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg">{post.author}</h3>
                  <p className="text-gray-600 mb-2">{post.authorTitle}</p>
                  <p className="text-sm">Expert in freelance client management, protection strategies, and business growth.</p>
                </div>
              </div>
            </div>
          </article>
          
          <div className="max-w-4xl mx-auto px-4 mt-16">
            <h2 className="text-2xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <Newsletter />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 
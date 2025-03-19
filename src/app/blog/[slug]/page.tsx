import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Newsletter from '@/components/Newsletter';
import { formatDate } from '@/utils/date';
import { remark } from 'remark';
import html from 'remark-html';
import { BlogArticle } from '@/components/ui/blog-article';

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
    const readingTime = Math.ceil(words / 200) + ' min';
    
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
      image: data.image || defaultImage,
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
  
  const category = post.tags && post.tags.length > 0 ? post.tags[0] : 'Guide';
  
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ChevronLeftIcon className="w-4 h-4 mr-1" />
              Back to Blog
            </Link>
          </div>
          
          <BlogArticle 
            title={post.title}
            content={post.content}
            image={post.image}
            author={{
              name: post.author,
              role: post.authorTitle
            }}
            date={formatDate(post.date)}
            readTime={post.readingTime}
            category={category}
            tags={post.tags}
          />
          
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6">Subscribe to our newsletter</h2>
            <Newsletter />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 
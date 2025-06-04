import Hero from '@/components/Hero'
import ComingSoonSection from '@/components/ComingSoonSection'
import FAQSection from '@/components/FAQSection'
import RoadmapSection from '@/components/RoadmapSection'
import ProblemSection from '@/components/ProblemSection'
import DemoSection from '@/components/DemoSection'
import WaitlistSection from '@/components/WaitlistSection'
import SuccessStories from '@/components/SuccessStories'
import { Blog } from '@/components/ui/blog-section-with-rich-preview'
import HowItWorksSection from '@/components/HowItWorksSection'
import MetricsSection from '@/components/MetricsSection'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'
import Link from 'next/link'
import TestimonialsSection from '@/components/TestimonialsSectionWrapper'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Обновленные SEO-метаданные на английском языке
export const metadata = {
  title: 'ToxiGuard: AI Risk Shield for Upwork Freelancers & Agencies',
  description:
    'Detect toxic clients on Upwork with ToxiGuard AI. Real-time risk analysis for freelancers and agencies. Payment protection and red flag alerts. Join 8214+ users who avoid bad clients.',
  keywords: [
    'protection against toxic clients',
    'AI for freelancers',
    'AI for agencies',
    'project risk analysis',
    'secure contracts for freelancers',
    'upwork agency protection',
    'how to avoid toxic clients',
    'payment protection',
    'AI risk scanner',
    'upwork risk shield'
  ],
};

export default function Home() {
  let latestPosts: { slug: string; title: string; date: string }[] = [];
  try {
    const postsDirectory = path.join(process.cwd(), 'src/data/blog-posts');
    const filenames = fs.readdirSync(postsDirectory);
    latestPosts = filenames
      .filter(filename => filename.endsWith('.md'))
      .map(filename => {
        const slug = filename.replace(/\.md$/, '');
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        let title = data.title;
        if (!title) {
          const titleMatch = content.match(/^# (.*)/m);
          title = titleMatch ? titleMatch[1] : 'Untitled';
        }
        return {
          slug,
          title,
          date: data.date || new Date().toISOString().split('T')[0],
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  } catch (e) {}
  return (
    <>
      <Script id="schema-organization" type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ToxiGuard",
          "url": "https://toxiguard.site",
          "logo": "https://toxiguard.site/logo.png",
          "sameAs": [
            "https://twitter.com/toxiguard",
            "https://linkedin.com/company/toxiguard",
            "https://facebook.com/toxiguard",
            "https://www.tiktok.com/@toxiguard",
            "https://www.instagram.com/toxiguard",
            "https://www.youtube.com/@toxiguard"
          ]
        }
      `}
      </Script>
      
      <Script id="schema-product" type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "ToxiGuard AI Protection",
          "description": "AI-powered protection system for freelancers and agencies against toxic clients and payment risks on Upwork",
          "image": "https://toxiguard.site/og-image.jpg",
          "brand": {
            "@type": "Brand",
            "name": "ToxiGuard"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "852"
          },
          "offers": {
            "@type": "Offer",
            "url": "https://toxiguard.site/pricing",
            "priceCurrency": "USD",
            "price": "9.00",
            "priceValidUntil": "2024-12-31",
            "availability": "https://schema.org/InStock"
          }
        }
      `}
      </Script>
      
      <Script id="schema-video-demo" type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "name": "ToxiGuard AI Risk Scanner Demo",
          "description": "Watch a demo of ToxiGuard's AI instantly analyzing project requirements to identify potential risks for freelancers and agencies on Upwork.",
          "thumbnailUrl": "https://toxiguard.site/images/demo-video-thumbnail.jpg",
          "uploadDate": "2025-05-01T08:00:00+00:00",
          "duration": "PT1M0S",
          "contentUrl": "https://toxiguard.site/demo.mp4",
          "embedUrl": "https://toxiguard.site/demo",
          "publisher": {
            "@type": "Organization",
            "name": "ToxiGuard",
            "logo": {
              "@type": "ImageObject",
              "url": "https://toxiguard.site/logo.png"
            }
          }
        }
      `}
      </Script>
      
      <Navbar />
      <main>
        <Hero />
        <DemoSection />
        <HowItWorksSection />
        <ProblemSection />
        <SuccessStories />
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Latest from the blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestPosts.map(post => (
                <div key={post.slug} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                  <a href={`/blog/${post.slug}`} className="text-xl font-semibold text-blue-600 hover:underline block mb-2">{post.title}</a>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/blog" className="text-blue-600 hover:underline font-medium">All blog articles →</Link>
            </div>
          </div>
        </section>
        <Blog />
        <RoadmapSection />
        <MetricsSection />
        <TestimonialsSection />
        <ComingSoonSection />
        <FAQSection />
        <WaitlistSection />
      </main>
      <Footer />

      <Script id="faq-structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How does ToxiGuard protect freelancers and agencies?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ToxiGuard uses AI to analyze project descriptions, client history, and communication patterns to identify potential risks before you accept a project. For agencies, it provides team-wide protection and analytics."
              }
            },
            {
              "@type": "Question",
              "name": "Is ToxiGuard free to use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, ToxiGuard offers a free plan with basic protection features. Premium plans with advanced features are available for professional freelancers and agencies."
              }
            },
            {
              "@type": "Question",
              "name": "Which freelance platforms does ToxiGuard work with?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ToxiGuard currently works with Upwork, Freelancer, and Fiverr, with more platforms being added regularly."
              }
            },
            {
              "@type": "Question", 
              "name": "Can ToxiGuard protect agency accounts with multiple team members?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, ToxiGuard offers special features for agencies to protect team-managed accounts on Upwork with centralized risk monitoring and client insights for all team members."
              }
            }
          ]
        })}
      </Script>
    </>
  )
} 
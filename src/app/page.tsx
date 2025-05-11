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

// Обновленные SEO-метаданные на английском языке
export const metadata = {
  title: 'ToxiGuard: AI Protection Against Toxic Clients & Payment Risks for Freelancers',
  description:
    'Protect your business with ToxiGuard — AI-driven project analysis, risk prevention, and secure contracts. Join over 8,214 freelancers who save time and money.',
  keywords: [
    'protection against toxic clients',
    'AI for freelancers',
    'project risk analysis',
    'secure contracts for freelancers',
    'how to avoid toxic clients',
    'payment protection',
    'AI risk scanner'
  ],
};

export default function Home() {
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
          "description": "AI-powered protection system for freelancers against toxic clients and payment risks",
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
          "description": "Watch a demo of ToxiGuard's AI instantly analyzing project requirements to identify potential risks for freelancers on platforms like Upwork.",
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
              "name": "How does ToxiGuard protect freelancers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ToxiGuard uses AI to analyze project descriptions, client history, and communication patterns to identify potential risks before you accept a project."
              }
            },
            {
              "@type": "Question",
              "name": "Is ToxiGuard free to use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, ToxiGuard offers a free plan with basic protection features. Premium plans with advanced features are available for professional freelancers."
              }
            },
            {
              "@type": "Question",
              "name": "Which freelance platforms does ToxiGuard work with?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ToxiGuard currently works with Upwork, Freelancer, and Fiverr, with more platforms being added regularly."
              }
            }
          ]
        })}
      </Script>
    </>
  )
} 
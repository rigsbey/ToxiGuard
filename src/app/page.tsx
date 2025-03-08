import Hero from '@/components/Hero'
import ComingSoonSection from '@/components/ComingSoonSection'
import FAQSection from '@/components/FAQSection'
import RoadmapSection from '@/components/RoadmapSection'
import ProblemSection from '@/components/ProblemSection'
import DemoSection from '@/components/DemoSection'
import WaitlistSection from '@/components/WaitlistSection'
import SuccessStories from '@/components/SuccessStories'
import BlogPreview from '@/components/BlogSection'
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
      <Navbar />
      <main>
        <Hero />
        <DemoSection />
        <HowItWorksSection />
        <ProblemSection />
        <SuccessStories />
        <BlogPreview />
        <RoadmapSection />
        <MetricsSection />
        <TestimonialsSection />
        <ComingSoonSection />
        <FAQSection />
        <WaitlistSection />
      </main>
      <Footer />

      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "ToxiGuard",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "120"
          }
        })}
      </Script>
    </>
  )
} 
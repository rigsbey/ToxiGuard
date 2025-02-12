import Hero from '@/components/Hero'
import ComingSoonSection from '@/components/ComingSoonSection'
import FAQSection from '@/components/FAQSection'
import RoadmapSection from '@/components/RoadmapSection'
import ProblemSection from '@/components/ProblemSection'
import DemoSection from '@/components/DemoSection'
import WaitlistSection from '@/components/WaitlistSection'
import SuccessStories from '@/components/SuccessStories'
import HowItWorksSection from '@/components/HowItWorksSection'
import MetricsSection from '@/components/MetricsSection'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const TestimonialsSection = dynamic(
  () => import('@/components/TestimonialsSection'),
  { ssr: false }
);

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
        <RoadmapSection />
        <MetricsSection />
        <TestimonialsSection />
        <ComingSoonSection />
        <FAQSection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  )
} 
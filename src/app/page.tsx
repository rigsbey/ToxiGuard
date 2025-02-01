import Hero from '@/components/Hero'
import ComingSoonSection from '@/components/ComingSoonSection'
import FAQSection from '@/components/FAQSection'
import RoadmapSection from '@/components/RoadmapSection'
import ComingSoonBanner from '@/components/ComingSoonBanner'
import ProblemSection from '@/components/ProblemSection'
import DemoSection from '@/components/DemoSection'
import WaitlistSection from '@/components/WaitlistSection'
import SuccessStories from '@/components/SuccessStories'
import HowItWorksSection from '@/components/HowItWorksSection'

export default function Home() {
  return (
    <>
      <ComingSoonBanner />
      <main>
        <Hero />
        <HowItWorksSection />
        <ProblemSection />
        <DemoSection />
        <SuccessStories />
        <RoadmapSection />
        <ComingSoonSection />
        <FAQSection />
        <WaitlistSection />
      </main>
    </>
  )
} 
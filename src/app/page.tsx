import Hero from '@/components/Hero'
import PricingWidget from '@/components/PricingWidget'
import ComingSoonSection from '@/components/ComingSoonSection'
import FAQSection from '@/components/FAQSection'
import RoadmapSection from '@/components/RoadmapSection'
import ComingSoonBanner from '@/components/ComingSoonBanner'

export default function Home() {
  return (
    <>
      <ComingSoonBanner />
      <main>
        <Hero />
        <PricingWidget />
        <RoadmapSection />
        <ComingSoonSection />
        <FAQSection />
        {/* Other sections */}
      </main>
    </>
  )
} 
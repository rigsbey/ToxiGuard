import PricingSection from '@/components/PricingSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata = {
  title: 'ToxiGuard Pricing: Affordable AI Protection Plans for Freelancers',
  description: 'Choose the perfect plan for your freelance business. Starting at just $9/month, ToxiGuard helps you avoid toxic clients and payment risks with AI-powered protection.',
  keywords: [
    'toxiguard pricing',
    'freelance protection plans',
    'AI client screening cost',
    'affordable freelancer protection',
    'payment protection pricing',
    'client risk analysis plans'
  ],
  openGraph: {
    title: 'ToxiGuard Pricing - Simple Plans for Freelancer Protection',
    description: 'Affordable protection against toxic clients and payment risks. ROI after preventing just one bad project.',
    type: 'website'
  }
};

export default function PricingPage() {
  return (
    <>
      <Script id="pricing-schema" type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "PriceSpecification",
          "name": "ToxiGuard Pricing Plans",
          "description": "Pricing plans for ToxiGuard freelancer protection platform",
          "offers": [
            {
              "@type": "Offer",
              "name": "Starter Plan",
              "description": "Basic protection for new freelancers",
              "price": "9.00",
              "priceCurrency": "USD",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "name": "Professional Plan",
              "description": "Complete protection for active freelancers",
              "price": "19.00",
              "priceCurrency": "USD",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "name": "Agency Plan",
              "description": "Team protection for freelance agencies",
              "price": "49.00",
              "priceCurrency": "USD",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock"
            }
          ]
        }
      `}
      </Script>
      <Navbar />
      <main>
        <PricingSection />
      </main>
      <Footer />
    </>
  );
} 
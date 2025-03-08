import PricingSection from '@/components/PricingSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Pricing - ToxiGuard',
  description: 'Simple and transparent pricing plans for freelancers of all levels'
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingSection />
      </main>
      <Footer />
    </>
  );
} 
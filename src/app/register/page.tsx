import { Suspense } from 'react';
import RegisterForm from '@/components/RegisterForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Sign Up for ToxiGuard - Protect Your Freelance Business Today',
  description: 'Create your ToxiGuard account in under 2 minutes and start protecting your freelance business from toxic clients and payment risks with our AI-powered tools.',
  robots: 'index, follow',
  openGraph: {
    title: 'Join ToxiGuard - AI Protection for Freelancers',
    description: 'Start protecting your freelance business today. Free trial available.',
    type: 'website'
  }
};

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-32">
        <Suspense fallback={
          <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)]">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-10"></div>
              <div className="space-y-8">
                <div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                </div>
                <div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                </div>
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        }>
          <RegisterForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
} 
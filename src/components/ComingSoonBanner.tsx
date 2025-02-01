'use client';

import ClientButton from './ClientButton';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { METRICS } from '@/config/metrics';

export default function ComingSoonBanner() {
  const scrollToWaitlist = useScrollToSection('waitlist-section');

  return (
    <div className="fixed top-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 z-50 group">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">🚀 {METRICS.remainingSpots} Free Spots Left</span>
            <span className="text-white/80 text-sm">| Next batch: ${49}/mo</span>
          </div>
          
          <ClientButton 
            onClick={scrollToWaitlist}
            className="relative flex items-center gap-2 px-6 py-2 bg-white text-blue-600 
                     rounded-full text-sm font-bold hover:scale-105 transition-transform
                     shadow-lg hover:shadow-blue-200"
          >
            <span>Join Waitlist Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/>
            </svg>
          </ClientButton>
        </div>
      </div>
    </div>
  );
} 
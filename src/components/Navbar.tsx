'use client';

import Link from 'next/link';
import { useScrollToSection } from '@/hooks/useScrollToWaitlist';

export default function Navbar() {
  const scrollToFAQ = useScrollToSection('faq-section');
  const scrollToHowItWorks = useScrollToSection('how-it-works-section');
  const scrollToDemo = useScrollToSection('demo-section');
  const scrollToBlog = useScrollToSection('blog-section');

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <a className="grow basis-0 font-semibold flex items-center gap-2" href="/">
            <span className="text-xl">🛡️</span>
            <span className="text-xl font-semibold">ToxiGuard</span>
          </a>
          
          <div className="relative hidden lg:flex flex-row gap-2 px-2 py-0.5">
            <div className="absolute inset-0 -z-[1]">
              <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-200 drop-shadow-sm transition-all bg-white/75 backdrop-blur-lg" />
            </div>
            
            <a 
              className="block rounded-md px-3 py-1.5 text-sm text-gray-900/60 hover:text-gray-900/80 transition-colors ease-out cursor-pointer"
              onClick={scrollToHowItWorks}
            >
              How It Works
            </a>
            <a 
              className="block rounded-md px-3 py-1.5 text-sm text-gray-900/60 hover:text-gray-900/80 transition-colors ease-out cursor-pointer"
              onClick={scrollToDemo}
            >
              Examples
            </a>
            <a 
              className="block rounded-md px-3 py-1.5 text-sm text-gray-900/60 hover:text-gray-900/80 transition-colors ease-out cursor-pointer"
              onClick={scrollToBlog}
            >
              Resources
            </a>
            <a 
              className="block rounded-md px-3 py-1.5 text-sm text-gray-900/60 hover:text-gray-900/80 transition-colors ease-out cursor-pointer"
              onClick={scrollToFAQ}
            >
              FAQ
            </a>
          </div>

          <div className="hidden grow basis-0 justify-end lg:flex">
            <a className="animate-fade-in rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-gray-800 hover:ring-4 hover:ring-gray-200" href="/signin">
              Try for free
            </a>
          </div>

          <button className="lg:hidden p-2 rounded-full hover:bg-gray-200 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-5 w-5 text-gray-600">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 
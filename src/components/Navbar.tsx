'use client';

import Link from 'next/link';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { SECTIONS } from '@/constants/sections';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToFAQ = useScrollToSection('faq-section');
  const scrollToHowItWorks = useScrollToSection('how-it-works-section');
  const scrollToRiskScanner = useScrollToSection(SECTIONS.RISK_SCANNER);
  const scrollToResources = useScrollToSection(SECTIONS.RESOURCES);
  const scrollToWaitlist = useScrollToSection('waitlist-section');

  const menuItems = [
    { label: 'How It Works', onClick: scrollToHowItWorks },
    { label: 'Examples', onClick: scrollToRiskScanner },
    { label: 'Resources', onClick: scrollToResources },
    { label: 'FAQ', onClick: scrollToFAQ },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-lg border-b border-gray-100">
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
            
            {menuItems.map((item) => (
              <button 
                key={item.label}
                className="block rounded-md px-3 py-1.5 text-sm text-gray-900/60 hover:text-gray-900/80 transition-colors ease-out cursor-pointer"
                onClick={item.onClick}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-[56px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className="w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                onClick={() => {
                  item.onClick();
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              className="w-full mt-2 px-4 py-2 bg-toxic-red text-white rounded-lg hover:bg-red-600 transition-colors"
              onClick={() => {
                scrollToWaitlist();
                setIsMenuOpen(false);
              }}
            >
              Get Early Access
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 
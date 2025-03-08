'use client';

import Image from 'next/image'
import { useState } from 'react';
import { CheckBadgeIcon, ArrowRightIcon, ShieldCheckIcon, CurrencyDollarIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useScrollToSection } from '@/hooks/useScrollToWaitlist';
import Link from 'next/link';
import { METRICS } from '@/config/metrics';
import ClientButton from './ClientButton';
import AnimatedRotatingText from './AnimatedRotatingText';
import Navbar from './Navbar';
import LaurelBadge from './LaurelBadge';
import TypewriterText from './TypewriterText';

export default function Hero() {
  const scrollToWaitlist = useScrollToSection('waitlist-section');
  const scrollToHowItWorks = useScrollToSection('how-it-works-section');

  // Новый дизайн карточек
  const benefits = [
    { 
      icon: "🔍", 
      title: "Specs Analysis",
      text: "50+ requirement patterns check",
      color: "from-blue-100 to-blue-50",
      border: "border-blue-200"
    },
    { 
      icon: "⏱", 
      title: "Deadline Audit", 
      text: "Reality-based timeline estimation",
      color: "from-blue-100 to-blue-50",
      border: "border-blue-200"
    },
    { 
      icon: "📑", 
      title: "Contract Review",
      text: "Payment terms & obligations check",
      color: "from-blue-100 to-blue-50",
      border: "border-blue-200"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center py-16 sm:py-24 lg:py-32 gap-12 sm:gap-16 lg:gap-24 px-4">
      <section className="text-center max-w-3xl">
        <LaurelBadge />
        <h1 className="text-[1.75rem] font-bold sm:text-6xl text-center leading-[1.25] sm:leading-[1.15] mt-16 mb-8">
          Smart Client Protection<br/>
          for <TypewriterText />
        </h1>
        <p className="text-gray-500 text-sm sm:text-lg mt-6 sm:mt-8 mb-12">
          AI-powered project analysis • Risk prevention • Secure contracts<br/>
          Get customizable protection perfect for freelancers and agencies
        </p>
      </section>

      <section className="flex flex-col items-center pb-8 sm:pb-12">
        <button 
          onClick={scrollToWaitlist}
          className="animate-fade-in rounded-full border border-black bg-black px-8 py-4 text-sm text-white transition-all hover:bg-gray-800 hover:ring-4 hover:ring-gray-200 inline-flex items-center whitespace-nowrap"
        >
          Start Protecting Now
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="lucide lucide-arrow-right ml-3 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
          </svg>
        </button>
        <p className="text-xs text-gray-500 mt-4 flex items-center">
          Trusted by 8,214+ Active Freelancers
        </p>
      </section>

      <div className="stats-container w-full mb-8">
        
      </div>
    </div>
  )
} 
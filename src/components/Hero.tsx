'use client';

import Image from 'next/image'
import { useState } from 'react';
import { CheckBadgeIcon, ArrowRightIcon, ShieldCheckIcon, CurrencyDollarIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import Link from 'next/link';
import { METRICS } from '@/config/metrics';
import ClientButton from './ClientButton';

export default function Hero() {
  const scrollToWaitlist = useScrollToSection('waitlist-section');
  const scrollToHowItWorks = useScrollToSection('how-it-works-section');

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          <span className="block mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 
                          leading-[1.15] tracking-tight px-2">
            Stop Client Nightmares
          </span>
          <span className="text-2xl md:text-3xl font-medium text-gray-600 mt-4">
            AI-Powered Protection for Freelancers
          </span>
        </h1>

        {/* Бейдж */}
        <div className="mb-12">
          <span className="inline-block bg-blue-50 text-blue-800 px-8 py-3 rounded-full 
                         text-base font-medium border border-blue-100">
            🛡️ Protected ${(METRICS.PROTECTED_AMOUNT / 1000).toFixed(0)}k+ Payments
          </span>
        </div>

        {/* Преимущества */}
        <div className="max-w-5xl mx-auto mb-16">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {benefits.map((benefit, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 
                          hover:border-blue-200 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Обновленная CTA с автоскроллом */}
        <div className="flex justify-center gap-4 mt-12">
          <ClientButton 
            onClick={scrollToWaitlist}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-xl"
          >
            Join Now →
          </ClientButton>
          <ClientButton 
            onClick={scrollToHowItWorks}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-blue-100 hover:border-blue-200 transition-all cursor-pointer"
          >
            How It Works
          </ClientButton>
        </div>

        {/* Добавляем разделитель с отступами */}
        <div className="my-12 relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200/60"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-500">Limited availability</span>
          </div>
        </div>

        {/* Обновленный Progress Bar с увеличенными отступами */}
        <div className="max-w-md mx-auto mt-8 mb-12">
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-500" 
              style={{ width: `${METRICS.progressPercentage}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-3">
            {METRICS.filledSpots} early members • {METRICS.remainingSpots} spots remaining
          </p>
        </div>

        {/* Доверительные элементы */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
            🔒 256-bit Encryption
          </div>
          <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
            ✅ GDPR Compliant
          </div>
        </div>
      </div>
    </section>
  )
} 
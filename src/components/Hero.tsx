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
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Заголовок с акцентом на действие */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          <span className="block mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 
                min-h-[1.2em] align-middle">
            Stop Client Nightmares
          </span>
          <span className="text-2xl md:text-3xl font-medium text-gray-600">
            AI-Powered Protection for Freelancers
          </span>
        </h1>

        {/* Добавить после заголовка */}
        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 px-6 py-3 rounded-full text-sm font-medium">
            🚀 {METRICS.PROJECTS_ANALYZED}+ Projects Protected
          </span>
        </div>

        {/* Список преимуществ */}
        <div className="max-w-3xl mx-auto mb-12">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <li className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <span className="text-2xl mr-3">🔍</span>
              <div>
                <h3 className="font-semibold">Red Flag Detection</h3>
                <p className="text-sm text-gray-600">3-second AI analysis</p>
              </div>
            </li>
            <li className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <span className="text-2xl mr-3">⏱️</span>
              <div>
                <h3 className="font-semibold">{METRICS.AVG_HOURS_SAVED} Hours/Month</h3>
                <p className="text-sm text-gray-600">Average time saved</p>
              </div>
            </li>
            <li className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <span className="text-2xl mr-3">💸</span>
              <div>
                <h3 className="font-semibold">{(METRICS.DISPUTE_IMPROVEMENT * 100).toFixed(0)}% Fewer Delays</h3>
                <p className="text-sm text-gray-600">Payment protection</p>
              </div>
            </li>
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
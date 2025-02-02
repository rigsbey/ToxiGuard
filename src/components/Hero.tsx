'use client';

import Image from 'next/image'
import { useState } from 'react';
import { CheckBadgeIcon, ArrowRightIcon, ShieldCheckIcon, CurrencyDollarIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useScrollToSection } from '@/hooks/useScrollToWaitlist';
import Link from 'next/link';
import { METRICS } from '@/config/metrics';
import ClientButton from './ClientButton';

export default function Hero() {
  const scrollToWaitlist = useScrollToSection('waitlist-section');
  const scrollToHowItWorks = useScrollToSection('how-it-works-section');
  const scrollToPricing = useScrollToSection('pricing');

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
    <section className="relative pt-20 md:pt-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 md:mb-12 mt-6">
          <div className="mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 leading-tight">
            <span className="block">Smart Client Protection</span>
            <span className="block bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              for Freelancers
            </span>
          </div>
          <span className="text-lg md:text-xl font-medium text-gray-600 mt-3 block">
            AI-powered project analysis • Risk prevention • Secure contracts
          </span>
        </h1>

        {/* Обновленные метрики */}
        <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto mb-8 md:mb-12">
          <div className="text-center p-4 bg-white rounded-xl border border-blue-100">
            <div className="text-3xl font-bold text-blue-600">10k+</div>
            <div className="text-sm text-gray-600">Protected Freelancers</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-blue-100">
            <div className="text-3xl font-bold text-blue-600">98%</div>
            <div className="text-sm text-gray-600">Risk Detection</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-blue-100">
            <div className="text-3xl font-bold text-blue-600">15h+</div>
            <div className="text-sm text-gray-600">Monthly Saved</div>
          </div>
        </div>

        {/* Преимущества */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8">
          <div className="p-6 bg-white rounded-xl border border-red-100">
            <div className="text-2xl mb-2">🔴</div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">AI Risk Scan</h3>
            <p className="text-gray-600">3-second project check</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-blue-100">
            <div className="text-2xl mb-2">💸</div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">Payment Shield</h3>
            <p className="text-gray-600">256-bit encryption</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-black/10">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">Smart Insights</h3>
            <p className="text-gray-600">Save 15+ hours/month</p>
          </div>
        </div>

        {/* Новая CTA */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-12 md:mt-16">
          <ClientButton 
            onClick={scrollToWaitlist}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all shadow-lg"
          >
            Join Now →
          </ClientButton>
          <ClientButton 
            onClick={scrollToHowItWorks}
            className="bg-gray-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg border-2 border-gray-800 hover:bg-gray-800 transition-all"
          >
            How It Works
          </ClientButton>
        </div>

        {/* Обновленный Progress Bar с увеличенными отступами */}
        <div className="max-w-md mx-auto mt-8 mb-8">
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
        <div className="flex flex-wrap justify-center gap-3 text-sm mt-8">
          {benefits.map((benefit, index) => (
            <motion.li 
              key={index}
              className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <span>{benefit.icon}</span>
              <span className="ml-2">{benefit.title}</span>
              {benefit.text && (
                <div className="absolute bottom-full mb-2 hidden group-hover:block 
                               bg-gray-900 text-white text-xs px-2 py-1 rounded">
                  {benefit.text}
                  <div className="absolute w-2 h-2 bg-gray-900 rotate-45 -bottom-1 left-1/2 -ml-1"></div>
                </div>
              )}
            </motion.li>
          ))}
        </div>
      </div>
    </section>
  )
} 
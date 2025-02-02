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
  const scrollToHowItWorks = useScrollToSection('how-it-works');
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
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          <div className="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 leading-tight">
            <span className="block">Smart Client Protection</span>
            <span className="block">for Freelancers</span>
          </div>
          <span className="text-xl md:text-2xl font-medium text-gray-600 mt-4 block">
            AI-powered project analysis • Risk prevention • Secure contracts
          </span>
        </h1>

        {/* Обновленные метрики */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
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
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-white rounded-xl border border-purple-100">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="text-lg font-bold mb-2">AI Risk Scan</h3>
            <p className="text-gray-600">3-second project check</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-blue-100">
            <div className="text-2xl mb-2">💸</div>
            <h3 className="text-lg font-bold mb-2">Payment Shield</h3>
            <p className="text-gray-600">256-bit encryption</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-green-100">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="text-lg font-bold mb-2">Smart Insights</h3>
            <p className="text-gray-600">Save 15+ hours/month</p>
          </div>
        </div>

        {/* Новая CTA */}
        <div className="text-center space-y-4">
          <ClientButton 
            onClick={scrollToWaitlist}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:to-blue-600 
                     text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg
                     transform hover:scale-105 transition-all"
          >
            🚀 Get Early Access
          </ClientButton>
          <p className="text-sm text-gray-500">
            No credit card required • Cancel anytime
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <ShieldCheckIcon className="w-5 h-5 text-green-500" />
            <span>Trusted by Upwork Top Freelancers</span>
          </div>
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

        <ClientButton 
          onClick={scrollToHowItWorks}
          className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-xl"
        >
          Learn More ↓
        </ClientButton>
      </div>
    </section>
  )
} 
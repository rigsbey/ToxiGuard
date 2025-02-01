'use client';

import { useState } from 'react';
import MobilePricingCarousel from './MobilePricingCarousel';

export default function PricingWidget() {
  const [toxicity, setToxicity] = useState(0);

  const analyzeText = (text: string) => {
    const newToxicity = Math.min(text.length * 2, 100);
    setToxicity(newToxicity);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <span className="bg-blue-50 text-primary-blue px-4 py-2 rounded-full text-sm font-medium">
          Pricing & Plans
        </span>
        <h2 className="text-3xl font-bold mt-6 mb-4">
          Start Saving Time & Money Today
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          91% users recover $7+ on every $1 invested in ToxiGuard
        </p>
      </div>
      
      <div className="flex flex-col gap-8 md:hidden">
        <MobilePricingCarousel />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-primary-blue transition-all">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">Free</span>
              <span className="text-gray-500">/ month</span>
            </div>
            <p className="text-gray-600 mt-4">Perfect for trying out ToxiGuard</p>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
              5 project scans/month
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
              Basic risk detection
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
              Email support
            </li>
          </ul>

          <button className="w-full bg-white border-2 border-primary-blue text-primary-blue py-3 rounded-full font-medium 
                           hover:bg-primary-blue hover:text-white transition-colors">
            Start Free →
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary-blue relative transform hover:scale-105 transition-all">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-blue text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Professional</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">$7</span>
              <span className="text-gray-500">/ month</span>
            </div>
            <p className="text-green-600 font-medium mt-2">Save $840/year on average</p>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
              Unlimited project scans
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
              Advanced AI detection
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
              Response templates
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
              Priority support
            </li>
          </ul>

          <button className="w-full bg-primary-blue text-white py-3 rounded-full font-medium hover:shadow-lg transition-shadow">
            Start 14-Day Free Trial →
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-primary-blue transition-all">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">$299</span>
              <span className="text-gray-500">/ month</span>
            </div>
            <p className="text-green-600 font-medium mt-2">Save $3,588/year on average</p>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
              Everything in Pro
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
              Team collaboration
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
              Custom integrations
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
              Dedicated support
            </li>
          </ul>

          <button className="w-full bg-white border-2 border-primary-blue text-primary-blue py-3 rounded-full font-medium 
                           hover:bg-primary-blue hover:text-white transition-colors">
            Contact Sales →
          </button>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-4">Still not sure? Try our free demo with no credit card required</p>
        <button className="bg-toxic-red text-white px-8 py-4 rounded-full hover:shadow-lg transition-shadow">
          Try Free Demo →
        </button>
      </div>
    </section>
  );
} 
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { METRICS } from '@/config/metrics';

const API_URL = process.env.NODE_ENV === 'development' 
  ? '/api/tally-proxy' 
  : 'https://api.tally.so/r/mBjL61';

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append('email', email);
      
      const response = await fetch(`https://script.google.com/macros/s/AKfycbwtgVj1y3Oia3wy19afi3p1xGehWAjy9Dnm_Y9GfkHueAv7gMw6MBNwzAh9ZYpy7FPL9g/exec?${params}`, {
        method: 'GET',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const result = await response.text();
      
      if (result === 'Email successfully added') {
        setIsSubmitted(true);
        setEmail('');
        window.trackEvent?.('waitlist_submitted');
      } else {
        throw new Error(result);
      }

    } catch (error) {
      console.error('Error:', error);
      alert(error instanceof Error 
        ? error.message 
        : 'An error occurred. Please try again later.'
      );
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-gray-200">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join {METRICS.CURRENT_SIGNUPS}+ 
            <span className="text-blue-600"> Early Adopters</span>
          </h2>
          
          {/* Статистика */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">
                {METRICS.PROJECTS_ANALYZED}+
              </div>
              <div className="text-gray-600 text-sm">Projects Analyzed</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">
                ${(METRICS.PROTECTED_AMOUNT / 1000).toFixed(1)}k
              </div>
              <div className="text-gray-600 text-sm">Protected</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">
                {METRICS.AVG_HOURS_SAVED}h
              </div>
              <div className="text-gray-600 text-sm">Monthly Saved</div>
            </div>
          </div>

          {/* Форма */}
          <form className="max-w-md mx-auto">
            <div className="relative">
              <input 
                type="email"
                className="w-full py-4 px-6 rounded-xl border border-gray-300 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         placeholder-gray-500 text-gray-900"
                placeholder="Your professional email"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 
                         text-white px-8 py-2.5 rounded-lg font-medium transition-all"
              >
                Join Now
              </button>
            </div>
          </form>

          <p className="text-sm text-gray-500 mt-6">
            <span className="inline-block mx-2">🔒 Strict Privacy</span>
            <span className="inline-block mx-2">⭐ Early Access</span>
            <span className="inline-block mx-2">🎁 Founder Perks</span>
          </p>
        </div>
      </div>
    </section>
  );
} 
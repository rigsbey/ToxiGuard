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
    <section id="waitlist-section" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join {METRICS.CURRENT_SIGNUPS}+ Early Adopters
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Be among the first {METRICS.TOTAL_SPOTS} to transform your freelance business
          </p>

          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="font-bold text-blue-800 text-2xl">
                {METRICS.PROJECTS_ANALYZED}+
              </div>
              <div className="text-sm">Projects Analyzed</div>
            </div>
            
            <div className="text-center">
              <div className="font-bold text-green-800 text-2xl">
                ${(METRICS.PROTECTED_AMOUNT / 1000).toFixed(1)}k
              </div>
              <div className="text-sm">Protected</div>
            </div>
            
            <div className="text-center">
              <div className="font-bold text-purple-800 text-2xl">
                {METRICS.AVG_HOURS_SAVED}h
              </div>
              <div className="text-sm">Monthly Saved</div>
            </div>
          </div>

          <form className="max-w-md mx-auto space-y-4">
            <input
              type="email"
              placeholder="Your best professional email"
              className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors text-lg"
            >
              Join Early Access →
            </button>
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
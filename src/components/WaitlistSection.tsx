'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { METRICS } from '@/config/metrics';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

// Using the real script ID
const SCRIPT_ID = 'AKfycbwtgVj1y3Oia3wy19afi3p1xGehWAjy9Dnm_Y9GfkHueAv7gMw6MBNwzAh9ZYpy7FPL9g';
const API_URL = `https://script.google.com/macros/s/${SCRIPT_ID}/exec`;

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      // Создаем URL с параметрами
      const params = new URLSearchParams({ email });
      const url = `${API_URL}?${params.toString()}`;

      // Возвращаемся к проверенному методу с Image
      const img = new Image();
      
      const promise = new Promise((resolve, reject) => {
        img.onload = () => resolve('success');
        img.onerror = () => {
          // Google Script всегда возвращает 404 при успехе
          resolve('success');
        };
        
        // Увеличиваем таймаут до 10 секунд
        setTimeout(() => reject(new Error('Request timeout')), 10000);
      });

      // Отправляем запрос
      img.src = url;
      
      await promise;
      
      // Если дошли до сюда - запрос успешен
      setIsSubmitted(true);
      setEmail('');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
      (window as any).trackEvent?.('waitlist_submitted');

    } catch (error) {
      console.error('[Waitlist] Submission Error:', error);
      alert('Failed to submit. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      id="waitlist-section"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Join 8,214+ Early Adopters
          </h2>
          
          {/* Statistics */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8 md:mb-12">
            {[
              { value: '1.2k', label: 'Projects Analyzed', icon: '📊' },
              { value: `$${(Number(METRICS.PROTECTED_AMOUNT || 15000) / 1000).toFixed(1)}k`, label: 'Protected', icon: '🛡️' },
              { value: '50h+', label: 'Monthly Saved', icon: '⏳' }
            ].map((metric, idx) => (
              <motion.div 
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-2 md:p-4 bg-gradient-to-b from-blue-50 to-white rounded-lg md:rounded-xl border border-blue-100 min-h-[100px] md:min-h-[120px] flex flex-col items-center justify-center"
              >
                <div className="text-xl md:text-2xl mb-1 md:mb-2">{metric.icon}</div>
                <div className="text-xl md:text-3xl font-bold text-gray-900 leading-tight">
                  {metric.value}
                </div>
                <div className="text-xs md:text-sm text-gray-600 leading-tight">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-2xl border border-blue-100">
              <h3 className="text-3xl font-bold text-center mb-6">
                Join 8,214 Freelancers Who Blocked
                <span className="block text-blue-600 mt-2">$15k+ Losses Last Month</span>
              </h3>
              
              <Link
                href="/register"
                className="inline-flex items-center justify-center w-full px-6 py-4 bg-blue-600 text-white rounded-xl font-medium
                          hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100/50 text-lg"
              >
                Sign Up Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-700 mb-6">
              Trusted by 1,200+ professionals from:
            </h3>
            <div className="flex flex-wrap justify-center gap-6 opacity-75">
              {['Upwork', 'Fiverr', 'Toptal', 'LinkedIn', 'Dribbble'].map((platform) => (
                <div 
                  key={platform}
                  className="px-4 py-2 bg-white rounded-full border border-gray-200 
                           text-gray-600 text-sm font-medium shadow-sm"
                >
                  {platform}
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            <span className="inline-block mx-2">🔒 Strict Privacy</span>
            <span className="inline-block mx-2">⭐ Early Access</span>
            <span className="inline-block mx-2">🎁 Founder Perks</span>
          </p>
        </div>
      </div>

      {showNotification && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-lg flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <div>
              <p className="font-medium text-green-800">Successfully joined!</p>
              <p className="text-sm text-green-700">Check your email for updates</p>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              className="text-green-600 hover:text-green-800 ml-4"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
} 
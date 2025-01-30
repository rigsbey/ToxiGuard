'use client';

import { useState } from 'react';

export default function PricingWidget() {
  const [toxicity, setToxicity] = useState(0);

  const analyzeText = (text: string) => {
    const newToxicity = Math.min(text.length * 2, 100);
    setToxicity(newToxicity);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">How ToxiGuard Works</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Левая колонка - Анализатор */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Project Brief Analyzer</h3>
          <textarea 
            className="w-full h-40 p-4 border rounded-xl mb-4 resize-none"
            placeholder="Strong create money for..."
            onChange={(e) => analyzeText(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Toxicity Score:</span>
            <div className="flex-1 bg-gray-100 rounded-full h-2">
              <div 
                className="h-full bg-gradient-to-r from-cyber-green to-toxic-red rounded-full transition-all duration-500"
                style={{ width: `${toxicity}%` }}
              />
            </div>
            <span className="text-sm font-medium">{toxicity}%</span>
          </div>
        </div>

        {/* Правая колонка - Фичи */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-blue-50 rounded-lg">
                <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">AI Toxicity Detection</h4>
                <p className="text-gray-600 text-sm">Identifies aggressive tone, threats, and unfair terms</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-blue-50 rounded-lg">
                <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Real-Time Alerts</h4>
                <p className="text-gray-600 text-sm">Get notified about potential red flags instantly</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-blue-50 rounded-lg">
                <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Response Templates</h4>
                <p className="text-gray-600 text-sm">Ready-to-use templates for polite declines or negotiations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing for Every Need</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-2">Professional</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$7</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                Unlimited analysis
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                Real-time scanning
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                Export reports
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                Email support
              </li>
            </ul>
            <button className="w-full bg-primary-blue text-white py-3 rounded-full font-medium">
              Join Waitlist
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-2">Agency</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$299</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                Unlimited checks
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                CRM integration
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                Team analytics
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                Priority support
              </li>
            </ul>
            <button className="w-full bg-white border border-gray-200 text-gray-900 py-3 rounded-full font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Protect Yourself from Toxic Clients?</h2>
        <p className="text-gray-600 mb-8">Join thousands of freelancers and agencies who trust ToxiGuard to save time and avoid conflicts.</p>
        <button className="bg-primary-blue text-white px-6 py-3 rounded-full">
          Get Early Access →
        </button>
      </div>
    </section>
  );
} 
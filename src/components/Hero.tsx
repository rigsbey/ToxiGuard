'use client';

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-[#FDF8F3] py-20">
      <div className="text-center mb-16">
        <h2 className="text-xl text-gray-600">Meet ToxiGuard</h2>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Protect Your Time
          <span className="block text-primary-blue">
            Let AI Filter Bad Clients
          </span>
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-white/5 px-6 py-3 rounded-full">
            <span className="text-2xl font-bold text-toxic-red">90%</span>
            <p className="text-sm text-gray-600">Faster Project Analysis</p>
          </div>
          <div className="bg-white/5 px-6 py-3 rounded-full">
            <span className="text-2xl font-bold text-toxic-red">20hrs</span>
            <p className="text-sm text-gray-600">Saved per Month</p>
          </div>
          <div className="bg-white/5 px-6 py-3 rounded-full">
            <span className="text-2xl font-bold text-toxic-red">50+</span>
            <p className="text-sm text-gray-600">Red Flags Detected</p>
          </div>
        </div>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          No more wasted hours on toxic clients. Analyze project briefs instantly for red flags, 
          unrealistic demands, and hidden costs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#14141F] text-white px-8 py-4 rounded-full 
                         text-lg font-medium hover:shadow-lg transition-shadow">
            Join Early Access →
          </button>
          <span className="text-sm text-gray-500">No Credit Card Required</span>
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="max-w-6xl mx-auto mt-32 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">Instant Analysis</h3>
            <p className="text-gray-600">Scan project descriptions in seconds for potential red flags</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">Smart Alerts</h3>
            <p className="text-gray-600">Get instant notifications about suspicious requirements</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">AI Templates</h3>
            <p className="text-gray-600">Professional response templates for declining toxic projects</p>
          </div>
        </div>
      </div>
    </section>
  )
} 
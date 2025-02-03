'use client';

import { motion } from 'framer-motion';

export default function PricingSection() {
  return (
    <section 
      id="pricing" 
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Simple Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 bg-white rounded-2xl border-2 border-blue-200"
          >
            <h3 className="text-2xl font-bold mb-4">Starter</h3>
            <div className="text-4xl font-bold mb-6">$49<span className="text-lg text-gray-500">/mo</span></div>
            <ul className="space-y-3 text-gray-600">
              <li>✓ 50 project scans</li>
              <li>✓ Basic risk analysis</li>
              <li>✓ Email support</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 bg-blue-600 rounded-2xl text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Professional</h3>
            <div className="text-4xl font-bold mb-6">$99<span className="text-lg opacity-75">/mo</span></div>
            <ul className="space-y-3">
              <li>✓ Unlimited projects</li>
              <li>✓ Advanced analytics</li>
              <li>✓ Priority support</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 bg-white rounded-2xl border-2 border-blue-200"
          >
            <h3 className="text-2xl font-bold mb-4">Agency</h3>
            <div className="text-4xl font-bold mb-6">Custom</div>
            <ul className="space-y-3 text-gray-600">
              <li>✓ Team management</li>
              <li>✓ API access</li>
              <li>✓ Dedicated support</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
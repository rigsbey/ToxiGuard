'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

interface FeatureListProps {
  children: React.ReactNode;
}

const FeatureList: React.FC<FeatureListProps> = ({ children }) => (
  <ul className="space-y-3 mb-8">
    {children}
  </ul>
);

export default function MobilePricingCarousel() {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex gap-4 w-max">
        {/* Free Plan */}
        <motion.div 
          className="w-[300px] bg-white p-6 rounded-xl shadow-sm"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-2">Free</h3>
          <p className="text-gray-600 mb-4">Perfect for trying out ToxiGuard</p>
          <div className="text-3xl font-bold mb-6">$0</div>
          <FeatureList>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-primary-blue" />
              <span>3 scans per month</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-primary-blue" />
              <span>Basic analysis</span>
            </li>
          </FeatureList>
          <button className="w-full bg-white border-2 border-primary-blue text-primary-blue py-3 rounded-full font-medium 
                         hover:bg-primary-blue hover:text-white transition-colors">
            Start Free →
          </button>
        </motion.div>

        {/* Pro Plan */}
        <motion.div 
          className="w-[300px] bg-gradient-to-b from-primary-blue to-blue-800 p-6 rounded-xl shadow-lg text-white"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-white text-primary-blue text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
            ⚡ MOST POPULAR
          </div>
          <h3 className="text-xl font-bold mb-2">Pro</h3>
          <p className="text-gray-200 mb-4">For active freelancers</p>
          <div className="text-3xl font-bold mb-6">$19<span className="text-base font-normal">/mo</span></div>
          <FeatureList>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-white" />
              <span>Unlimited scans</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 text-white" />
              <span>Advanced AI analysis</span>
            </li>
          </FeatureList>
          <button className="w-full bg-white text-primary-blue py-3 rounded-full font-medium hover:shadow-lg transition-shadow">
            Start Pro Trial →
          </button>
        </motion.div>
      </div>
    </div>
  );
} 
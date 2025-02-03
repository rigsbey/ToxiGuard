'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Clock, HandCoins, Scale } from 'lucide-react';
import { METRICS } from '@/config/metrics';

export default function HowItWorksSection() {
  const protections = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Risk Analysis",
      value: `${METRICS.RISK_ACCURACY * 100}%`,
      description: "prediction accuracy"
    },
    {
      icon: <HandCoins className="w-8 h-8 text-green-600" />,
      title: "Payment Protection",
      value: `$${(METRICS.PROTECTED_AMOUNT / 1000).toFixed(1)}k`,
      description: "secured"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "Time Savings",
      value: `${METRICS.AVG_HOURS_SAVED}h`,
      description: "monthly average saved"
    },
    {
      icon: <Scale className="w-8 h-8 text-orange-600" />,
      title: "Dispute Resolution",
      value: `${(METRICS.DISPUTE_IMPROVEMENT * 100).toFixed(0)}%`,
      description: "faster resolution"
    }
  ];

  return (
    <section 
      id="how-it-works-section" 
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How We Protect Your Business
          <p className="text-lg text-gray-600 mt-4 font-normal">
            AI-powered safeguards at every stage of your freelance workflow
          </p>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {protections.map((protection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 bg-white rounded-xl border border-blue-100 text-center"
            >
              <div className="flex justify-center mb-4">
                {protection.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{protection.title}</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {protection.value}
              </div>
              <p className="text-gray-600 text-sm">
                {protection.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
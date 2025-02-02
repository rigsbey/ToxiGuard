'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon, DocumentMagnifyingGlassIcon, UserGroupIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import ClientButton from './ClientButton';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { METRICS } from '@/config/metrics';

const steps = [
  {
    title: "Risk Analysis",
    icon: <DocumentMagnifyingGlassIcon className="w-8 h-8" />,
    description: `${METRICS.RISK_ACCURACY * 100}% prediction accuracy`
  },
  {
    title: "Payment Protection",
    icon: <CheckCircleIcon className="w-8 h-8" />,
    description: `$${(METRICS.PROTECTED_AMOUNT / 1000).toFixed(1)}k secured`
  },
  {
    title: "Time Savings",
    icon: <UserGroupIcon className="w-8 h-8" />,
    description: `${METRICS.AVG_HOURS_SAVED}h/month average time saved`
  },
  {
    title: "Dispute Resolution",
    icon: <RocketLaunchIcon className="w-8 h-8" />,
    description: `${(METRICS.DISPUTE_IMPROVEMENT * 100).toFixed(0)}% faster resolution`
  }
];

export default function HowItWorksSection() {
  const scrollToWaitlist = useScrollToSection('waitlist-section');

  return (
    <section id="how-it-works-section" className="pt-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We Protect Your Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AI-powered safeguards at every stage of your freelance workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-blue-100 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <ClientButton
            onClick={scrollToWaitlist}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-xl"
          >
            Start Protecting My Projects →
          </ClientButton>
        </div>
      </div>
    </section>
  );
} 
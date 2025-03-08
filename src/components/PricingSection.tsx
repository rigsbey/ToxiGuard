'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const plans = [
  {
    name: 'Starter',
    price: '0',
    features: [
      'Basic risk analysis',
      '3 scans per month',
      'Community support',
      'Basic reporting'
    ],
    cta: 'Start Free',
    popular: false
  },
  {
    name: 'Pro',
    price: '29',
    features: [
      'Advanced risk detection',
      'Unlimited scans',
      'Priority support',
      'Detailed analytics',
      'Contract templates',
      'API access'
    ],
    cta: 'Get Started',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Custom risk models',
      'Dedicated support',
      'Custom integration',
      'Team management',
      'Advanced API features',
      'SLA guarantee'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl shadow-xl bg-white p-8 ${
                plan.popular ? 'border-2 border-blue-500' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-600">/month</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                plan.popular
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
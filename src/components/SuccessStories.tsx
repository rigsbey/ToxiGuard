'use client';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { ClockIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { BarChart } from './BarChart';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import { METRICS } from '@/config/metrics';

const caseStudies = [
  {
    id: 'elizabeth-ux',
    title: 'How Elizabeth Saved 50+ Hours/Month Using ToxicGuard to Avoid Toxic Clients',
    excerpt: 'UX designer used AI risk detection to spot unrealistic deadlines and low budgets. 3-second project scan saved 50 hours/month',
    cta: 'Discover how ToxicGuard can save you 50+ hours/month →',
    stats: [
      { icon: '⏳', value: '50h saved/month' },
      { icon: '💰', value: '$1300+ earned' }
    ]
  },
  {
    id: 'james-copywriter',
    title: 'How James Reduced Payment Delays by 87% with ToxicGuard Protection',
    excerpt: 'Freelance writer eliminated "pay after publish" risks using payment security features. Now earns $300 average per project',
    cta: 'See how to secure your payments →',
    stats: [
      { icon: '💸', value: '87% fewer delays' },
      { icon: '📈', value: '$300 avg. project' }
    ]
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stories = [{
  title: "Web Development Project",
  content: `Avoided $${(12000).toLocaleString('en-US')} loss with ${METRICS.RISK_ACCURACY * 100}% risk prediction accuracy`
}, {
  title: "Mobile App Contract",
  content: `Saved ${METRICS.AVG_HOURS_SAVED} hours on contract negotiations`
}];

export default function SuccessStories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Real Results from Early Users
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join {METRICS.CURRENT_SIGNUPS.toLocaleString('en-US')}+ professionals who transformed their client workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                ⏳
              </div>
              <h3 className="text-xl font-bold">Time Saved</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Weekly hours saved</span>
                <span className="font-bold text-blue-600">
                  {Math.round(METRICS.AVG_HOURS_SAVED / 4).toLocaleString('en-US')}h
                </span>
              </div>
              <div className="h-2 bg-blue-100 rounded-full">
                <div 
                  className="h-full bg-blue-600 rounded-full" 
                  style={{ width: `${(METRICS.AVG_HOURS_SAVED / 40) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                💸
              </div>
              <h3 className="text-xl font-bold">Earnings Protected</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Monthly protection</span>
                <span className="font-bold text-green-600">
                  ${(METRICS.PROTECTED_AMOUNT / 1000).toLocaleString('en-US', {maximumFractionDigits: 1})}k
                </span>
              </div>
              <div className="h-2 bg-green-100 rounded-full">
                <div 
                  className="h-full bg-green-600 rounded-full" 
                  style={{ width: `${(METRICS.PROTECTED_AMOUNT / 100_000) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
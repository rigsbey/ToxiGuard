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
}];

export default function SuccessStories() {
  return null;
} 
'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import Hero from '@/components/Hero';
import DemoSection from '@/components/DemoSection';
import ProjectAnalysisOverlay from '@/components/ProjectAnalysisOverlay';

const demoProjects = {
  webDevelopment: {
    redFlags: [
      {
        icon: '⏱',
        label: 'Unrealistic Deadline',
        tip: 'Full website in 3 days - 87% risk of delays'
      },
      {
        icon: '💸',
        label: 'Low Budget',
        tip: '$500 for e-commerce site - 92% below market rate'
      }
    ],
    goodExample: 'Clear milestones with 50% upfront payment and 2-week timeline'
  },
  designProject: {
    redFlags: [
      {
        icon: '🎨',
        label: 'Vague Requirements',
        tip: '"Make it pop" - 78% scope creep risk'
      },
      {
        icon: '📝',
        label: 'Unlimited Revisions',
        tip: 'No revision limits - 63% time overrun'
      }
    ],
    goodExample: 'Detailed style guide + 3 included revisions in contract'
  }
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              Project Analysis Demo
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
              How ToxicGuard Protects<br/>
              <span className="text-toxic-red">Against Toxic Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Example of real-time analysis of an Upwork order
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <ProjectAnalysisOverlay />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-6">
            Want to Protect Your Projects?
          </h2>
          <button className="bg-toxic-red text-white px-8 py-4 rounded-lg font-medium hover:bg-red-600 transition-colors">
            Try for Free
          </button>
        </motion.div>
      </div>
    </div>
  );
} 
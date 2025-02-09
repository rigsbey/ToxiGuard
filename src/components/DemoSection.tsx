'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

interface Project {
  redFlags: Array<{
    icon: string;
    label: string;
    tip: string;
  }>;
  goodExample: string;
}

interface DemoSectionProps {
  projects: Record<string, Project>;
}

export default function DemoSection({ projects = {} }: DemoSectionProps) {
  return (
    <section 
      id="demo-section"
      className="bg-gradient-to-b from-white to-blue-50 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4">
        {Object.entries(projects).map(([key, project], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-16 last:mb-0"
          >
            {/* Токсичный проект */}
            <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircleIcon className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-red-800">Risk Example</h3>
              </div>
              
              <div className="space-y-4">
                {project.redFlags.map((flag, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-lg border border-red-200">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-red-500 text-xl">{flag.icon}</span>
                      <span className="font-medium">{flag.label}</span>
                    </div>
                    <p className="text-sm text-red-600">{flag.tip}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Безопасная альтернатива */}
            <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Safe Alternative</h3>
              </div>

              <div className="p-4 bg-white rounded-lg border border-green-200">
                <p className="text-sm text-gray-600">{project.goodExample}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 
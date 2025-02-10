'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { CurrencyDollarIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function ProjectAnalysisOverlay() {
  const [isAnalysisVisible, setIsAnalysisVisible] = useState(false);
  const [isReportVisible, setIsReportVisible] = useState(false);
  
  const risks = [
    {
      id: 1,
      label: 'Unrealistic Budget',
      icon: CurrencyDollarIcon,
      details: 'Budget is $30.00, which is 85% below the market rate',
      severity: 'high'
    },
    {
      id: 2,
      label: 'Vague Requirements',
      icon: QuestionMarkCircleIcon,
      details: 'Need to scrape entire site without detailed criteria',
      severity: 'medium'
    },
    {
      id: 3,
      label: 'Timeline Risk',
      icon: ClockIcon,
      details: 'Deadline: ASAP, no specific timeline provided',
      severity: 'high'
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsAnalysisVisible(false);
        setIsReportVisible(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 px-4">
          Instant Risk Scanner
        </h2>
        <p className="text-gray-500 mt-1 md:mt-2 text-sm md:text-base">
          AI-powered analysis of project requirements
        </p>
      </div>

      <div className="relative">
        {/* Интерактивный скриншот */}
        <motion.div
          className="relative cursor-pointer group"
          onClick={() => setIsAnalysisVisible(true)}
          whileHover={{ scale: 1.01 }}
        >
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/images/upwork-screenshot.jpg"
              alt="Project screenshot"
              width={1200}
              height={800}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
          </div>
          
          {!isAnalysisVisible && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                Click to analyze risks
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Анализ рисков */}
        <AnimatePresence>
          {isAnalysisVisible && (
            <motion.div
              className="absolute right-0 top-0 w-1/3 h-full"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <div className="bg-white h-full p-6 rounded-l-xl shadow-lg border-l border-gray-100 relative">
                <button
                  onClick={() => setIsAnalysisVisible(false)}
                  className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-500" />
                </button>

                <h3 className="text-xl font-semibold mb-6">Detected Risks</h3>
                
                <div className="space-y-4">
                  {risks.map((risk, index) => (
                    <motion.div
                      key={risk.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 }}
                      className={`p-4 rounded-lg ${
                        risk.severity === 'high' ? 'bg-red-50' : 'bg-yellow-50'
                      }`}
                    >
                      <div className="flex gap-3">
                        <risk.icon className={`w-5 h-5 ${
                          risk.severity === 'high' ? 'text-red-500' : 'text-yellow-500'
                        }`} />
                        <div>
                          <div className="font-medium">{risk.label}</div>
                          <p className="text-sm text-gray-600 mt-1">
                            {risk.details}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsReportVisible(true)}
                >
                  View Full Risk Report
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Расширенный отчет */}
      <AnimatePresence>
        {isReportVisible && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsReportVisible(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden relative"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsReportVisible(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <XMarkIcon className="w-6 h-6 text-gray-500" />
              </button>

              <div className="p-8 bg-gradient-to-br from-blue-50 to-white">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Full Risk Report</h2>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">High Risk Project</span>
                      <span className="text-gray-500">Upwork Job #021888015058</span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Risk Metrics */}
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-xl shadow-sm">
                      <h3 className="text-lg font-semibold mb-3">Risk Factors</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Budget Risk</span>
                          <span className="text-red-600 font-medium">9.5/10</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-red-500 animate-pulse" />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-xl shadow-sm">
                      <h3 className="text-lg font-semibold mb-3">Client Stats</h3>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <CurrencyDollarIcon className="w-5 h-5 text-green-600" />
                          <span>$2.4K spent</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ClockIcon className="w-5 h-5 text-blue-600" />
                          <span>73 jobs posted</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <QuestionMarkCircleIcon className="w-5 h-5 text-yellow-600" />
                          <span>25% hire rate</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 text-purple-600">★</span>
                          <span>4.9/5 rating</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Analysis */}
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-xl">
                      <h3 className="text-lg font-semibold mb-2 text-red-800">Critical Issues</h3>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Budget 85% below market rate ($30 fixed)</li>
                        <li>Vague scraping requirements</li>
                        <li>"ASAP" deadline without clear timeline</li>
                        <li>Complex legal data handling</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-xl">
                      <h3 className="text-lg font-semibold mb-2 text-yellow-800">Client Pattern Alert</h3>
                      <p className="text-sm">
                        37 hires with 9 active - possible job fragmentation. 
                        High turnover (4.94/5 rating but 25% hire rate).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <h3 className="text-lg font-semibold mb-3 text-blue-800">Our Recommendation</h3>
                  <div className="grid gap-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span>⚠️</span>
                      <div>
                        <p className="font-medium">Not Recommended for New Freelancers</p>
                        <p className="text-gray-600">High risk of underpayment and scope creep</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span>💡</span>
                      <div>
                        <p className="font-medium">If Applying:</p>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Request detailed requirements</li>
                          <li>Propose milestone-based payment</li>
                          <li>Verify data legality aspects</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 
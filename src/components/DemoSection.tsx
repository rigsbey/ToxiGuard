'use client';

import { motion } from 'framer-motion';
import { XCircleIcon, CheckCircleIcon, GlobeAltIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

interface Project {
  redFlags: Array<{
    icon: string;
    label: string;
    tip: string;
    labelRu: string;
  }>;
  goodExample: string;
  sampleProject: string;
  riskFactors: Array<{
    category: string;
    score: number;
    description: string;
  }>;
}

interface DemoSectionProps {
  projects: Record<string, Project>;
}

export default function DemoSection({ projects = {} }: DemoSectionProps) {
  const demoProjects = {
    webScraping: {
      sampleProject: "Проект: Парсинг сайта - 1000 страниц / 24 часа / бюджет $50",
      riskFactors: [
        {
          category: "Бюджет",
          score: 92,
          description: "Ниже рыночного на 85%"
        },
        {
          category: "Требования",
          score: 78, 
          description: "Нечеткое ТЗ"
        }
      ],
      redFlags: [
        {
          icon: "⚠️",
          labelRu: "Неоправданные сроки",
          tip: "Среднее время выполнения подобных проектов - 72 часа"
        }
      ]
    }
  }

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Анимированные карточки */}
      {Object.entries(projects).map(([key, project]) => (
        <motion.div
          key={key}
          className="group relative mt-8 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Risk Card - Добавляем 3D эффект */}
          <motion.div 
            className="relative bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 to-transparent rounded-3xl" />
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-100 rounded-2xl">
                <XCircleIcon className="w-8 h-8 text-red-600 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-red-800">Анализ рисков</h3>
            </div>
            
            <div className="space-y-6">
              {project.redFlags.map((flag, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-white/90 backdrop-blur rounded-xl border border-red-200 hover:border-red-300 transition-all"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl">{flag.icon}</span>
                    <div>
                      <h4 className="font-bold text-red-800">${flag.labelRu}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="relative w-full h-3 bg-red-100 rounded-full overflow-hidden">
                          <motion.div 
                            className="absolute inset-0 bg-red-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${70 + idx * 10}%` }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30" />
                        </div>
                        <span className="text-sm text-red-600">{70 + idx * 10}% risk</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-red-600 pl-12">{flag.tip}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution Card - Добавляем интерактивную визуализацию */}
          <motion.div
            className="relative bg-white p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-transparent rounded-3xl" />
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-green-100 rounded-2xl">
                <CheckCircleIcon className="w-7 h-7 text-green-600 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-green-800">AI-решение ToxicGuard</h3>
            </div>

            <div className="space-y-4">
              <div className="p-3 bg-white/90 backdrop-blur rounded-xl border border-green-200">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-green-100 rounded-lg">
                    <GlobeAltIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800">Market Comparison</h4>
                    <p className="text-xs text-green-600 mt-0.5">
                      Average rate: $250/project
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-white/90 backdrop-blur rounded-xl border border-green-200">
                <div className="flex items-center gap-3">
                  <motion.div 
                    whileHover={{ rotate: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-3 bg-green-100 rounded-lg cursor-help"
                    title="Детали анализа"
                  >
                    <ChartBarIcon className="w-5 h-5 text-green-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-green-800">Success Predictor</h4>
                    <div className="w-full bg-green-100 h-2 rounded-full mt-1">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-500" 
                        style={{ width: '85%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-white/90 backdrop-blur rounded-xl border border-green-200">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-green-100 rounded-lg">
                    <CurrencyDollarIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800">Smart Pricing</h4>
                    <p className="text-xs text-green-600 mt-0.5">
                      Recommended rate: $300-500
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mb-8 group">
            <div className="p-4 bg-gray-50 rounded-lg border-2 border-dashed hover:border-blue-200 transition-colors">
              <div className="flex items-center gap-3 text-gray-500">
                <span>📝</span>
                <div className="font-mono text-sm opacity-90">
                  {project.sampleProject}
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <span className="animate-pulse">🔍</span>
                  <span className="text-xs">Scanning...</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Для мобильных устройств */}
      <div className="space-y-4 sm:space-y-6">
        {/* Анимированные карточки */}
        {Object.entries(projects).map(([key, project]) => (
          <motion.div
            key={key}
            className="group relative mt-8 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Risk Card - Добавляем 3D эффект */}
            <motion.div 
              className="relative bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 to-transparent rounded-3xl" />
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-100 rounded-2xl">
                  <XCircleIcon className="w-8 h-8 text-red-600 animate-pulse" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-red-800">Анализ рисков</h3>
              </div>
              
              <div className="space-y-6">
                {project.redFlags.map((flag, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-white/90 backdrop-blur rounded-xl border border-red-200 hover:border-red-300 transition-all"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-2xl">{flag.icon}</span>
                      <div>
                        <h4 className="font-bold text-red-800">${flag.labelRu}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="relative w-full h-3 bg-red-100 rounded-full overflow-hidden">
                            <motion.div 
                              className="absolute inset-0 bg-red-500"
                              initial={{ width: 0 }}
                              animate={{ width: `${70 + idx * 10}%` }}
                              transition={{ duration: 0.8, delay: idx * 0.1 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30" />
                          </div>
                          <span className="text-sm text-red-600">{70 + idx * 10}% risk</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-red-600 pl-12">{flag.tip}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solution Card - Добавляем интерактивную визуализацию */}
            <motion.div
              className="relative bg-white p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-transparent rounded-3xl" />
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-green-100 rounded-2xl">
                  <CheckCircleIcon className="w-7 h-7 text-green-600 animate-pulse" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-green-800">AI-решение ToxicGuard</h3>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-white/90 backdrop-blur rounded-xl border border-green-200">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-green-100 rounded-lg">
                      <GlobeAltIcon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800">Market Comparison</h4>
                      <p className="text-xs text-green-600 mt-0.5">
                        Average rate: $250/project
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white/90 backdrop-blur rounded-xl border border-green-200">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      whileHover={{ rotate: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="p-3 bg-green-100 rounded-lg cursor-help"
                      title="Детали анализа"
                    >
                      <ChartBarIcon className="w-5 h-5 text-green-600" />
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-green-800">Success Predictor</h4>
                      <div className="w-full bg-green-100 h-2 rounded-full mt-1">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-500" 
                          style={{ width: '85%' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white/90 backdrop-blur rounded-xl border border-green-200">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-green-100 rounded-lg">
                      <CurrencyDollarIcon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800">Smart Pricing</h4>
                      <p className="text-xs text-green-600 mt-0.5">
                        Recommended rate: $300-500
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mb-8 group">
              <div className="p-4 bg-gray-50 rounded-lg border-2 border-dashed hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-3 text-gray-500">
                  <span>📝</span>
                  <div className="font-mono text-sm opacity-90">
                    {project.sampleProject}
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <span className="animate-pulse">🔍</span>
                    <span className="text-xs">Scanning...</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-gradient-to-b from-blue-50 to-white rounded-xl border border-blue-100">
          <div className="text-xl sm:text-2xl mb-2">📊</div>
          <div className="text-2xl sm:text-3xl font-bold text-gray-900 break-words">
            $15.0k
          </div>
          <div className="text-sm text-gray-600">Protected</div>
        </div>
        {/* Повторить для других карточек */}
      </div>
    </div>
  );
} 
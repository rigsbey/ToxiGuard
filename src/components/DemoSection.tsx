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
  projects?: Array<{
    title: string;
    description: string;
    image: string;
  }>;
}

export default function DemoSection({ projects = [] }: DemoSectionProps) {
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
    <section id="demo-section" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">See ToxiGuard in Action</h2>
          <p className="text-lg text-gray-600 mt-4">
            Here&apos;s how our AI analyzes a typical Upwork job post to spot potential risks:
          </p>
        </div>
        <div className="max-w-6xl mx-auto" id="risk-scanner">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 px-4">
              Instant Risk Scanner
              <span className="ml-2 text-xs md:text-sm text-white bg-blue-500 px-2 py-1 rounded-full">DEMO</span>
            </h2>
            <p className="text-gray-500 mt-1 md:mt-2 text-sm md:text-base">
              AI-powered analysis of project requirements
            </p>
          </div>
          <div className="relative">
            <div className="relative group">
              <div className="relative rounded-xl overflow-hidden">
                <video
                  src="/demo.mp4"
                  width={1200}
                  height={800}
                  className="object-cover w-full"
                  muted
                  loop
                  playsInline
                  poster="/images/demo-video-thumbnail.jpg"
                  controls
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
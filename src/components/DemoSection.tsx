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
    <section>
      {/* JSX-разметка */}
    </section>
  );
} 
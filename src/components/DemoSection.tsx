'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { 
  InformationCircleIcon, 
  CheckBadgeIcon, 
  ExclamationTriangleIcon, 
  ShoppingCartIcon,
  XCircleIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  ArrowsRightLeftIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { AlertTriangle, Clock, Wallet, Edit3 } from 'lucide-react';
import { useScrollToWaitlist } from '@/hooks/useScrollToWaitlist';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import ClientButton from './ClientButton';

interface Project {
  title: string;
  riskLevel: number;
  redFlags: RedFlag[];
  icon: JSX.Element;
  content: string;
  badExample: string;
  goodExample: string;
}

interface RedFlag {
  label: string;
  icon: JSX.Element;
  tip: string;
}

const demoProjects: Project[] = [
  {
    title: "Mobile App Design",
    icon: <Edit3 className="w-6 h-6 text-toxic-red" />,
    content: "Project spec analysis revealed 3 critical issues in requirements:",
    riskLevel: 87,
    redFlags: [
      { 
        label: "Unclear acceptance criteria", 
        icon: <AlertTriangle className="w-4 h-4" />, 
        tip: "No measurable success metrics" 
      },
      { 
        label: "Unpaid trial task", 
        icon: <Wallet className="w-4 h-4" />, 
        tip: "Requests free work before contract" 
      },
      { 
        label: "Vague deliverables", 
        icon: <ExclamationTriangleIcon className="w-4 h-4" />, 
        tip: "Undefined scope leads to endless revisions" 
      }
    ],
    badExample: "Looking for designer to create 50 screens for fitness app. Need unlimited revisions. Final payment after investor approval.",
    goodExample: "Reasonable budget: $5,000+ for MVP with defined scope (20 core screens, 2 revision rounds)"
  }
];

interface DemoSectionProps {
  projects?: Project[];
}

export default function DemoSection({ 
  projects = demoProjects
}: DemoSectionProps) {
  const scrollToWaitlist = useScrollToSection('waitlist-section');

  return (
    <section 
      id="demo-section"
      className="bg-gradient-to-b from-white to-blue-50 py-40 md:py-56 lg:py-64"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-32 md:mb-40">
          Project Risk Analysis
          <span className="block mt-6 text-xl md:text-2xl text-gray-500 font-normal">
            Side-by-Side Comparison
          </span>
        </h2>
        
        <div className="space-y-40 md:space-y-56">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-24 md:gap-32"
            >
              {/* Токсичный проект */}
              <div className="bg-red-50 p-8 md:p-12 rounded-xl border-2 border-red-200">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircleIcon className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-red-800">
                  High Risk Indicators
                  <span className="block text-lg text-red-600 mt-2">Detected in 87% of toxic projects</span>
                </h3>
                
                <div className="space-y-6">
                  {project.redFlags.map((flag, idx) => (
                    <div key={idx} className="p-4 bg-white rounded-lg border border-red-200 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="text-red-500">{flag.icon}</span>
                        <span className="font-medium text-red-800">{flag.label}</span>
                      </div>
                      <p className="text-sm text-red-600 mt-2">{flag.tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Безопасная альтернатива */}
              <div className="bg-green-50 p-8 md:p-12 rounded-xl border-2 border-green-200">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <CheckCircleIcon className="w-5 h-5 text-accent-teal" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16">Safe Project Criteria</h3>
                
                {/* Добавляем контент */}
                <div className="space-y-8 md:space-y-12 text-left">
                  <div className="p-4 bg-white rounded-lg border border-green-200">
                    <p className="text-sm text-gray-600">{project.goodExample}</p>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-green-600" />
                      Clear acceptance criteria
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-green-600" />
                      Milestone-based payments
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-green-600" />
                      Defined revision limits
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <ClientButton 
            onClick={scrollToWaitlist}
            className="animate-fade-in rounded-full border border-black bg-black px-8 py-4 text-sm text-white 
                     transition-all hover:bg-gray-800 hover:ring-4 hover:ring-gray-200 inline-flex items-center"
          >
            Block Toxic Clients in 2 Minutes
            <ArrowRightIcon className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </ClientButton>
          <p className="text-sm text-gray-500 mt-4">
            Protected $15M+ in freelance income since 2024
          </p>
        </div>
      </div>
    </section>
  );
} 
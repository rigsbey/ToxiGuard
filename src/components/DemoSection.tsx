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
  ArrowsRightLeftIcon
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
    <section className="bg-gradient-to-b from-white to-blue-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">Project Risk Analysis</h2>
        
        <div className="space-y-16 md:space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* Токсичный проект */}
              <div className="bg-blue-50/50 p-6 rounded-xl border-2 border-blue-200">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <XCircleIcon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mt-4 mb-6">High Risk Indicators</h3>
                
                {/* Добавляем контент */}
                <div className="space-y-4 text-left">
                  <div className="text-red-600 font-medium">{project.content}</div>
                  <ul className="space-y-3">
                    {project.redFlags.map((flag, idx) => (
                      <li key={idx} className="flex items-center gap-2 group relative">
                        {flag.icon}
                        <span className="text-gray-700">{flag.label}</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <InformationCircleIcon className="w-4 h-4 text-gray-400 ml-1" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm">
                              {flag.tip}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 p-4 bg-white rounded-lg border border-blue-200">
                    <p className="text-sm text-gray-600">{project.badExample}</p>
                  </div>
                </div>
              </div>

              {/* Безопасная альтернатива */}
              <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mt-4 mb-6">Safe Project Criteria</h3>
                
                {/* Добавляем контент */}
                <div className="space-y-4 text-left">
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

        <div className="text-center mt-20">
          <ClientButton 
            onClick={scrollToWaitlist}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get Early Access
          </ClientButton>
        </div>
      </div>
    </section>
  );
} 
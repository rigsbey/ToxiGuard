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
    content: "Looking for designer to create 50 screens for fitness app. Need unlimited revisions. Final payment after investor approval.",
    riskLevel: 87,
    redFlags: [
      { label: "Scope creep", icon: <AlertTriangle className="w-4 h-4" />, tip: "Unlimited revisions = endless project" },
      { label: "Payment delay", icon: <Wallet className="w-4 h-4" />, tip: "Investor-dependent payment is risky" },
      { label: "Vague requirements", icon: <ExclamationTriangleIcon className="w-4 h-4" />, tip: "No clear specifications provided" }
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Toxic vs Safe Projects</h2>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* Токсичный проект */}
              <div className="bg-red-50/50 p-6 rounded-xl border-2 border-red-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <XCircleIcon className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-red-800">Toxic Project</h3>
                </div>
                <blockquote className="text-red-900 italic border-l-4 border-red-200 pl-4">
                  "{project.badExample}"
                </blockquote>
                
                {/* Риски */}
                <div className="mt-6 grid gap-4">
                  {project.redFlags.map((flag, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center">
                        {flag.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-red-800">{flag.label}</h4>
                        <p className="text-sm text-red-700">{flag.tip}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Безопасная альтернатива */}
              <div className="bg-green-50/50 p-6 rounded-xl border-2 border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800">Safe Alternative</h3>
                </div>
                <div className="text-green-900">
                  <p className="mb-4">"Reasonable project:"</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CurrencyDollarIcon className="w-5 h-5 text-green-600" />
                      <span>Real project budget: ${Math.floor(5000 * 0.87)}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <DevicePhoneMobileIcon className="w-5 h-5 text-green-600" />
                      <span>MVP: 20 core screens</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowsRightLeftIcon className="w-5 h-5 text-green-600" />
                      <span>Revisions: 2 rounds max</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
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
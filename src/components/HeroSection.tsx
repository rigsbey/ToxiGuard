'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useScrollToSection } from '@/hooks/useScrollToSection';

export default function HeroSection() {
  const chromeStoreUrl = 'https://chromewebstore.google.com/detail/toxiguard/icijbieljniejiicoddalgfkdkadknnn';
  const scrollToHowItWorks = useScrollToSection('how-it-works-section');
  
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <motion.div 
            className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Защитите свой фриланс от рисков с помощью AI
            </h1>
            <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
              ToxiGuard анализирует проекты на Upwork и предупреждает о возможных рисках, помогая вам принимать более безопасные решения.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href={chromeStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded-lg"
              >
                <img 
                  src="/images/chrome-logo.svg" 
                  alt="Chrome" 
                  className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" 
                />
                Установить для Chrome
              </Link>
              <button
                onClick={scrollToHowItWorks}
                className="text-base font-semibold leading-7 text-gray-900 hover:text-blue-600 transition-colors duration-200"
              >
                Подробнее <span aria-hidden="true">→</span>
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-500 flex items-center gap-2">
              <span className="flex items-center">
                <span className="text-yellow-400">★</span> 5.0/5
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span>2000+ активных пользователей</span>
            </div>
          </motion.div>
          <motion.div 
            className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <div className="relative">
                <img
                  src="/images/screenshot1.png"
                  alt="ToxiGuard анализ проекта"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <div className="relative">
                <img
                  src="/images/screenshot2.png"
                  alt="ToxiGuard оценка рисков"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="relative">
                <img
                  src="/images/screenshot3.png"
                  alt="ToxiGuard рекомендации"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 
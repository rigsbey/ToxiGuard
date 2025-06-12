'use client';

import Link from 'next/link';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { SECTIONS } from '@/constants/sections';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const chromeStoreUrl = 'https://chromewebstore.google.com/detail/toxiguard/icijbieljniejiicoddalgfkdkadknnn';
  
  const scrollToFAQ = useScrollToSection('faq-section');
  const scrollToHowItWorks = useScrollToSection('how-it-works-section');
  const scrollToRiskScanner = useScrollToSection(SECTIONS.RISK_SCANNER);
  const scrollToResources = useScrollToSection(SECTIONS.RESOURCES);
  const scrollToWaitlist = useScrollToSection('waitlist-section');

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const menuItems = [
    { label: 'How it works', onClick: scrollToHowItWorks },
    { label: 'Demo', onClick: scrollToRiskScanner },
    { label: 'Scope Creep Detector', href: '/features/ai-scope-creep' },
    { label: 'FAQ', onClick: scrollToFAQ },
    { label: 'Blog', href: '/blog' },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuItemClick = (onClick: (() => void) | undefined) => {
    if (onClick) {
      onClick();
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-lg shadow-sm z-50 top-0 left-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between relative">
          <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 z-10">
            <span className="text-xl">🛡️</span>
            <span className="text-xl font-medium">ToxiGuard</span>
          </Link>

          {isHomePage ? (
            <>
              <div className="hidden md:flex bg-white/75 backdrop-blur-lg border border-gray-200 rounded-full px-2 py-0.5 items-center shadow-sm absolute left-1/2 transform -translate-x-1/2">
                {menuItems.map((item) => (
                  item.href ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="px-3 py-1.5 text-sm text-gray-600/60 hover:text-gray-900/80 transition-colors rounded-md hover:bg-gray-100"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.label}
                      onClick={item.onClick}
                      className="px-3 py-1.5 text-sm text-gray-600/60 hover:text-gray-900/80 transition-colors rounded-md hover:bg-gray-100"
                    >
                      {item.label}
                    </button>
                  )
                ))}
              </div>

              <div className="md:hidden">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 focus:outline-none">
                  {mobileMenuOpen ? (
                    <XMarkIcon className="w-6 h-6 text-gray-600"/>
                  ) : (
                    <Bars3Icon className="w-6 h-6 text-gray-600"/>
                  )}
                </button>
              </div>

              <div className="hidden md:flex items-center gap-4 z-10">
                <Link
                  href={chromeStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <img 
                    src="/images/chrome-logo.svg" 
                    alt="Chrome" 
                    className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" 
                  />
                  Install
                </Link>
                <Link 
                  href="/login"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Sign in
                </Link>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                href={chromeStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200"
              >
                <img 
                  src="/images/chrome-logo.svg" 
                  alt="Chrome" 
                  className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" 
                />
                Install
              </Link>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>

      {isHomePage && mobileMenuOpen && (
        <AnimatePresence>
          <motion.div 
            className="md:hidden bg-white shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex flex-col space-y-1 p-4">
              {menuItems.map((item) => (
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => handleMobileMenuItemClick(item.onClick)}
                    className="text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <Link
                href={chromeStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img 
                  src="/images/chrome-logo.svg" 
                  alt="Chrome" 
                  className="w-4 h-4" 
                />
                Install Extension
              </Link>
              <Link
                href="/login"
                className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign in
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </nav>
  );
} 
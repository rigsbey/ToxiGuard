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
    { label: 'Resources', onClick: scrollToResources },
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
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl">🛡️</span>
            <span className="text-xl font-medium">ToxiGuard</span>
          </Link>

          {isHomePage ? (
            <>
              <div className="hidden md:flex bg-white/75 backdrop-blur-lg border border-gray-200 rounded-full px-2 py-0.5 items-center shadow-sm">
                {menuItems.map((item) => (
                  item.href ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="px-3 py-1.5 text-sm text-gray-600/60 hover:text-gray-900/80 transition-colors rounded-md"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.label}
                      onClick={item.onClick}
                      className="px-3 py-1.5 text-sm text-gray-600/60 hover:text-gray-900/80 transition-colors rounded-md"
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

              <div className="hidden md:flex items-center gap-4">
                <Link
                  href={chromeStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
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
                  className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors"
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
                className="group flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
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
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>

      {isHomePage && mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
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
              className="flex items-center justify-center px-3 py-2 bg-black text-white rounded-md hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 
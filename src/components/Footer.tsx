'use client';

import Link from 'next/link';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import ObfuscateEmail from '@/components/ObfuscateEmail';

export default function Footer() {
  const scrollToFAQ = useScrollToSection('faq-section');

  return (
    <footer className="bg-gray-100 text-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">ToxiGuard</h2>
            <p className="text-gray-600">AI-powered protection against toxic clients and payment risks.</p>
            <p className="text-gray-500 text-xs">© {new Date().getFullYear()} ToxiGuard. All rights reserved.</p>
          </div>

          {/* Products */}
          <div className="space-y-3">
            <h3 className="font-semibold mb-2">Products</h3>
            <nav className="space-y-2">
              <button 
                onClick={scrollToFAQ} 
                className="block hover:underline text-left"
              >
                FAQ
              </button>
              <Link 
                href="/blog" 
                className="block hover:underline"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h3 className="font-semibold mb-2">Support</h3>
            <nav className="space-y-2">
              <ObfuscateEmail address="toxiguard.post@gmail.com" className="block hover:underline" />
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="font-semibold mb-2">Legal</h3>
            <nav className="space-y-2">
              <Link href="/terms" className="block hover:underline">Terms</Link>
              <Link href="/privacy" className="block hover:underline">Privacy</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
} 
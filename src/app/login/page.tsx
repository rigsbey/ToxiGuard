'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Suspense } from 'react';
import LoginForm from '@/components/LoginForm';

// Metadata needs to be in a separate file for 'use client' components
// Create a file named metadata.js in the same directory with this content:
/*
export const metadata = {
  title: 'Log In to ToxiGuard - Access Your AI Protection Dashboard',
  description: 'Sign in to your ToxiGuard account to manage your freelance protection settings, analyze clients, and secure your business.',
  robots: 'noindex, follow',
  openGraph: {
    title: 'ToxiGuard Login - Access Your Protection Dashboard',
    description: 'Sign in to manage your freelance business protection tools.',
    type: 'website'
  }
};
*/

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-32">
        <Suspense fallback={
          <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)]">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-10"></div>
              <div className="space-y-8">
                <div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                </div>
                <div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                </div>
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        }>
          <LoginForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
} 
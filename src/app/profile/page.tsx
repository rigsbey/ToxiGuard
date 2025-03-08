'use client';

import { useState, useEffect, useRef } from 'react';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ShieldCheckIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProfilePage() {
  const [userName, setUserName] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push('/login');
      } else {
        setUserName(user.email?.split('@')[0] || 'User');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Welcome Section */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <motion.h1 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Welcome, {userName}!
            </motion.h1>
            <p className="text-gray-600 text-lg mb-6">
              This is your command center for project risk analysis. Track your analyses, save history, and protect your freelance business.
            </p>
          </div>

          {/* Primary CTA Section */}
          <motion.div
            className="bg-white rounded-2xl shadow-sm p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <ShieldCheckIcon className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Get Started with ToxiGuard</h2>
              <p className="text-gray-600 text-lg mb-8">
                Install our Chrome extension to start analyzing job postings and protect your freelance business
              </p>
              <Link 
                href="https://chromewebstore.google.com/detail/icijbieljniejiicoddalgfkdkadknnn?utm_source=item-share-cb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium mb-6"
              >
                Install Chrome Extension
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <div className="text-center mt-4">
                <Link 
                  href="#demo"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  Already installed? See how to analyze your first project
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Demo Section */}
          <motion.div
            id="demo"
            className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="p-8 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">See How It Works</h2>
              <p className="text-gray-600 text-lg mb-8">
                Watch how ToxiGuard analyzes job postings and helps you make informed decisions about potential projects
              </p>
            </div>
            <div className="relative bg-gray-900">
              <div className="max-w-5xl mx-auto">
                <video
                  ref={videoRef}
                  className="w-full aspect-video cursor-pointer"
                  muted
                  playsInline
                  loop
                  onClick={handleVideoClick}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src="/demo.mp4" type="video/mp4" />
                </video>
                {!isPlaying && (
                  <button
                    onClick={handlePlayVideo}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors group"
                  >
                    <div className="w-20 h-20 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center">
                      <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </button>
                )}
              </div>
            </div>
            <div className="p-6 bg-gray-50">
              <div className="max-w-3xl mx-auto">
                <h3 className="font-semibold text-lg mb-2">What you'll see in this demo:</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Real-time risk analysis of an Upwork job posting (0:00-0:30)</li>
                  <li>• Understanding risk indicators and warnings (0:30-1:00)</li>
                  <li>• How to use ToxiGuard's recommendations (1:00-1:30)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Empty State for Analyses */}
          <div className="bg-white rounded-2xl p-8 text-center mb-8">
            <div className="max-w-md mx-auto">
              <img 
                src="/empty-state.svg" 
                alt="No analyses yet" 
                className="w-48 h-48 mx-auto mb-6"
              />
              <h2 className="text-2xl font-semibold mb-4">
                Ready to Analyze Your First Project?
              </h2>
              <p className="text-gray-600 mb-6">
                Install the Chrome Extension, open any Upwork job posting, then click "Analyze" to see potential risks here. Your analysis results will appear automatically in this dashboard.
              </p>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-white rounded-2xl p-8">
            <div className="max-w-2xl mx-auto text-center">
              <QuestionMarkCircleIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
              <p className="text-gray-600 mb-6">
                Check out our frequently asked questions or reach out to our support team
              </p>
              <div className="flex justify-center gap-4">
                <Link 
                  href="/faq"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  View FAQ
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <span className="text-gray-300">|</span>
                <Link 
                  href="/support"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  Contact Support
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 
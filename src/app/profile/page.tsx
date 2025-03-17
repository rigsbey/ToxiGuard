'use client';

import { useState, useEffect, useRef } from 'react';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon, 
  ShieldCheckIcon, 
  QuestionMarkCircleIcon, 
  ClockIcon, 
  DocumentChartBarIcon, 
  SparklesIcon,
  DocumentTextIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JobHistoryList from '@/components/JobHistoryList';
import { getUserJobHistory, JobHistoryItem } from '@/lib/firestore';
import StatisticsPanel from '@/components/StatisticsPanel';

export default function ProfilePage() {
  const [userName, setUserName] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [jobHistory, setJobHistory] = useState<JobHistoryItem[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [extensionInstalled, setExtensionInstalled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  useEffect(() => {
    const hidePasswordSecurityAlert = () => {
      const passwordAlerts = document.querySelectorAll('div[role="dialog"]');
      passwordAlerts.forEach(alert => {
        if (alert.textContent?.includes('password') || 
            alert.textContent?.includes('saved passwords') ||
            alert.textContent?.includes('Password') || 
            alert.textContent?.includes('leaked') ||
            alert.textContent?.includes('compromised')) {
          (alert as HTMLElement).style.display = 'none';
        }
      });

      const style = document.createElement('style');
      style.textContent = `
        div[role="dialog"][aria-modal="true"]:has(div[aria-describedby]) {
          display: none !important;
        }
      `;
      document.head.appendChild(style);
    };

    hidePasswordSecurityAlert();
    const interval = setInterval(hidePasswordSecurityAlert, 1000);
    setTimeout(() => clearInterval(interval), 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push('/login');
      } else {
        const nameFromEmail = user.email?.split('@')[0] || 'User';
        setUserName(nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1));
        setUserId(user.uid);
      }
    });

    const checkExtension = () => {
      setExtensionInstalled(localStorage.getItem('toxiguardExtensionInstalled') === 'true');
    };
    
    checkExtension();
    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    if (userId) {
      loadJobHistory();
    }
  }, [userId]);

  const loadJobHistory = async () => {
    if (!userId) return;
    
    setIsLoading(true);
    try {
      const history = await getUserJobHistory(userId);
      setJobHistory(history);
    } catch (error) {
      console.error('Error loading job history:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-gray-100">
            <motion.div 
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div>
                <h1 className="text-4xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                  Welcome, {userName}! <span className="text-blue-500">👋</span>
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                  This is your command center for project risk analysis. Track your analyses, save history, and protect your freelance business.
                </p>
              </div>
              <div className="hidden md:block">
                <UserCircleIcon className="w-20 h-20 text-blue-100 bg-blue-50 rounded-full p-2" />
              </div>
            </motion.div>
          </div>

          {/* Statistics Panel */}
          {jobHistory.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <StatisticsPanel jobs={jobHistory} />
            </motion.div>
          )}

          {/* Job History Section */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 mb-4">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-3">
                  <DocumentChartBarIcon className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Job Analysis History</h2>
                </div>
                <button
                  onClick={loadJobHistory}
                  className="flex items-center gap-1 text-sm px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  Refresh
                </button>
              </div>
              <p className="text-gray-500 mb-4">
                View and manage all the job postings you've analyzed with ToxiGuard
              </p>
            </div>
            
            {isLoading ? (
              <div className="py-20 text-center bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                <p className="text-gray-500">Loading your job history...</p>
              </div>
            ) : jobHistory.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm p-8 text-center mb-8 border border-gray-100">
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
            ) : (
              <JobHistoryList jobs={jobHistory} onRefresh={loadJobHistory} />
            )}
          </motion.div>

          {/* Primary CTA Section - показываем только если расширение не установлено */}
          {!extensionInstalled && (
            <motion.div
              className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 mb-8 text-white overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-xl"></div>
              <div className="max-w-3xl mx-auto text-center relative z-10">
                <SparklesIcon className="w-16 h-16 text-blue-200 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Get Started with ToxiGuard</h2>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                  Install our Chrome extension to start analyzing job postings and protect your freelance business from high-risk projects
                </p>
                <Link 
                  href="https://chromewebstore.google.com/detail/icijbieljniejiicoddalgfkdkadknnn?utm_source=item-share-cb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg font-medium mb-6 shadow-md"
                >
                  Install Chrome Extension
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <div className="text-center mt-4">
                  <Link 
                    href="#demo"
                    className="text-blue-100 hover:text-white inline-flex items-center gap-1 hover:underline"
                  >
                    Already installed? See how to analyze your first project
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Если расширение установлено, показываем альтернативный блок с призывом анализировать вакансии */}
          {extensionInstalled && (
            <motion.div
              className="bg-gradient-to-br from-green-600 to-teal-700 rounded-2xl shadow-lg p-8 mb-8 text-white overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-xl"></div>
              <div className="max-w-3xl mx-auto text-center relative z-10">
                <ShieldCheckIcon className="w-16 h-16 text-green-200 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Analyze Your Next Job Post</h2>
                <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                  Use your installed ToxiGuard extension on any Upwork job posting to identify potential risks
                </p>
                <Link 
                  href="https://www.upwork.com/nx/jobs/search/?sort=recency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors text-lg font-medium mb-6 shadow-md"
                >
                  Browse Jobs on Upwork
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          )}

          {/* Demo Section */}
          <motion.div
            id="demo"
            className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="p-8 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">See How It Works</h2>
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
                    <div className="w-20 h-20 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-xl">
                      <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </button>
                )}
              </div>
            </div>
            <div className="p-8 bg-gray-50">
              <div className="max-w-3xl mx-auto">
                <h3 className="font-semibold text-lg mb-4">ToxiGuard in Action:</h3>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 rounded-full bg-green-100 p-1">✓</span>
                    Instant detection of hidden risks in freelance marketplace jobs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500 rounded-full bg-blue-100 p-1">✓</span>
                    AI-powered analysis of budget, timeline, and project requirements
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500 rounded-full bg-purple-100 p-1">✓</span>
                    Protection against unreliable clients and unrealistic expectations
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Help Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="max-w-2xl mx-auto text-center">
              <QuestionMarkCircleIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
              <p className="text-gray-600 mb-6">
                Check out our frequently asked questions or reach out to our support team
              </p>
              <div className="flex justify-center gap-4">
                <Link 
                  href="/faq"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors"
                >
                  <DocumentTextIcon className="w-5 h-5" />
                  View FAQ
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
                <Link 
                  href="/support"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                  Contact Support
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
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
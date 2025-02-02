'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDownIcon, 
  QuestionMarkCircleIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';
import { useScrollToSection } from '@/hooks/useScrollToWaitlist';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const scrollToWaitlist = useScrollToSection('waitlist-section');

  const faqs: FAQItem[] = [
    {
      question: "What is ToxicGuard?",
      answer: "A platform that protects freelancers from toxic clients. Uses AI to analyze projects for risks like unrealistic deadlines, low budgets, and payment delays."
    },
    {
      question: "How does the risk analysis work?",
      answer: "Our AI scans project descriptions, identifying 23+ risk factors including budget, deadlines, and payment terms. Results in instant risk assessment."
    },
    {
      question: "How do you protect my data?",
      answer: "All data is encrypted with 256-bit SSL. We comply with GDPR and don't store personal information."
    },
    {
      question: "How can I join early access?",
      answer: "Leave your email in the form below - you'll get 3 months free and exclusive updates before the official launch."
    },
    {
      question: "What features are coming next?",
      answer: "CRM integrations, advanced analytics, AI negotiation assistant. Details in our Roadmap section."
    },
    {
      question: "Which platforms do you support?",
      answer: "Currently analyzing Upwork and Fiverr projects, with more platforms coming soon."
    },
    {
      question: "Is there a free plan?",
      answer: "Yes, our Starter plan is free forever with basic risk analysis features."
    }
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">Frequently Asked Questions</h2>
        
        <div className="space-y-8 md:space-y-10">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div 
                className="bg-white p-6 rounded-xl shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold flex items-center gap-3">
                    {index === 0 ? (
                      <QuestionMarkCircleIcon className="w-6 h-6 text-blue-600" />
                    ) : index === 3 ? (
                      <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                    ) : (
                      <ChevronDownIcon className="w-6 h-6 text-purple-600" />
                    )}
                    {faq.question}
                  </h3>
                  <ChevronDownIcon className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} />
                </div>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 text-gray-600">{faq.answer}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(faq => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
} 
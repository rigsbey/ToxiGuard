'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDownIcon, 
  QuestionMarkCircleIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';
import { useScrollToSection } from '@/hooks/useScrollToWaitlist';
import Script from 'next/script';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const scrollToWaitlist = useScrollToSection('waitlist-section');

  const faqs: FAQItem[] = [
    {
      question: "How does ToxiGuard protect freelancers from toxic clients?",
      answer: "ToxiGuard uses advanced AI to analyze project descriptions, client history, and communication patterns to identify 30+ risk factors including unrealistic deadlines, low budgets, scope creep indicators, and payment risk signals. Our system provides an instant risk assessment score and specific recommendations to help you avoid problematic clients before accepting projects."
    },
    {
      question: "What red flags can ToxiGuard detect in Upwork projects?",
      answer: "Our AI can detect numerous red flags including unrealistically low budgets (comparing to market rates), impossible deadlines, vague requirements that lead to scope creep, payment history issues, communication red flags, and contract terms that put freelancers at risk. ToxiGuard has been trained on thousands of problematic projects to recognize patterns that human freelancers might miss."
    },
    {
      question: "How accurate is ToxiGuard's risk analysis?",
      answer: "ToxiGuard's risk analysis has a 94% accuracy rate based on our validation studies. Our AI model is continuously trained on real-world freelance projects and outcomes, with regular updates to improve detection capabilities. We also incorporate feedback from our user community of 8,000+ freelancers to refine our algorithms."
    },
    {
      question: "Is ToxiGuard free to use?",
      answer: "Yes, ToxiGuard offers a free Basic plan that includes essential risk analysis features. Our Premium plan ($9.99/month) provides advanced protection with detailed risk breakdowns, custom risk thresholds, and unlimited project scans. Enterprise plans for agencies are also available with team management features."
    },
    {
      question: "Which freelance platforms does ToxiGuard work with?",
      answer: "ToxiGuard currently works with Upwork, Fiverr, and Freelancer.com through our Chrome extension. We're actively developing integrations for more platforms including PeoplePerHour, Guru, and direct client communications via Gmail. Our roadmap includes API integrations with popular freelancer CRM systems."
    },
    {
      question: "How does ToxiGuard help with contract protection?",
      answer: "ToxiGuard analyzes contract terms and project descriptions to identify clauses that may put freelancers at risk. Our system highlights potential issues with payment terms, intellectual property rights, scope definition, and cancellation policies. Premium users receive customizable contract templates designed to protect freelancers in various project scenarios."
    },
    {
      question: "Can ToxiGuard help me negotiate better rates with clients?",
      answer: "Absolutely! ToxiGuard provides market rate data for similar projects, helping you justify your rates with confidence. Our Premium plan includes a negotiation assistant that suggests specific talking points based on project requirements and client history, helping you secure fair compensation and better terms."
    }
  ];

  // Create structured data for FAQs
  const generateFAQSchema = () => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    
    return JSON.stringify(faqSchema);
  };

  return (
    <section id="faq-section" className="py-24 bg-gray-50">
      <Script id="faq-schema" type="application/ld+json">
        {generateFAQSchema()}
      </Script>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about protecting your freelance business
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-colors text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-lg pr-8">{faq.question}</span>
                <ChevronDownIcon 
                  className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} 
                />
              </button>
              
              {openIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5 pt-0 bg-white"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={scrollToWaitlist}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            <ShieldCheckIcon className="w-5 h-5" />
            Start protecting your business
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Free 7-day trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
} 
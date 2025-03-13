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

  return (
    <section id="faq-section" className="py-16 bg-gray-50">
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
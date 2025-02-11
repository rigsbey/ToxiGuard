'use client';

import { motion } from 'framer-motion';
import { useScrollToSection } from '@/hooks/useScrollToWaitlist';

export default function ComingSoonSection() {
  const scrollToWaitlist = useScrollToSection('waitlist-section');

  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-toxic-red p-4 z-50">
        <motion.button
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          onClick={scrollToWaitlist}
          className="w-full bg-white text-toxic-red py-3 rounded-full font-bold"
        >
          Get Early Access
        </motion.button>
      </div>
    </section>
  );
} 
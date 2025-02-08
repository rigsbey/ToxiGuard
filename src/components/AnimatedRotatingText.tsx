'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const TEXTS = [
  'Freelancers',
  'Startups',
  'Agencies',
  'Developers',
  'Designers'
];

export default function AnimatedRotatingText({ colors }: { colors: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % TEXTS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block relative">
      <AnimatePresence mode='wait'>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="inline-block mx-2"
        >
          <span className={`bg-gradient-to-r ${colors[index % colors.length]} text-transparent bg-clip-text font-bold`}>
            {TEXTS[index]}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 
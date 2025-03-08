'use client';

import dynamic from 'next/dynamic';

// Динамический импорт с выключенным SSR
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  ssr: false,
});

export default TestimonialsSection; 
import { useCallback } from 'react';
import { SCROLL_OFFSET } from '@/constants/sections';

export function useSmoothScroll() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset + SCROLL_OFFSET;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  }, []);

  return scrollToSection;
} 
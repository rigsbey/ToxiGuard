'use client';

import { SECTIONS } from '@/constants/sections';

export function useScrollToSection(sectionId: string) {
  return () => {
    if (typeof window !== 'undefined') {
      const scroll = () => {
        const header = document.querySelector('header');
        const headerHeight = header?.offsetHeight || 100;
        
        // Сначала пробуем найти по ID
        let section = document.getElementById(sectionId);
        
        // Если не нашли по ID, пробуем найти по data-section
        if (!section) {
          section = document.querySelector(`[data-section="${sectionId}"]`);
        }
        
        if (section) {
          const sectionTop = section.offsetTop - headerHeight - 40;
          window.scrollTo({ 
            top: sectionTop, 
            behavior: 'smooth' 
          });
        } else {
          console.warn(`Section not found: ${sectionId}`);
        }
      };

      // Пробуем скроллить с небольшой задержкой для уверенности, что DOM загрузился
      setTimeout(scroll, 100);
    }
  };
}

export const useScrollToWaitlist = () => useScrollToSection(SECTIONS.WAITLIST); 
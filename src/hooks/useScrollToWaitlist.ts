'use client';

import { SECTIONS } from '@/constants/sections';

// Переименуем хук для универсального использования
export function useScrollToSection(sectionId: string) {
  return () => {
    if (typeof window !== 'undefined') {
      const scroll = () => {
        const header = document.querySelector('header');
        const headerHeight = header?.offsetHeight || 100;
        const section = document.getElementById(sectionId);
        
        if (section) {
          console.log('Scrolling to:', sectionId);
          console.log('Header height:', headerHeight);
          console.log('Section offset:', section.offsetTop);
          // Добавляем дополнительный offset для секции Resources
          const extraOffset = sectionId === SECTIONS.RESOURCES ? 60 : 0;
          const sectionTop = section.offsetTop - headerHeight - extraOffset;
          
          window.scrollTo({ 
            top: sectionTop, 
            behavior: 'smooth' 
          });
        }
      };

      // Проверяем наличие секции и запускаем скролл
      if (!document.getElementById(sectionId)) {
        setTimeout(scroll, 150); // Увеличиваем задержку для загрузки
      } else {
        scroll();
      }
    }
  };
}

// Добавляем алиас для обратной совместимости
export const useScrollToWaitlist = () => useScrollToSection('waitlist-section'); 
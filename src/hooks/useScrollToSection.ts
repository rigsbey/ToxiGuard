'use client';

export const useScrollToSection = (sectionId: string) => {
  return () => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
}; 
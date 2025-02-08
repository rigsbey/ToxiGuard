// Переименуем хук для универсального использования
export function useScrollToSection(sectionId: string) {
  return () => {
    if (typeof window !== 'undefined') {
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight || 100;
      const section = document.getElementById(sectionId);
      
      if (section) {
        const sectionTop = section.offsetTop - headerHeight;
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        });
      }
    }
  };
}

// Добавляем алиас для обратной совместимости
export const useScrollToWaitlist = () => useScrollToSection('waitlist-section'); 
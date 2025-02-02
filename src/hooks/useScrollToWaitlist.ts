// Переименуем хук для универсального использования
export function useScrollToSection(sectionId: string) {
  return () => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
}

// Добавляем алиас для обратной совместимости
export const useScrollToWaitlist = () => useScrollToSection('waitlist-section'); 
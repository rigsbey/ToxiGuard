// Создаем общий хук для скролла
export function useScrollToWaitlist() {
  return () => {
    document.getElementById('waitlist-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
} 
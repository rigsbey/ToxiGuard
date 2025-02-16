// Добавляем локальное объявление для analytics,
// если переменная будет доступна в глобальной области (например, через внешний скрипт)
declare const analytics: {
  track: (event: string, data: { from: string; to: string; type: string }) => void;
};

export function monitorRedirect(type: string, from: string, to: string) {
  console.log(`[Redirect] ${type} ${from} -> ${to}`);
  // Отправка в аналитику
  analytics.track('redirect', { from, to, type });
} 
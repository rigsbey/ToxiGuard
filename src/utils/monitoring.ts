export function logRedirect(from: string, to: string, type: number) {
  console.log(`[Redirect] ${type} ${from} -> ${to}`);
  // Отправка в аналитику
  analytics.track('redirect', { from, to, type });
} 
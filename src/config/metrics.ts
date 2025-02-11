export const METRICS = {
  // Фиксированные значения
  RISK_ACCURACY: 0.98,
  PROTECTED_AMOUNT: 15000,
  MONTHLY_HOURS_SAVED: 50,
  
  // Обновленный форматтер
  formatProtectedAmount(): string {
    return `$${(this.PROTECTED_AMOUNT / 1000).toFixed(0)}k`;
  },

  // Обновленные метрики
  PROTECTED_USERS: '10k+',
  DETECTION_ACCURACY: '98%',
  RESPONSE_TIME: '<1h',
  
  // Улучшенный форматтер
  formatNumber(value: string | number, locale = 'ru-RU'): string {
    if (typeof value === 'string') return value;
    
    // Добавляем проверку на NaN/undefined
    if (typeof value !== 'number' || isNaN(value)) {
      return 'N/A';
    }
    
    // Форматирование для денежных значений
    if (value >= 1000) {
      return `$${(value/1000).toFixed(1)}k`;
    }
    
    return value.toLocaleString(locale);
  },

  // Остальные методы
  getSafeNumber(value: number | undefined, fallback: number): number {
    return Number(value) || fallback;
  },

  // Метод для форматирования времени экономии
  formatTimeSavings(hours?: number): string {
    return hours ? `${hours}h` : '50h'; // Fallback значение
  }
};

export const METRICS_LIST = [
  {
    id: 3,
    value: '92%',
    label: 'Risk Detection Accuracy'
  }
]; 
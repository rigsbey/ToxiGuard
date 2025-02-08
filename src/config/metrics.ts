export const METRICS = {
  // Основные метрики
  PROTECTED_FREELANCERS: '10k+',
  RISK_DETECTION_RATE: '98%',
  MONTHLY_HOURS_SAVED: '15h+',
  
  // Дополнительные числовые значения
  AVG_HOURS_SAVED: 50,
  PROTECTED_AMOUNT: 15000,
  RISK_ACCURACY: 0.92,
  CURRENT_SIGNUPS: 8214,
  
  // Добавляем новую метрику
  DISPUTE_RESOLUTION_RATE: '85%',
  
  // Добавим безопасные геттеры
  getSafeNumber(value: number | undefined, fallback: number): number {
    return Number(value) || fallback;
  }
};

export const METRICS_LIST = [
  {
    id: 1,
    value: '70%',
    label: 'Freelancers Facing Payment Issues'
  },
  {
    id: 2,
    value: '40%',
    label: 'Productivity Loss from Toxic Clients'
  },
  {
    id: 3,
    value: '92%',
    label: 'Risk Detection Accuracy'
  }
]; 
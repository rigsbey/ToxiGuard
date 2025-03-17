import React from 'react';
import { JobHistoryItem } from '@/lib/firestore';
import { ChartBarIcon, StarIcon, XMarkIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

interface StatisticsPanelProps {
  jobs: JobHistoryItem[];
}

// Компонент для создания маленького дугового индикатора
const ArcIndicator: React.FC<{ percentage: number; color: string }> = ({ percentage, color }) => {
  // Расчет угла для дуги
  const angle = (percentage / 100) * 360;
  // Расчет пути для SVG (дуги)
  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const center = 20;
  const radius = 16;
  const start = polarToCartesian(center, center, radius, 0);
  const end = polarToCartesian(center, center, radius, angle);
  const largeArcFlag = angle <= 180 ? '0' : '1';
  const path = [
    "M", center, center - radius,
    "A", radius, radius, 0, largeArcFlag, 1, end.x, end.y
  ].join(" ");

  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      {/* Серый фон дуги */}
      <circle cx="20" cy="20" r="16" fill="none" stroke="#e5e7eb" strokeWidth="4" />
      {/* Цветная дуга прогресса */}
      <path d={path} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
      {/* Текст с процентом в центре */}
      <text x="20" y="24" textAnchor="middle" fontSize="12" fontWeight="600" fill="currentColor">
        {percentage}%
      </text>
    </svg>
  );
};

// Компонент для создания мини-бар-диаграммы
const MiniBarChart: React.FC<{ data: number[]; color: string }> = ({ data, color }) => {
  // Находим максимальное значение для нормализации
  const max = Math.max(...data, 1);
  
  return (
    <div className="flex h-12 items-end gap-0.5">
      {data.map((value, index) => (
        <div 
          key={index} 
          className="w-3 bg-opacity-80 rounded-t-sm"
          style={{ 
            height: `${(value / max) * 100}%`, 
            backgroundColor: color
          }}
        />
      ))}
    </div>
  );
};

export default function StatisticsPanel({ jobs }: StatisticsPanelProps) {
  // Расчет статистики
  const totalJobs = jobs.length;
  
  // Избранные вакансии
  const favoriteJobs = jobs.filter(job => job.status === 'favorite').length;
  const favoritePercentage = totalJobs ? Math.round((favoriteJobs / totalJobs) * 100) : 0;
  
  // Отклоненные вакансии
  const rejectedJobs = jobs.filter(job => job.status === 'rejected').length;
  const rejectedPercentage = totalJobs ? Math.round((rejectedJobs / totalJobs) * 100) : 0;
  
  // Подсчет по уровням риска
  const riskLevels = jobs.reduce((acc, job) => {
    const level = job.riskLevel.toLowerCase();
    acc[level] = (acc[level] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  // Средний риск (предполагаем, что riskScore - числовой показатель риска)
  const averageRisk = totalJobs 
    ? Math.round(jobs.reduce((sum, job) => sum + (job.riskScore || 0), 0) / totalJobs) 
    : 0;
    
  // Данные для мини-диаграммы по рискам (последние 7 анализов)
  const recentRiskScores = jobs
    .sort((a, b) => {
      const dateA = a.timestamp ? (a.timestamp.toDate ? a.timestamp.toDate() : new Date(a.timestamp)) : new Date();
      const dateB = b.timestamp ? (b.timestamp.toDate ? b.timestamp.toDate() : new Date(b.timestamp)) : new Date();
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 7)
    .map(job => job.riskScore || 0)
    .reverse();
    
  // Функция для определения цвета на основе риска
  const getRiskColor = (risk: number) => {
    if (risk < 30) return 'bg-green-500';
    if (risk < 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  const riskColor = getRiskColor(averageRisk);
  const arcRiskColor = riskColor.replace('bg-', '#').replace('-500', '');
  
  // Определяем, какие метрики показывать в зависимости от размера экрана
  // На мобильных устройствах покажем только 2 главных метрики
  
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 mb-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
        <ChartBarIcon className="w-5 h-5 text-blue-600" />
        Job Analysis Statistics
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Общее количество проанализированных вакансий */}
        <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
          <div className="bg-indigo-100 rounded-full p-3">
            <DocumentTextIcon className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Analyzed</p>
            <p className="text-2xl font-bold text-gray-900">{totalJobs}</p>
          </div>
        </div>
        
        {/* Средний риск */}
        <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
          <div className={`${riskColor.replace('bg-', 'bg-')} bg-opacity-20 rounded-full p-3`}>
            <div className={`w-6 h-6 flex items-center justify-center font-bold ${riskColor.replace('bg-', 'text-')}`}>
              {averageRisk}
            </div>
          </div>
          <div className="flex-1">
            <p className="text-gray-500 text-sm">Average Risk</p>
            <div className="mt-1 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full ${riskColor}`} 
                style={{ width: `${Math.min(100, averageRisk)}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Избранные вакансии */}
        <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
          <div className="flex-shrink-0">
            <ArcIndicator percentage={favoritePercentage} color="#FBBF24" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Favorited</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-gray-900">{favoriteJobs}</span>
              <span className="text-yellow-500 text-sm font-medium">({favoritePercentage}%)</span>
            </div>
          </div>
        </div>
        
        {/* Отклоненные предложения */}
        <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
          <div className="flex-shrink-0">
            <ArcIndicator percentage={rejectedPercentage} color="#EF4444" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Rejected</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-gray-900">{rejectedJobs}</span>
              <span className="text-red-500 text-sm font-medium">({rejectedPercentage}%)</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Мини-график для мобильной версии (скрыт на десктопе) */}
      {recentRiskScores.length > 0 && (
        <div className="mt-4 lg:hidden">
          <p className="text-sm text-gray-500 mb-1">Risk Levels (last 7 jobs)</p>
          <MiniBarChart data={recentRiskScores} color={arcRiskColor} />
        </div>
      )}
      
      {/* Только для десктопной версии - дополнительная детализация */}
      <div className="hidden lg:flex mt-4 bg-gray-50 rounded-xl p-4">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1">Risk Levels (last 7 jobs)</p>
          <MiniBarChart data={recentRiskScores} color={arcRiskColor} />
        </div>
        <div className="flex-1 border-l border-gray-200 pl-4">
          <p className="text-sm text-gray-500 mb-2">Risk Level Distribution</p>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-xs text-gray-600">Low</span>
              </div>
              <span className="text-xs font-medium">{riskLevels['low'] || 0} jobs</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span className="text-xs text-gray-600">Medium</span>
              </div>
              <span className="text-xs font-medium">{riskLevels['medium'] || 0} jobs</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="text-xs text-gray-600">High</span>
              </div>
              <span className="text-xs font-medium">{riskLevels['high'] || 0} jobs</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-700"></div>
                <span className="text-xs text-gray-600">Critical</span>
              </div>
              <span className="text-xs font-medium">{riskLevels['critical'] || 0} jobs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
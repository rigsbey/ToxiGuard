'use client';

import { motion } from 'framer-motion';

interface BarChartProps {
  data: Array<{ label: string; value: number; color: string }>;
  className?: string;
}

const BarChart = ({ data, className }: BarChartProps) => {
  return (
    <div className={`flex items-end gap-6 ${className}`} style={{ height: '260px' }}>
      {data.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ height: 0 }}
          whileInView={{ height: `${item.value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
          style={{ 
            backgroundColor: item.color,
            backgroundImage: `linear-gradient(to top, ${item.color} 0%, ${item.color}DD 100%)`,
            boxShadow: `0 15px 40px ${item.color}40`,
            width: '80px'
          }}
          className="relative rounded-2xl group cursor-pointer hover:-translate-y-2 transition-transform"
        >
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-gray-800 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg">
              {item.value}%
              <div className="absolute w-3 h-3 bg-gray-800 rotate-45 -bottom-1 left-1/2 -translate-x-1/2" />
            </div>
          </div>
          
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-medium text-gray-600">
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export { BarChart }; 
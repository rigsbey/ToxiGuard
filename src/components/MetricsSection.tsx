import { METRICS } from '@/config/metrics';

const metricsData = [
  { 
    id: 1,
    value: '98%',
    description: 'Analysis Accuracy'
  },
  {
    id: 2,
    value: '$15k',
    description: 'Funds Protected'
  },
  {
    id: 3,
    value: '50h',
    description: 'Average Time Saved'
  }
];

export default function MetricsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {metricsData.map((metric) => (
          <div key={metric.id} className="text-center p-6">
            <div className="text-4xl font-bold text-primary-blue mb-2">
              {metric.value}
            </div>
            <p className="text-gray-600">{metric.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 
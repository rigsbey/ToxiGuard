export default function WaitlistProgress({ current = 8214, goal = 10000 }) {
  const progress = Math.min((current / goal) * 100, 100);

  return (
    <div className="space-y-4">
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-toxic-red transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>{current.toLocaleString('en-US')} joined</span>
        <span>Goal: {goal.toLocaleString('en-US')}</span>
      </div>
    </div>
  );
} 
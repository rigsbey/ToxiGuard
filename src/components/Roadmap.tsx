import { 
  CheckCircleIcon,
  ClockIcon 
} from '@heroicons/react/24/outline';

export default function Roadmap() {
  return (
    <section 
      id="roadmap" 
      className="py-24 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Product Roadmap</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Phase 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">Phase 1 - Q1 2024</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                AI Project Analysis
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                Risk Score Generation
              </li>
              <li className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-blue-500" />
                Payment Protection
              </li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">Phase 2 - Q2 2024</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-blue-500" />
                Client Database
              </li>
              <li className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-blue-500" />
                Contract Templates
              </li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">Phase 3 - Q3 2024</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-blue-500" />
                API Integration
              </li>
              <li className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-blue-500" />
                Mobile App
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 
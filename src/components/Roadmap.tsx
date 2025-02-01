export default function Roadmap() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Development Roadmap</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Phase 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-green-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🛠️</span>
              <h3 className="text-xl font-bold">Phase 1: Core Features</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                AI Project Analysis
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                Basic Templates
              </li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🚀</span>
              <h3 className="text-xl font-bold">Phase 2: Advanced</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <ArrowPathIcon className="w-5 h-5 text-blue-500 animate-spin" />
                CRM Integration
              </li>
              <li className="flex items-center gap-2">
                <ArrowPathIcon className="w-5 h-5 text-blue-500 animate-spin" />
                Team Collaboration
              </li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-purple-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🌐</span>
              <h3 className="text-xl font-bold">Phase 3: Ecosystem</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-purple-500" />
                API Access
              </li>
              <li className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-purple-500" />
                Marketplace
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 
export default function RoadmapSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Roadmap</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-primary-blue font-medium mb-2">Phase 1</div>
            <h3 className="font-bold mb-4">Basic Analysis</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• AI Project Brief Analysis</li>
              <li>• Red Flags Detection</li>
              <li>• Basic Response Templates</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-primary-blue font-medium mb-2">Phase 2</div>
            <h3 className="font-bold mb-4">Advanced Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• CRM Integration</li>
              <li>• Team Collaboration</li>
              <li>• Advanced Analytics</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-primary-blue font-medium mb-2">Phase 3</div>
            <h3 className="font-bold mb-4">Ecosystem</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Integration API</li>
              <li>• Templates Marketplace</li>
              <li>• AI Negotiation Assistant</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 
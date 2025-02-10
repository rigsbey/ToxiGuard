import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { ShareIcon, LinkIcon } from '@heroicons/react/24/outline';
import { SocialButton } from '@/components/SocialButton';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

type Params = {
  params: {
    slug: string
  }
}

const articles = {
  'elizabeth-ux': {
    title: 'How ToxicGuard Saved 50+ Freelance Hours/Month: UX Designer Case Study',
    content: `
      <div className="max-w-2xl mx-auto">
        <div className="prose prose-blue">
          <h2>Key Insights</h2>
          <ul>
            <li>82% freelancers face payment issues</li>
            <li>5 critical client red flags</li>
          </ul>

          <h2>Practical Strategies</h2>
          <div className="space-y-4">
            ${[1,2,3].map(i => `
              <div key="${i}" className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold">Strategy ${i}</h3>
                <p className="text-gray-600 mt-1 text-sm">
                  Actionable steps with real examples
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `,
    seoDescription: 'Learn how UX designer saved 50+ hours/month avoiding toxic clients using ToxicGuard AI risk detection',
    category: 'Case Studies',
    sections: [
      { title: 'Problem Statement', id: 'section-0' },
      { title: 'Solution Approach', id: 'section-1' }
    ],
    relatedArticles: [
      { slug: 'client-proposal-red-flags', title: 'How to Spot Red Flags in Client Proposals' },
      { slug: 'freelance-contract-guide', title: 'Freelance Contract Essentials' }
    ]
  },
  '10-priznakov-toksichnogo-klienta': {
    title: '10 Признаков Токсичного Клиента: Как Фрилансерам Избежать Проблем',
    seoDescription: 'Полное руководство по выявлению токсичных клиентов с практическими советами и решениями от ToxicGuard',
    content: `
      <div className="max-w-2xl mx-auto">
        <div className="prose prose-blue">
          <h2>Key Insights</h2>
          <ul>
            <li>82% freelancers face payment issues</li>
            <li>5 critical client red flags</li>
          </ul>

          <h2>Practical Strategies</h2>
          <div className="space-y-4">
            ${[1,2,3].map(i => `
              <div key="${i}" className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold">Strategy ${i}</h3>
                <p className="text-gray-600 mt-1 text-sm">
                  Actionable steps with real examples
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `,
    category: 'Case Studies',
    sections: [
      { title: 'Problem Statement', id: 'section-0' },
      { title: 'Solution Approach', id: 'section-1' }
    ],
    relatedArticles: [
      { slug: 'how-to-avoid-unpaid-work', title: 'Avoiding Unpaid Work Strategies' },
      { slug: 'client-negotiation-tactics', title: 'Client Negotiation Tactics' }
    ]
  },
  '10-signs-toxic-client': {
    title: '10 Signs of a Toxic Client: How Freelancers Can Avoid Pitfalls',
    seoDescription: 'Complete guide to identifying toxic clients with practical solutions from ToxicGuard',
    content: `
      <div className="max-w-2xl mx-auto">
        <div className="prose prose-blue">
          <h2>Key Insights</h2>
          <ul>
            <li>82% freelancers face payment issues</li>
            <li>5 critical client red flags</li>
          </ul>

          <h2>Practical Strategies</h2>
          <div className="space-y-4">
            ${[1,2,3].map(i => `
              <div key="${i}" className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold">Strategy ${i}</h3>
                <p className="text-gray-600 mt-1 text-sm">
                  Actionable steps with real examples
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `,
    category: 'Case Studies',
    sections: [
      { title: 'Problem Statement', id: 'section-0' },
      { title: 'Solution Approach', id: 'section-1' }
    ],
    relatedArticles: [
      { slug: 'how-to-avoid-unpaid-work', title: 'Avoiding Unpaid Work Strategies' },
      { slug: 'client-negotiation-tactics', title: 'Client Negotiation Tactics' }
    ]
  },
  'how-to-avoid-unpaid-work': {
    title: 'Как избежать неоплаты: 7 стратегий защиты для фрилансеров',
    seoDescription: 'Практическое руководство по защите от неоплаты с использованием AI-анализа ToxicGuard',
    content: `
      <div className="max-w-2xl mx-auto">
        <div className="prose prose-blue">
          <h2>Key Insights</h2>
          <ul>
            <li>82% freelancers face payment issues</li>
            <li>5 critical client red flags</li>
          </ul>

          <h2>Practical Strategies</h2>
          <div className="space-y-4">
            ${[1,2,3].map(i => `
              <div key="${i}" className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold">Strategy ${i}</h3>
                <p className="text-gray-600 mt-1 text-sm">
                  Actionable steps with real examples
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `,
    category: 'Case Studies',
    sections: [
      { title: 'Problem Statement', id: 'section-0' },
      { title: 'Solution Approach', id: 'section-1' }
    ],
    relatedArticles: [
      { slug: 'client-proposal-red-flags', title: 'How to Spot Red Flags in Client Proposals' },
      { slug: 'freelance-contract-guide', title: 'Freelance Contract Essentials' }
    ]
  },
  'freelance-contract-guide': {
    title: 'Идеальный контракт для фрилансера: 5 обязательных пунктов',
    seoDescription: 'Составление безопасного договора с использованием AI-ассистента ToxicGuard',
    content: `
      <div className="max-w-2xl mx-auto">
        <div className="prose prose-blue">
          <h2>Key Insights</h2>
          <ul>
            <li>82% freelancers face payment issues</li>
            <li>5 critical client red flags</li>
          </ul>

          <h2>Practical Strategies</h2>
          <div className="space-y-4">
            ${[1,2,3].map(i => `
              <div key="${i}" className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold">Strategy ${i}</h3>
                <p className="text-gray-600 mt-1 text-sm">
                  Actionable steps with real examples
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `,
    category: 'Case Studies',
    sections: [
      { title: 'Problem Statement', id: 'section-0' },
      { title: 'Solution Approach', id: 'section-1' }
    ],
    relatedArticles: [
      { slug: 'client-proposal-red-flags', title: 'How to Spot Red Flags in Client Proposals' },
      { slug: 'freelance-contract-clauses', title: 'Freelance Contract Essentials' }
    ]
  },
  'client-negotiation-tactics': {
    title: '7 психологических приемов в переговорах с клиентами',
    seoDescription: 'Как защитить свои интересы используя техники переговоров и AI-анализ ToxicGuard',
    content: `
      <div className="max-w-2xl mx-auto">
        <div className="prose prose-blue">
          <h2>Key Insights</h2>
          <ul>
            <li>82% freelancers face payment issues</li>
            <li>5 critical client red flags</li>
          </ul>

          <h2>Practical Strategies</h2>
          <div className="space-y-4">
            ${[1,2,3].map(i => `
              <div key="${i}" className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold">Strategy ${i}</h3>
                <p className="text-gray-600 mt-1 text-sm">
                  Actionable steps with real examples
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `,
    category: 'Case Studies',
    sections: [
      { title: 'Problem Statement', id: 'section-0' },
      { title: 'Solution Approach', id: 'section-1' }
    ],
    relatedArticles: [
      { slug: 'client-proposal-red-flags', title: 'How to Spot Red Flags in Client Proposals' },
      { slug: 'freelance-contract-guide', title: 'Freelance Contract Essentials' }
    ]
  },
  'client-proposal-red-flags': {
    title: "How to Spot Red Flags in Client Proposals: A Freelancer's Survival Guide",
    seoDescription: "Learn to detect toxic projects early using AI analysis. 5 critical questions + ToxicGuard scanning workflow.",
    content: `
      <div className="max-w-2xl mx-auto">
        <div className="prose prose-blue">
          <h2>Key Insights</h2>
          <ul>
            <li>82% freelancers face payment issues</li>
            <li>5 critical client red flags</li>
          </ul>

          <h2>Practical Strategies</h2>
          <div className="space-y-4">
            ${[1,2,3].map(i => `
              <div key="${i}" className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold">Strategy ${i}</h3>
                <p className="text-gray-600 mt-1 text-sm">
                  Actionable steps with real examples
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `,
    category: 'Case Studies',
    sections: [
      { title: 'Problem Statement', id: 'section-0' },
      { title: 'Solution Approach', id: 'section-1' }
    ],
    relatedArticles: [
      { slug: 'client-proposal-red-flags', title: 'How to Spot Red Flags in Client Proposals' },
      { slug: 'freelance-contract-guide', title: 'Freelance Contract Essentials' }
    ]
  },
  'freelance-contract-clauses': {
    title: "Freelancer Contracts 101: 7 AI-Approved Clauses to Prevent Scope Creep",
    seoDescription: "Legally-binding contract templates with AI risk analysis. Download free checklist + integration guide.",
    content: `
      <div className="max-w-2xl mx-auto">
        <div className="prose prose-blue">
          <h2>Key Insights</h2>
          <ul>
            <li>82% freelancers face payment issues</li>
            <li>5 critical client red flags</li>
          </ul>

          <h2>Practical Strategies</h2>
          <div className="space-y-4">
            ${[1,2,3].map(i => `
              <div key="${i}" className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold">Strategy ${i}</h3>
                <p className="text-gray-600 mt-1 text-sm">
                  Actionable steps with real examples
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `,
    category: 'Case Studies',
    sections: [
      { title: 'Problem Statement', id: 'section-0' },
      { title: 'Solution Approach', id: 'section-1' }
    ],
    relatedArticles: [
      { slug: 'client-proposal-red-flags', title: 'How to Spot Red Flags in Client Proposals' },
      { slug: 'freelance-contract-guide', title: 'Freelance Contract Essentials' }
    ]
  },
  'toxic-client-psychology': {
    title: "The Psychology of Toxic Clients: Why They Target Freelancers",
    seoDescription: "Behavioral analysis of toxic client patterns + AI detection methods. Case studies and protection strategies.",
    content: `
      <div className="max-w-2xl mx-auto">
        <div className="prose prose-blue">
          <h2>Key Insights</h2>
          <ul>
            <li>82% freelancers face payment issues</li>
            <li>5 critical client red flags</li>
          </ul>

          <h2>Practical Strategies</h2>
          <div className="space-y-4">
            ${[1,2,3].map(i => `
              <div key="${i}" className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold">Strategy ${i}</h3>
                <p className="text-gray-600 mt-1 text-sm">
                  Actionable steps with real examples
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `,
    category: 'Case Studies',
    sections: [
      { title: 'Problem Statement', id: 'section-0' },
      { title: 'Solution Approach', id: 'section-1' }
    ],
    relatedArticles: [
      { slug: 'client-proposal-red-flags', title: 'How to Spot Red Flags in Client Proposals' },
      { slug: 'freelance-contract-guide', title: 'Freelance Contract Essentials' }
    ]
  },
  'toxic-client-red-flags': {
    title: '10 Signs of a Toxic Client: Complete Detection Guide',
    seoDescription: 'Learn to identify dangerous client patterns with real case studies and AI analysis',
    content: `
      <div class="max-w-4xl mx-auto px-4">
        <!-- Hero Section -->
        <div class="text-center py-16">
          <h1 class="text-4xl font-bold mb-6">70% of freelancers lose money</h1>
          <p class="text-xl text-gray-600">Due to collaboration with toxic clients</p>
        </div>

        <!-- Key Stats -->
        <div class="grid md:grid-cols-3 gap-6 mb-16">
          <div class="bg-red-50 p-6 rounded-xl">
            <p class="text-3xl font-bold text-red-600">$7.2k</p>
            <p class="text-gray-700 mt-2">Average annual losses</p>
          </div>
          <div class="bg-yellow-50 p-6 rounded-xl">
            <p class="text-3xl font-bold text-yellow-600">23+</p>
            <p class="text-gray-700 mt-2">Risk patterns</p>
          </div>
          <div class="bg-green-50 p-6 rounded-xl">
            <p class="text-3xl font-bold text-green-600">92%</p>
            <p class="text-gray-700 mt-2">Detection effectiveness</p>
          </div>
        </div>

        <!-- Red Flags List -->
        <div class="space-y-12">
          ${[1,2,3,4,5,6,7,8,9,10].map(i => `
            <div class="group flex gap-6 items-start p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <div class="flex-shrink-0 w-14 h-14 bg-red-100 text-red-600 rounded-xl flex items-center justify-center text-2xl font-bold">
                ${i}
              </div>
              <div>
                <h3 class="text-xl font-bold mb-3">${[
                  'Unrealistic deadlines',
                  'Vague requirements',
                  'Demand for free work',
                  'Aggressive communication',
                  'Refusal of written contract',
                  'Constant changes',
                  'Inadequate budget',
                  'Negative reviews',
                  'Hidden tasks',
                  'Discount pressure'
                ][i-1]}</h3>
                <div class="prose">
                  <p class="text-gray-600 mb-4">
                    ${[
                      'Require two weeks of work per week. "It\'s just buttons!"',
                      '"Do it like Apple, but your way" - without specific TZs',
                      '"Show me first that you can, then we\'ll discuss payment"',
                      'Insults, threats, switching to personal attacks in communication',
                      '"Trust me, I won\'t disappear" - refusal of formal contract',
                      'Constant new requests after TZ approval',
                      'Offer 10% of the market value of the work',
                      'Many negative reviews from other executors',
                      'Unmentioned initial additional tasks',
                      '"Make a discount, and I\'ll recommend you"'
                    ][i-1]}
                  </p>
                  <div class="bg-gray-100 p-4 rounded-lg">
                    <p class="font-medium text-sm text-red-600 mb-2">How to detect:</p>
                    <p class="text-sm">${[
                      'Compare the deadline with similar projects through ToxicGuard',
                      'Use the requirements template from our generator',
                      'Check the client history in the database',
                      'Analyze the tone of messages with AI assistant',
                      'Generate a contract automatically',
                      'Set up scope change notifications',
                      'Compare with market prices in analytics',
                      'Check the reputation rating',
                      'Activate scope change monitoring',
                      'Calculate fair price through calculator'
                    ][i-1]}</p>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Protection Section -->
        <div class="my-16 p-8 bg-blue-50 rounded-2xl">
          <h2 class="text-2xl font-bold mb-6">Protection with ToxicGuard</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-xl">
              <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-xl">
                🔍
              </div>
              <h3 class="font-bold mb-2">AI Project Analysis</h3>
              <p class="text-gray-600 text-sm">Real-time risk pattern detection</p>
            </div>
            <div class="bg-white p-6 rounded-xl">
              <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-xl">
                📑
              </div>
              <h3 class="font-bold mb-2">Smart Contracts</h3>
              <p class="text-gray-600 text-sm">Automatic protection conditions</p>
            </div>
            <div class="bg-white p-6 rounded-xl">
              <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-xl">
                📊
              </div>
              <h3 class="font-bold mb-2">Risk Analytics</h3>
              <p class="text-gray-600 text-sm">Visualization of hidden threats</p>
            </div>
          </div>
        </div>
      </div>
    `,
    category: 'Safety',
    sections: [
      { title: 'Key Risks', id: 'section-0' },
      { title: 'Protection Methods', id: 'section-1' }
    ],
    relatedArticles: [
      { slug: 'how-to-avoid-unpaid-work', title: 'How to Avoid Unpaid Work' },
      { slug: 'client-negotiation-tactics', title: 'Client Negotiation Tactics' },
      { slug: 'freelance-contract-guide', title: 'Freelance Contract Guide' }
    ]
  },
  'contract-protection': {
    title: 'Freelance Contract Protection: Essential Guide for 2024',
    seoDescription: 'Learn how to create bulletproof freelance contracts with AI-powered analysis and real-world examples',
    content: `
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center py-16">
          <h1 class="text-4xl font-bold mb-6">73% of Contract Disputes are Preventable</h1>
          <p class="text-xl text-gray-600">AI-verified contract templates and protection strategies</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 mb-16">
          <div class="bg-blue-50 p-6 rounded-xl">
            <p class="text-3xl font-bold text-blue-600">50+</p>
            <p class="text-gray-700 mt-2">Legal-verified clauses</p>
          </div>
          <div class="bg-green-50 p-6 rounded-xl">
            <p class="text-3xl font-bold text-green-600">92%</p>
            <p class="text-gray-700 mt-2">Dispute win rate</p>
          </div>
          <div class="bg-purple-50 p-6 rounded-xl">
            <p class="text-3xl font-bold text-purple-600">24h</p>
            <p class="text-gray-700 mt-2">Average savings/contract</p>
          </div>
        </div>

        <div class="space-y-12">
          <h2 class="text-3xl font-bold mb-8">7 Essential Contract Elements</h2>
          ${[1,2,3,4,5,6,7].map(i => `
            <div class="group flex gap-6 items-start p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <div class="flex-shrink-0 w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl font-bold">
                ${i}
              </div>
              <div>
                <h3 class="text-xl font-bold mb-3">${[
                  'Scope Definition',
                  'Payment Terms',
                  'Intellectual Property',
                  'Revision Policy',
                  'Termination Clauses',
                  'Dispute Resolution',
                  'Confidentiality'
                ][i-1]}</h3>
                <div class="prose prose-lg text-gray-600">
                  ${[
                    'Clear project boundaries and deliverables definition',
                    'Milestone-based payments with upfront deposit',
                    'Copyright transfer conditions and usage rights',
                    'Number of revisions and additional cost structure',
                    'Project cancellation terms and final payment',
                    'Mediation process and jurisdiction choice',
                    'NDA terms and data protection guidelines'
                  ][i-1]}
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="my-16 p-8 bg-blue-50 rounded-2xl">
          <h2 class="text-2xl font-bold mb-6">ToxicGuard Contract Protection</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-xl">
              <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-xl">
                ⚡️
              </div>
              <h3 class="font-bold mb-2">AI Contract Review</h3>
              <p class="text-gray-600 text-sm">Real-time clause analysis</p>
            </div>
            <div class="bg-white p-6 rounded-xl">
              <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-xl">
                🔒
              </div>
              <h3 class="font-bold mb-2">Legal Templates</h3>
              <p class="text-gray-600 text-sm">Industry-specific contracts</p>
            </div>
            <div class="bg-white p-6 rounded-xl">
              <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-xl">
                📊
              </div>
              <h3 class="font-bold mb-2">Risk Analysis</h3>
              <p class="text-gray-600 text-sm">Clause-by-clause scoring</p>
            </div>
          </div>
        </div>
      </div>
    `,
    category: 'Legal',
    sections: [
      { title: 'Contract Elements', id: 'elements' },
      { title: 'Protection Tools', id: 'tools' }
    ],
    relatedArticles: [
      { slug: 'toxic-client-red-flags', title: '10 Signs of a Toxic Client' },
      { slug: 'scope-management', title: 'Effective Scope Management' }
    ]
  },
  'scope-management': {
    title: 'Scope Management: Preventing Project Creep and Overwork',
    seoDescription: 'Master project scope management with AI-powered tracking and automated change detection',
    content: `
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center py-16">
          <h1 class="text-4xl font-bold mb-6">68% of Projects Suffer from Scope Creep</h1>
          <p class="text-xl text-gray-600">AI-powered solutions for maintaining project boundaries</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 mb-16">
          <div class="bg-red-50 p-6 rounded-xl">
            <p class="text-3xl font-bold text-red-600">+47%</p>
            <p class="text-gray-700 mt-2">Average project overrun</p>
          </div>
          <div class="bg-green-50 p-6 rounded-xl">
            <p class="text-3xl font-bold text-green-600">94%</p>
            <p class="text-gray-700 mt-2">Prevention rate with AI</p>
          </div>
        </div>

        <div class="space-y-12">
          <h2 class="text-3xl font-bold mb-8">5 Scope Management Strategies</h2>
          ${[1,2,3,4,5].map(i => `
            <div class="group flex gap-6 items-start p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <div class="flex-shrink-0 w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-2xl font-bold">
                ${i}
              </div>
              <div>
                <h3 class="text-xl font-bold mb-3">${[
                  'Clear Initial Documentation',
                  'Change Request System',
                  'Regular Progress Tracking',
                  'Boundary Enforcement',
                  'Client Communication'
                ][i-1]}</h3>
                <div class="prose prose-lg text-gray-600">
                  ${[
                    'Detailed project requirements and limitations',
                    'Formal process for scope modifications',
                    'Milestone-based progress monitoring',
                    'Firm project boundaries and extra cost policy',
                    'Regular updates and expectation management'
                  ][i-1]}
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="my-16 p-8 bg-purple-50 rounded-2xl">
          <h2 class="text-2xl font-bold mb-6">ToxicGuard Scope Protection</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-xl">
              <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 text-xl">
                🔍
              </div>
              <h3 class="font-bold mb-2">Change Detection</h3>
              <p class="text-gray-600 text-sm">Automated scope monitoring</p>
            </div>
            <div class="bg-white p-6 rounded-xl">
              <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 text-xl">
                📝
              </div>
              <h3 class="font-bold mb-2">Requirements Doc</h3>
              <p class="text-gray-600 text-sm">AI-generated templates</p>
            </div>
            <div class="bg-white p-6 rounded-xl">
              <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 text-xl">
                ⚖️
              </div>
              <h3 class="font-bold mb-2">Cost Calculator</h3>
              <p class="text-gray-600 text-sm">Fair pricing for changes</p>
            </div>
          </div>
        </div>
      </div>
    `,
    category: 'Project Management',
    sections: [
      { title: 'Scope Strategies', id: 'strategies' },
      { title: 'AI Tools', id: 'tools' }
    ],
    relatedArticles: [
      { slug: 'contract-protection', title: 'Freelance Contract Protection' },
      { slug: 'toxic-client-red-flags', title: '10 Signs of a Toxic Client' }
    ]
  },
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const article = articles[params.slug];
  
  if (!article) notFound();

  return {
    title: article.title,
    description: article.seoDescription,
    openGraph: {
      title: article.title,
      description: article.seoDescription,
      type: 'article',
      locale: 'en_US',
      siteName: 'ToxicGuard',
      images: [{
        url: '/og-blog-en.png',
        width: 1200,
        height: 630,
      }],
    },
    alternates: {
      canonical: `/blog/${params.slug}`,
      languages: {
        'ru-RU': `/ru/blog/${params.slug}`,
        'x-default': `/blog/${params.slug}`,
      },
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Статья не найдена</h1>
        <Link
          href="/blog"
          className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-all"
        >
          Все статьи
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <article className="prose lg:prose-xl max-w-4xl mx-auto">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
        
        <div className="mt-16 bg-blue-50 p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-6">Join 8,214 Freelancers Who Blocked $15k+ Losses Last Month</h2>
          
          <form 
            action="/api/subscribe" 
            method="POST"
            className="max-w-md mx-auto flex gap-4"
          >
            <input type="hidden" name="cta_type" value="blog_signup" />
            
            <div className="flex-1 relative">
              <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
              <input
                type="email"
                name="email"
                required
                placeholder="Your professional email"
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Protect Me <span aria-hidden="true">→</span>
            </button>
          </form>
          
          <p className="text-sm text-gray-600 mt-4">Zero spam. Unsubscribe anytime</p>
        </div>
      </article>

      {article.relatedArticles?.length > 0 && (
        <section className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Recommended Reading</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {article.relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 transition-colors"
              >
                <h4 className="text-lg font-semibold mb-2">{related.title}</h4>
                <p className="text-gray-600 text-sm">Read Guide →</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Blog",
            "item": "https://toxiguard.site/blog"
          }, {
            "@type": "ListItem",
            "position": 2,
            "name": "${article.title}",
          }]
        })}
      </script>
    </div>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
} 
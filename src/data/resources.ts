import {
  ScaleIcon,
  CurrencyDollarIcon,
  ShieldExclamationIcon,
  ClockIcon,
  ChartBarIcon,
  UserGroupIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

export const expertResources = [
  {
    slug: 'toxic-client-red-flags',
    title: '10 Signs of a Toxic Client: Complete Detection Guide',
    description: 'Learn to identify dangerous client patterns with real case studies and AI analysis',
    readingTime: '7 min',
    category: 'Safety',
    iconType: 'shield',
    seo: {
      title: '10 Red Flags of Toxic Clients | ToxicGuard AI Protection',
      description: 'AI-powered detection of 23+ toxic client patterns. Real freelancer case studies and protection strategies',
      keywords: ['toxic clients', 'freelancer safety', 'red flags', 'AI risk detection']
    },
    content: `
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center py-16">
          <h1 class="text-4xl font-bold mb-6">70% of freelancers lose money</h1>
          <p class="text-xl text-gray-600">Due to collaboration with toxic clients</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 mb-16">
          <div class="bg-red-50 p-6 rounded-xl">
            <p class="text-3xl font-bold text-red-600">$7.2k</p>
            <p class="text-gray-700 mt-2">Average annual losses</p>
          </div>
          <!-- Other stats translated -->
        </div>

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
                <!-- Content translated -->
              </div>
            </div>
          `).join('')}
        </div>

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
            <!-- Other features translated -->
          </div>
        </div>
      </div>
    `,
    relatedArticles: [
      { slug: 'avoid-unpaid-work', title: 'How to Avoid Unpaid Work' },
      { slug: 'client-negotiation', title: 'Client Negotiation Tactics' },
      { slug: 'freelance-contracts', title: 'Freelance Contract Guide' }
    ]
  },
  {
    slug: 'contract-protection',
    title: 'Freelancer Legal Shield: AI-Approved Contract Templates',
    description: 'Legally-binding agreements with automated risk scoring and clause recommendations',
    readingTime: '9 min',
    category: 'Legal',
    iconType: 'scale',
    seo: {
      title: 'Bulletproof Freelance Contracts with AI Protection',
      description: 'Generate safe contracts with real-time legal risk analysis. 50+ clause database and automated compliance checks',
      keywords: ['freelance contracts', 'legal protection', 'AI contract review']
    },
    content: `
      <div class="prose lg:prose-xl max-w-4xl mx-auto">
        <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl mb-12">
          <h2 class="flex items-center gap-3 text-2xl font-bold text-blue-800 mb-6">
            <span class="p-2 bg-blue-200 rounded-lg">⚖️</span>
            Защита интересов фрилансера
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white/80 p-6 rounded-xl">
              <p class="text-3xl font-bold text-blue-600 mb-2">92%</p>
              <p class="text-gray-700">споров решаются в пользу фрилансера при наличии грамотного договора</p>
            </div>
            <div class="bg-white/80 p-6 rounded-xl">
              <p class="text-3xl font-bold text-blue-600 mb-2">50+</p>
              <p class="text-gray-700">юридически проверенных шаблонов от экспертов</p>
            </div>
          </div>
        </div>

        <h2 class="text-3xl font-bold mb-8">7 Ключевых Пунктов Договора</h2>

        <div class="space-y-12">
          <div class="flex gap-6">
            <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
              1
            </div>
            <div>
              <h3 class="text-xl font-bold mb-3">Объем работ и критерии приемки</h3>
              <p class="text-gray-600 mb-4">
                Четкое описание всех задач и критериев успешного выполнения защищает от неограниченных правок.
              </p>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="font-medium mb-2">✅ Пример формулировки:</p>
                <p class="italic text-gray-600">"Исполнитель разрабатывает дизайн главной страницы сайта, включающий: хедер, футер, секцию hero, блок преимуществ (до 6 карточек), форму обратной связи. Количество раундов правок: 2."</p>
              </div>
            </div>
          </div>

          <!-- Продолжайте для остальных пунктов -->
        </div>

        <div class="my-16 p-8 bg-green-50 rounded-2xl">
          <h2 class="text-2xl font-bold mb-6">Преимущества AI-проверки договоров</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-xl">
              <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                🤖
              </div>
              <h3 class="font-bold mb-2">Мгновенный анализ</h3>
              <p class="text-gray-600 text-sm">Проверка всех пунктов за 30 секунд</p>
            </div>
            <!-- Добавьте еще преимущества -->
          </div>
        </div>
      </div>
    `
  },
  {
    slug: 'scope-management',
    title: 'Preventing Scope Creep: Complete Guide',
    description: 'Practical strategies for maintaining project boundaries and preventing endless revisions',
    readingTime: '6 min',
    category: 'Project Management',
    iconType: 'chart',
    seo: {
      title: 'Scope Creep Prevention Guide | Project Management Tips',
      description: 'Learn how to prevent scope creep and maintain project boundaries. Real strategies from successful freelancers.',
      keywords: ['scope creep', 'project management', 'freelance tips', 'client management']
    },
    content: `
      <div class="prose lg:prose-xl max-w-4xl mx-auto">
        <div class="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-2xl mb-12">
          <h2 class="flex items-center gap-3 text-2xl font-bold text-purple-800 mb-6">
            <span class="p-2 bg-purple-200 rounded-lg">📊</span>
            Влияние scope creep на проект
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white/80 p-6 rounded-xl">
              <p class="text-3xl font-bold text-purple-600 mb-2">+64%</p>
              <p class="text-gray-700">проектов выходят за рамки изначального объема</p>
            </div>
            <div class="bg-white/80 p-6 rounded-xl">
              <p class="text-3xl font-bold text-purple-600 mb-2">-40%</p>
              <p class="text-gray-700">падение прибыльности при неконтролируемом расширении</p>
            </div>
          </div>
        </div>

        <h2 class="text-3xl font-bold mb-8">5 Стратегий Контроля Объема Работ</h2>

        <div class="space-y-12">
          <div class="flex gap-6">
            <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 font-bold">
              1
            </div>
            <div>
              <h3 class="text-xl font-bold mb-3">Детальное техническое задание</h3>
              <p class="text-gray-600 mb-4">
                Подробное описание всех функций и ограничений проекта с самого начала - ключ к предотвращению scope creep.
              </p>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="font-medium mb-2">📝 Чек-лист ТЗ:</p>
                <ul class="space-y-2 text-gray-600">
                  <li>• Функциональные требования</li>
                  <li>• Ограничения проекта</li>
                  <li>• Критерии приемки</li>
                  <li>• План коммуникаций</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Продолжайте для остальных стратегий -->
        </div>

        <div class="my-16 p-8 bg-indigo-50 rounded-2xl">
          <h2 class="text-2xl font-bold mb-6">Автоматизация контроля с ToxicGuard</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-xl">
              <div class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                📱
              </div>
              <h3 class="font-bold mb-2">Трекинг изменений</h3>
              <p class="text-gray-600 text-sm">Автоматическое отслеживание всех запросов на изменение</p>
            </div>
            <!-- Добавьте еще преимущества -->
          </div>
        </div>
      </div>
    `
  }
]; 
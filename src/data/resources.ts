import {
  ScaleIcon,
  CurrencyDollarIcon,
  ShieldExclamationIcon,
  ClockIcon,
  ChartBarIcon,
  UserGroupIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

// Добавляем интерфейс для рисков
interface Risk {
  type: 'error' | 'warning';
  title: string;
  description: string;
  icon: 'money' | 'question' | 'clock';
}

// Добавляем перед export const expertResources
const risks: Risk[] = [
  {
    type: 'error',
    title: 'Нереальный бюджет',
    description: 'Бюджет $30.00, что на 85% ниже рыночной ставки',
    icon: 'money'
  },
  {
    type: 'warning',
    title: 'Сроки выполнения',
    description: 'Дедлайн установлен без учета этапов проверки',
    icon: 'clock'
  },
  {
    type: 'error',
    title: 'Отсутствие ТЗ',
    description: 'Техническое задание не предоставлено клиентом',
    icon: 'question'
  }
];

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
      <div class="max-w-4xl mx-auto px-4 relative pb-20 md:pb-0">
        <div class="text-center py-8 md:py-16">
          <h1 class="text-2xl md:text-4xl font-bold mb-4 md:mb-6">70% фрилансеров теряют деньги</h1>
          <p class="text-lg md:text-xl text-gray-600">Из-за сотрудничества с токсичными клиентами</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16">
          <div class="bg-red-50 p-4 md:p-6 rounded-xl">
            <p class="text-2xl md:text-3xl font-bold text-red-600">$7.2k</p>
            <p class="text-sm md:text-base text-gray-700 mt-2">Средние годовые потери</p>
          </div>
          <!-- Other stats translated -->
        </div>

        <div class="space-y-6 md:space-y-12">
          ${[1,2,3,4,5,6,7,8,9,10].map(i => `
            <div class="group flex gap-4 md:gap-6 items-start p-4 md:p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <div class="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 bg-red-100 text-red-600 rounded-xl flex items-center justify-center text-xl md:text-2xl font-bold">
                ${i}
              </div>
              <div>
                <h3 class="text-lg md:text-xl font-bold mb-2 md:mb-3">${[
                  'Нереальные дедлайны',
                  'Размытые требования',
                  'Требование бесплатной работы',
                  'Агрессивная коммуникация',
                  'Отказ от письменного договора',
                  'Постоянные изменения',
                  'Неадекватный бюджет',
                  'Негативные отзывы',
                  'Скрытые задачи',
                  'Давление на скидки'
                ][i-1]}</h3>
                <!-- Content translated -->
              </div>
            </div>
          `).join('')}
        </div>

        <div class="my-8 md:my-16 p-4 md:p-8 bg-blue-50 rounded-2xl">
          <h2 class="text-xl md:text-2xl font-bold mb-4 md:mb-6">Защита с ToxicGuard</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div class="bg-white p-4 md:p-6 rounded-xl">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3 md:mb-4 text-lg md:text-xl">
                🔍
              </div>
              <h3 class="font-bold mb-2">AI Анализ Проекта</h3>
              <p class="text-sm text-gray-600">Обнаружение рисков в реальном времени</p>
            </div>
            <!-- Other features translated -->
          </div>
        </div>

        <!-- Адаптивный блок рисков -->
        <div class="md:absolute md:right-0 md:top-0 md:w-1/3 w-full md:pl-6">
          <div class="bg-white rounded-xl p-4 md:p-6 shadow-sm md:shadow-lg mt-6 md:mt-0">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                ⚠️
              </div>
              <div>
                <h2 class="font-bold text-lg">Критические риски</h2>
                <p class="text-sm text-gray-600">Требуют немедленного внимания</p>
              </div>
            </div>
            
            <div class="flex flex-col gap-4">
              ${risks.map(risk => `
                <div class="group flex items-start gap-3 p-3 bg-${risk.type === 'error' ? 'red' : 'orange'}-50 rounded-lg transition-colors">
                  <div class="w-6 h-6 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-sm">
                    ${risk.icon === 'money' ? '💸' : risk.icon === 'clock' ? '⏳' : '❓'}
                  </div>
                  <div class="min-w-0">
                    <h3 class="font-medium text-gray-900 truncate">${risk.title}</h3>
                    <p class="text-sm text-gray-600 break-words">${risk.description}</p>
                  </div>
                </div>
              `).join('')}
            </div>
            
            <div class="mt-6 min-h-[60px]">
              <button class="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-shadow">
                Полный отчет
              </button>
            </div>
          </div>
        </div>
      </div>
    `,
    relatedArticles: [
      { slug: 'avoid-unpaid-work', title: 'How to Avoid Unpaid Work' },
      { slug: 'client-negotiation', title: 'Client Negotiation Tactics' },
      { slug: 'freelance-contracts', title: 'Freelance Contract Guide' }
    ],
    risks: [
      {
        type: 'error',
        title: 'Нереальный бюджет',
        description: 'Бюджет $30.00, что на 85% ниже рыночной ставки',
        icon: 'money'
      },
      {
        type: 'warning',
        title: 'Размытые требования',
        description: 'Необходимо парсить весь сайт без детальных критериев',
        icon: 'question'
      },
      {
        type: 'error',
        title: 'Риск сроков',
        description: 'Дедлайн: ASAP, без конкретных временных рамок',
        icon: 'clock'
      }
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

// Обновленные стили
const styles = `
  @media (max-width: 768px) {
    .detected-risks-panel {
      height: 85vh !important;
      top: auto !important;
      border-radius: 1.5rem 1.5rem 0 0;
      box-shadow: 0 -4px 20px rgba(0,0,0,0.1);
    }
    
    .detected-risks-panel > div {
      padding-bottom: 80px; /* Место для кнопки */
    }
    
    .detected-risks-panel.show {
      transform: translateY(0);
    }
  }
`; 
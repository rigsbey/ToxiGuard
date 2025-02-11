// Добавляем интерфейс для ресурсов
export interface ExpertResource {
  slug: string;
  title: string;
  description: string;
  content: string;
  readingTime: string;
  category: string;
  iconType: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  relatedArticles?: Array<{ slug: string; title: string }>;
}

export const expertResources: ExpertResource[] = [
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
    content: `...`,
    relatedArticles: [
      { slug: 'avoid-unpaid-work', title: 'How to Avoid Unpaid Work' },
      { slug: 'client-negotiation', title: 'Client Negotiation Tactics' }
    ]
  },
  {
    slug: 'client-screening-checklist',
    title: 'Ultimate Client Screening Checklist',
    description: 'Step-by-step guide to vet clients effectively with AI-powered tools',
    readingTime: '9 min',
    category: 'Onboarding',
    iconType: 'checklist',
    seo: {
      title: 'Client Screening Checklist for Freelancers | ToxicGuard',
      description: 'Comprehensive client vetting process with 15+ crucial checks and risk assessment templates',
      keywords: ['client screening', 'freelance checklist', 'client vetting']
    },
    content: '...'
  },
  {
    slug: 'contract-template',
    title: 'Freelancer Contract Template',
    description: 'Legally-vetted contract template with AI risk clauses',
    readingTime: '5 min', 
    category: 'Legal',
    iconType: 'document',
    seo: {
      title: 'Freelancer Contract Template with AI Protection',
      description: 'Customizable contract template with built-in risk prevention clauses and payment terms',
      keywords: ['freelance contract', 'legal template', 'AI contract']
    },
    content: '...'
  },
  // другие ресурсы
]; 
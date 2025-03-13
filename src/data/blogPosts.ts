export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  isoDate: string;
  readTime: string;
  category: string;
  image: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '10 Warning Signs of a Toxic Client on Upwork',
    slug: 'warning-signs-toxic-client-upwork',
    excerpt: 'Learn to identify red flags in project descriptions and client behavior before accepting work.',
    date: 'March 10, 2025',
    isoDate: '2025-03-10T10:00:00Z',
    readTime: '8 min read',
    category: 'Client Screening',
    image: '/blog/toxic-client-signs.jpg',
    keywords: ['toxic client warning signs', 'upwork red flags', 'bad client indicators', 'freelance client screening', 'upwork client vetting', 'freelance protection']
  },
  {
    id: 2,
    title: 'How to Create Bulletproof Freelance Contracts',
    slug: 'bulletproof-freelance-contracts',
    excerpt: 'Protect your work and ensure payment with these essential contract clauses every freelancer needs.',
    date: 'March 5, 2025',
    isoDate: '2025-03-05T10:00:00Z',
    readTime: '10 min read',
    category: 'Contract Protection',
    image: '/blog/freelance-contracts.jpg',
    keywords: ['freelance contracts', 'contract protection', 'scope creep prevention', 'payment protection clauses', 'freelance legal protection', 'intellectual property rights']
  },
  {
    id: 3,
    title: 'The Real Cost of Bad Clients: A Freelancer\'s Guide',
    slug: 'real-cost-bad-clients-freelancer-guide',
    excerpt: 'How problematic clients impact your income, mental health, and career growth - with data from 1,000+ freelancers.',
    date: 'February 28, 2025',
    isoDate: '2025-02-28T10:00:00Z',
    readTime: '12 min read',
    category: 'Freelance Business',
    image: '/blog/cost-bad-clients.jpg',
    keywords: ['bad client cost', 'toxic client impact', 'freelance mental health', 'client relationship ROI', 'freelance business protection']
  },
  {
    id: 4,
    title: 'AI for Freelancers: How Technology is Changing Client Screening',
    slug: 'ai-freelancers-client-screening',
    excerpt: 'Discover how artificial intelligence is helping freelancers identify risks and make better business decisions.',
    date: 'February 20, 2025',
    isoDate: '2025-02-20T10:00:00Z',
    readTime: '9 min read',
    category: 'Technology',
    image: '/blog/ai-freelancers.jpg',
    keywords: ['AI freelance tools', 'client screening technology', 'freelance risk assessment', 'artificial intelligence freelancing', 'automated client vetting']
  },
  {
    id: 5,
    title: 'Payment Protection Strategies for Remote Workers',
    slug: 'payment-protection-remote-workers',
    excerpt: 'Essential tactics to ensure you get paid on time, every time - from milestone payments to escrow services.',
    date: 'February 15, 2025',
    isoDate: '2025-02-15T10:00:00Z',
    readTime: '7 min read',
    category: 'Payment Security',
    image: '/blog/payment-protection.jpg',
    keywords: ['freelance payment protection', 'secure payment methods', 'milestone payments', 'escrow services', 'preventing payment disputes']
  },
  {
    id: 6,
    title: 'How to Negotiate Better Rates with Confidence',
    slug: 'negotiate-better-rates-confidence',
    excerpt: 'Practical scripts and strategies to increase your rates without losing clients.',
    date: 'February 8, 2025',
    isoDate: '2025-02-08T10:00:00Z',
    readTime: '11 min read',
    category: 'Negotiation',
    image: '/blog/negotiate-rates.jpg',
    keywords: ['freelance rate negotiation', 'increasing freelance rates', 'value-based pricing', 'client negotiation scripts', 'confidence in pricing']
  }
];

export function getRelatedPosts(currentSlug: string, limit: number = 2): BlogPost[] {
  return blogPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
} 
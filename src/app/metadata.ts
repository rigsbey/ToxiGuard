export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://toxiguard.site'),
  title: 'ToxiGuard: AI Protection Against Toxic Clients for Freelancers',
  description: 'Protect your business with ToxiGuard — AI-driven project analysis, risk prevention, and secure contracts. Over 8,000+ freelancers save time and money.',
  keywords: [
    'protection against toxic clients',
    'AI for freelancers',
    'project risk analysis',
    'secure contracts for freelancers',
    'how to avoid toxic clients',
    'payment protection',
    'AI risk scanner'
  ],
  openGraph: {
    title: 'ToxiGuard: AI Protection for Freelancers Against Toxic Clients',
    description: 'Protect your freelance business with AI: detect risks, avoid problem clients, and secure your payments.',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ToxiGuard — AI Protection for Freelancers',
      }
    ],
    siteName: 'ToxiGuard',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ToxiGuard: AI Protection for Freelancers',
    description: 'AI for detecting toxic clients and protecting payments',
    images: ['/og-image.jpg'],
  }
}; 
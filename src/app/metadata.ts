export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://toxiguard.site'),
  title: 'ToxiGuard: AI Risk Shield for Upwork Freelancers & Agencies',
  description: 'Detect toxic clients on Upwork with ToxiGuard AI. Real-time risk analysis for freelancers and agencies. Payment protection and red flag alerts. Join 8214+ users who avoid bad clients.',
  keywords: [
    'protection against toxic clients',
    'AI for freelancers',
    'AI for agencies',
    'project risk analysis',
    'secure contracts for freelancers',
    'upwork agency protection',
    'how to avoid toxic clients',
    'payment protection',
    'AI risk scanner',
    'upwork risk shield'
  ],
  openGraph: {
    title: 'ToxiGuard: AI Risk Shield for Upwork Freelancers & Agencies',
    description: 'Detect toxic clients on Upwork with ToxiGuard AI. Real-time risk analysis for freelancers and agencies. Payment protection and red flag alerts. Join 8214+ users who avoid bad clients.',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ToxiGuard — AI Risk Shield for Upwork Freelancers & Agencies',
      }
    ],
    siteName: 'ToxiGuard',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ToxiGuard: AI Risk Shield for Upwork Freelancers & Agencies',
    description: 'Detect toxic clients on Upwork with ToxiGuard AI. Real-time risk analysis for freelancers and agencies. Payment protection and red flag alerts.',
    images: ['/og-image.jpg'],
  }
}; 
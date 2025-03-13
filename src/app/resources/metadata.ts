import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ресурсы ToxiGuard | Инструменты для защиты фрилансеров',
  description: 'Полезные инструменты, шаблоны и руководства для безопасной работы на фрилансе. Защитите свой бизнес от мошенников и токсичных клиентов.',
  keywords: ['инструменты фрилансера', 'шаблоны договоров', 'безопасность фриланса', 'проверка клиентов', 'фриланс ресурсы'],
  openGraph: {
    title: 'Ресурсы ToxiGuard | Инструменты для защиты фрилансеров',
    description: 'Полезные инструменты и руководства для безопасной работы на фрилансе',
    type: 'website',
    url: 'https://toxiguard.site/resources',
    images: [
      {
        url: '/images/resources-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ToxiGuard Resources - Инструменты для фрилансеров',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ресурсы ToxiGuard | Инструменты для фрилансеров',
    description: 'Полезные инструменты и руководства для безопасной работы',
    images: ['/images/resources-twitter-image.jpg'],
  },
}; 
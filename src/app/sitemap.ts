import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://toxiguard.site';

  // Основные статические маршруты
  const staticRoutes = [
    '',
    '/how-it-works',
    '/pricing',
    '/resources',
    '/blog',
    '/privacy',
    '/terms',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as 'daily' | 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Здесь можно добавить динамические маршруты, например из базы данных
  // const posts = await db.query.posts.findMany()
  // const dynamicRoutes = posts.map(post => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.6,
  // }));

  return [...staticRoutes];
} 
import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://toxiguard.site';

  // Основные статические маршруты
  const staticRoutes = [
    '',
    '/how-it-works',
    '/pricing',
    '/blog',
    '/privacy',
    '/terms',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as 'daily' | 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Получаем все статьи блога
  const postsDirectory = path.join(process.cwd(), 'src/data/blog-posts');
  const blogRoutes = fs.readdirSync(postsDirectory)
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      const slug = filename.replace(/\.md$/, '');
      
      return {
        url: `${baseUrl}/blog/${slug}`,
        lastModified: (data.date ? new Date(data.date) : new Date()).toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      };
    });

  return [...staticRoutes, ...blogRoutes];
} 
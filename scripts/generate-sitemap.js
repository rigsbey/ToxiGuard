const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Статические страницы с высоким приоритетом
const staticPages = [
  '/',
  '/how-it-works',
  '/pricing',
  '/blog',
  '/privacy',
  '/terms'
];

// Получаем все markdown-файлы блога
function getBlogPaths() {
  const postsDir = path.join(__dirname, '../src/data/blog-posts');
  if (!fs.existsSync(postsDir)) return [];

  return fs.readdirSync(postsDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const fileContents = fs.readFileSync(path.join(postsDir, file), 'utf8');
      const { data } = matter(fileContents);
      const lastmod = data.date && data.date !== 'YYYY-MM-DD' ? data.date : new Date().toISOString().split('T')[0];
      return { url: `/blog/${slug}`, lastmod };
    });
}

const blogPaths = getBlogPaths();

// Формируем XML
const today = new Date().toISOString().split('T')[0];

function createUrlEntry(url, lastmod = today, priority = 0.8) {
  return `  <url>\n    <loc>https://toxiguard.site${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
  ...staticPages.map((url, idx) => createUrlEntry(url, today, idx === 0 ? 1 : 0.8)),
  ...blogPaths.map(({ url, lastmod }) => createUrlEntry(url, lastmod, 0.6))
].join('\n')}\n</urlset>`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), xml.trim());
console.log('✅ Sitemap regenerated with', staticPages.length + blogPaths.length, 'URLs'); 
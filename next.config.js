const isDevelopment = process.env.NODE_ENV === 'development';
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    domains: ['toxiguard.site'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: 'public/googlee5bfa023f20e3180.html',
            to: '.'
          },
          {
            from: 'public/robots.txt',
            to: '.'
          },
          {
            from: 'public/sitemap.xml',
            to: '.'
          }
        ]
      })
    );
    return config;
  },
  // Добавляем редиректы для удаленных страниц
  async redirects() {
    return [
      {
        source: '/how-it-works',
        destination: '/',
        permanent: true,
      },
      {
        source: '/how-it-works/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/waitlist',
        destination: '/',
        permanent: true,
      },
      {
        source: '/www/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
  // Добавляем заголовки для SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  experimental: {
  }
};

console.log('ENV DEBUG:', {
  NODE_ENV: process.env.NODE_ENV,
  VERCEL_ENV: process.env.VERCEL_ENV,
  CI: process.env.CI
});

module.exports = nextConfig; 
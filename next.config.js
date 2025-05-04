const isDevelopment = process.env.NODE_ENV === 'development';
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

// Добавляем анализатор бандла
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    domains: [
      'toxiguard.site',
      'images.unsplash.com',
      'styles.redditmedia.com',
      'i.redd.it'
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: 'public/cJxB6xaxazRAHUhm1d7MgbgciM8QiVZY0Vg4TIwbhe8.html',
            to: '.'
          }
        ]
      })
    );
    return config;
  },
  async headers() {
    return [
      {
        // Применяем заголовки ко всем путям в приложении
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload' // HSTS: 2 года
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN' // Защита от кликджекинга
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups' // COOP
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff' // Защита от MIME-сниффинга
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin' // Контроль заголовка Referer
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()' // Ограничение разрешений
          }
        ],
      },
    ]
  },
  // Настраиваем необходимые редиректы
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/_next/static/:path*',
        destination: '/_next/static/:path*',
        permanent: true,
      },
      {
        source: '/static/:path*',
        destination: '/static/:path*',
        permanent: true,
      }
    ];
  },
  experimental: {
    optimizeCss: true,
  }
};

console.log('ENV DEBUG:', {
  NODE_ENV: process.env.NODE_ENV,
  VERCEL_ENV: process.env.VERCEL_ENV,
  CI: process.env.CI
});

// Экспортируем конфигурацию, обернутую в анализатор
module.exports = withBundleAnalyzer(nextConfig); 
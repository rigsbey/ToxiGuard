const isDevelopment = process.env.NODE_ENV === 'development';
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
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
            from: 'public/cJxB6xaxazRAHUhm1d7MgbgciM8QiVZY0Vg4TIwbhe8.html',
            to: '.'
          }
        ]
      })
    );
    return config;
  },
  // Временно отключаем перенаправления, чтобы избежать конфликтов с middleware
  async redirects() {
    return [];
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

module.exports = nextConfig; 
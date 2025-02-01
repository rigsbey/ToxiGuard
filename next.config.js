module.exports = {
  // Убедитесь что нет лишних правил
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ],
      },
    ]
  }
}; 
module.exports = {
  // УДАЛИТЬ ПРАВИЛА REWRITES
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
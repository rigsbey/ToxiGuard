/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2A5CAA',
        'success-green': '#4CAF50',
        'toxic-red': '#EF4444',
        'warning-orange': '#F59E0B',
        primary: '#2A2A2A',
        secondary: '#5E5E5E',
        accent: '#00C389',
        'accent-dark': '#008C65'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        headings: ['Space Grotesk', 'sans-serif']
      },
      boxShadow: {
        'cyber-green/30': '0 0 30px rgba(0, 255, 136, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

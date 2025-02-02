/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html'
  ],
  important: true,
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2A5CAA',
        'neutral-800': '#2D2D2D',
        'neutral-600': '#4A4A4A',
        'accent-teal': '#00C4B8',
        'accent-teal-dark': '#009688',
        'success-green': '#4CAF50',
        'warning-orange': '#F59E0B',
        'amber-500': '#F59E0B',
        'amber-600': '#D97706',
        primary: '#2A5CAA',
        secondary: '#00C4B8',
        accent: '#00C389',
        'accent-dark': '#008C65',
        'toxic-red': '#EF4444',
        'toxic-red/10': 'rgba(239, 68, 68, 0.1)',
        tertiary: '#F59E0B',
        neutral: '#2D2D2D'
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important: true,
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'GeistSans', 
          'system-ui', 
          '-apple-system', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Noto Sans', 
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji'
        ],
        headings: [
          'GeistSans Fallback', 
          'Space Grotesk', 
          'sans-serif'
        ]
      },
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
        primary: '#0070f3',
        secondary: '#00C4B8',
        accent: '#00C389',
        'accent-dark': '#008C65',
        'toxic-red': '#EF4444',
        'toxic-red/10': 'rgba(239, 68, 68, 0.1)',
        tertiary: '#F59E0B',
        neutral: '#2D2D2D',
        'brand-blue': '#2563eb',
        'trust-badge': '#f8fafc',
        black: '#000000',
        'gray-800': '#18181B',
        'gray-200': '#E4E4E7',
        'primary-purple': '#9333EA',
        'primary-blue': '#007EFF',
        'secondary-blue': '#4BA4FF',
        'gray': {
          100: '#f3f4f6',
          200: '#e5e7eb',
          600: '#4b5563',
          800: '#1f2937',
          900: '#111827',
        },
      },
      boxShadow: {
        'cyber-green/30': '0 0 30px rgba(0, 255, 136, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        }
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '2': '0.5rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
      },
      maxWidth: {
        '8xl': '88rem'
      },
      borderRadius: {
        'full': '9999px',
      },
    },
  },
  plugins: [],
}

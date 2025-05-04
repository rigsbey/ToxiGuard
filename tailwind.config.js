/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
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
  			'primary-blue': '#007EFF',
  			'neutral-800': '#2D2D2D',
  			'neutral-600': '#4A4A4A',
  			'accent-teal': '#00C4B8',
  			'accent-teal-dark': '#009688',
  			'success-green': '#4CAF50',
  			'warning-orange': '#F59E0B',
  			'amber-500': '#F59E0B',
  			'amber-600': '#D97706',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
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
  			'secondary-blue': '#4BA4FF',
  			gray: {
  				'100': '#f3f4f6',
  				'200': '#e5e7eb',
  				'600': '#4b5563',
  				'800': '#1f2937',
  				'900': '#111827'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			'cyber-green/30': '0 0 30px rgba(0, 255, 136, 0.3)'
  		},
  		animation: {
  			float: 'float 6s ease-in-out infinite',
  			'fade-in': 'fadeIn 0.5s ease-out',
  			'slide-up': 'slideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        aurora: "aurora 60s linear infinite"
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			fadeIn: {
  				'0%': {
  					opacity: 0
  				},
  				'100%': {
  					opacity: 1
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: 0
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: 1
  				}
  			},
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        }
  		},
  		spacing: {
  			'2': '0.5rem',
  			'4': '1rem',
  			'6': '1.5rem',
  			'8': '2rem',
  			'18': '4.5rem',
  			'22': '5.5rem',
  			'30': '7.5rem'
  		},
  		maxWidth: {
  			'8xl': '88rem'
  		},
  		borderRadius: {
  			full: '9999px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		backgroundImage: {
  			'grid-pattern': 'linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
  			'grid-pattern-light': 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
}

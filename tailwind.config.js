/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Modern Color Palette
        primary: {
          DEFAULT: '#2A2A2A', // Deep Charcoal
          light: '#3E3A36', // Dark Brown
        },
        secondary: {
          DEFAULT: '#8A9B69', // Sage Green
          light: '#9CAF7D',
        },
        accent: {
          DEFAULT: '#C46D5E', // Terracotta
          light: '#D48A7D',
        },
        background: {
          DEFAULT: '#F8F5F2', // Cream
          card: '#E8E2DB', // Warm Stone
        },
        border: {
          DEFAULT: '#D3CEC4', // Taupe
        },
        text: {
          DEFAULT: '#2A2A2A',
          light: '#6B7280',
          muted: '#9CA3AF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        DEFAULT: '12px',
        lg: '16px',
        xl: '24px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

module.exports = config
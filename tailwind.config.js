/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#040d0a',
        surface: '#081a14',
        neon: {
          cyan: '#34d399',   // Light emerald / mint
          violet: '#10b981', // True emerald
          pink: '#a7f3d0',   // Lighter mint accent
        },
        brand: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          900: '#064e3b',
        },
        gold: '#34d399',
        kevalon: {
          dark: '#040d0a',
          navy: '#0b241c',
          black: '#020705',
          surface: '#081a14',
          border: 'rgba(52, 211, 153, 0.15)',
          cyan: '#34d399',
          'cyan-bright': '#6ee7b7',
          teal: '#10b981',
          'teal-mid': '#059669',
          muted: '#8dd4b6',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid': "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        'hero-glow': 'radial-gradient(ellipse at top, rgba(16,185,129,0.22), transparent 60%), radial-gradient(ellipse at bottom, rgba(52,211,153,0.10), transparent 60%)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } },
        pulseGlow: { '0%,100%': { opacity: .6 }, '50%': { opacity: 1 } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
    },
  },
  plugins: [],
}

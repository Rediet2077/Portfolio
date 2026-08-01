/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg:        '#0A0A0A',
        'bg-card': '#111111',
        'bg-2':    '#141414',
        primary:   '#FF8A3D',
        'primary-dark': '#F57625',
        'primary-light':'#FFA86B',
        text:      '#F5F5F5',
        muted:     '#888888',
        border:    'rgba(255,255,255,0.07)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FF8A3D 0%, #F57625 100%)',
        'gradient-glow':    'radial-gradient(circle, rgba(255,138,61,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-orange': '0 0 30px rgba(255,138,61,0.4)',
        'glow-sm':     '0 0 15px rgba(255,138,61,0.2)',
        'card':        '0 4px 24px rgba(0,0,0,0.6)',
        'card-hover':  '0 16px 48px rgba(0,0,0,0.7)',
        'glass':       '0 8px 32px rgba(0,0,0,0.5)',
        'btn':         '0 4px 24px rgba(255,138,61,0.5)',
        'btn-hover':   '0 8px 32px rgba(255,138,61,0.7)',
      },
      animation: {
        'blob':        'blob 8s ease-in-out infinite',
        'blob-delay':  'blob 8s ease-in-out 2s infinite',
        'blob-delay2': 'blob 8s ease-in-out 4s infinite',
        'float':       'float 5s ease-in-out infinite',
        'glow-pulse':  'glowPulse 3s ease-in-out infinite',
        'spin-slow':   'spin 10s linear infinite',
        'shimmer':     'shimmer 2s linear infinite',
        'fade-up':     'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        blob: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(40px,-60px) scale(1.1)' },
          '66%':     { transform: 'translate(-30px,30px) scale(0.9)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-16px)' },
        },
        glowPulse: {
          '0%,100%': { opacity: '0.5' },
          '50%':     { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-600px 0' },
          '100%': { backgroundPosition: '600px 0' },
        },
      },
    },
  },
  plugins: [],
}

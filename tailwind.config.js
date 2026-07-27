/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        marble: {
          50: '#fbf9f6',
          100: '#f6f1ea',
          200: '#ece3d6',
          300: '#ddd0bd',
          400: '#c7b59c',
          500: '#ab9576',
          600: '#8c7760',
          700: '#6b5a48',
          800: '#4a3d31',
          900: '#2a2218',
          950: '#14100b',
        },
        gold: {
          50: '#fdfbf3',
          100: '#faf2dc',
          200: '#f3e2ad',
          300: '#ecca7a',
          400: '#e2ad4f',
          500: '#d4902f',
          600: '#b97423',
          700: '#94571e',
          800: '#6f3f1c',
          900: '#4a2b14',
        },
        ink: '#1a1612',
        cream: '#f8f4ee',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.35em',
        mega: '0.5em',
      },
      boxShadow: {
        'soft': '0 20px 60px -20px rgba(74,43,20,0.25)',
        'gold': '0 0 40px -8px rgba(212,144,47,0.45)',
        'gold-lg': '0 0 80px -10px rgba(212,144,47,0.6)',
        'inner-soft': 'inset 0 2px 20px rgba(255,255,255,0.6)',
      },
      backgroundImage: {
        'marble-vein': "radial-gradient(circle at 20% 30%, rgba(212,144,47,0.06) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(212,144,47,0.05) 0, transparent 35%)",
        'gold-shine': 'linear-gradient(110deg, #b97423 0%, #e2ad4f 25%, #faf2dc 50%, #e2ad4f 75%, #b97423 100%)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bell: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(8deg)' },
          '40%': { transform: 'rotate(-7deg)' },
          '60%': { transform: 'rotate(5deg)' },
          '80%': { transform: 'rotate(-3deg)' },
        },
        rise: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        shimmer: 'shimmer 6s linear infinite',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite',
        spinSlow: 'spinSlow 40s linear infinite',
        bell: 'bell 3s ease-in-out infinite',
        rise: 'rise 0.8s ease forwards',
      },
    },
  },
  plugins: [],
};

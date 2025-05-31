/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Merriweather"', 'Georgia', 'serif'],
      },
      colors: {
        amber: {
          50: '#FFEFD1',
          100: '#FFE4A3',
          200: '#FFD675',
          300: '#FFC947',
          400: '#FFBB1A',
          500: '#FFAD0A',
          600: '#D68C45',
          700: '#A35C29',
          800: '#704016',
          900: '#3D240E',
        },
        stone: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
      },
      animation: {
        'bounce': 'bounce 1.5s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { 
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': { 
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
        },
      },
    },
  },
  plugins: [],
};
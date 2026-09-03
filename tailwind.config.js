/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bengal: '#006A4E',
        sunrise: '#F42A41'
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0,0,0,.06)'
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(.22,1,.36,1)'
      }
    }
  },
  plugins: []
};

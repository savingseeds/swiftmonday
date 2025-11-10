/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6B35',
        'primary-dark': '#E85A2C',
        'primary-light': '#FFF5F0',
        'secondary': '#1E3A8A',
        'gray-bg': '#F8F9FA',
        orange: {
          50: '#FFF8F3',
          100: '#FFEEE0',
          200: '#FFE0C7',
          300: '#FFC9A3',
          400: '#FFA876',
          500: '#FF8A4D',
          600: '#E86B2E',
          700: '#C45520',
          800: '#9A4219',
          900: '#7A3415',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
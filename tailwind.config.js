/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#227649',
          600: '#064635',
          500: '#205F48',
          400: '#227649',
          300: '#499159',
          200: '#79AF80',
          100: '#D8E8DA',
        },
        offwhite: '#F5F5F5',
        darkgray: '#2E2E2E',
        lightgray: '#6a6a6a',
      }
    },
  },
  plugins: [],
};


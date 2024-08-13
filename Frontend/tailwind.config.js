/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customTeal: {
          light: '#47b947',
          DEFAULT: '#37af9f',
          dark: '#067d68',
          darker: '#0F766E',
        },
      }
    },
  },
  plugins: [],
}
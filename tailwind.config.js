/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: '#606060',
        secondaryText: '#131313',
        lightGreyText: '##E8E8E8',
      },
      borderRadius: {
        primaryBorder: '16px',
        secondaryBorder: '8px',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
}
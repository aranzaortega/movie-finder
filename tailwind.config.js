/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      lato: ['Lato', 'sans-serif'], // font-lato
    },
    colors:{
      "special-gray": '#F5F0F0',
      // ...defaultTheme.colors,
      // ...variants...
    },
    extend: {},
  },
  plugins: [],
}

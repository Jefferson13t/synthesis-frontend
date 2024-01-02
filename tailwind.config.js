/** @type {import('tailwindcss').Config} */

const themeConfiguration = require('./src/theme/theme-configuration');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: themeConfiguration.colors,
    },
  },
  plugins: [],
}


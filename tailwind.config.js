/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vanillaberry: "#53b2c2",
        blueberry: "#282874",
      },
      boxShadow: {
        'DEFAULT': '0 5px 5px rgba(0, 0, 0, 0.15)',
        'xl': '0 5px 15px 2px rgba(40, 40, 116, 0.4)'
      }
    },
  },
  plugins: [],
}


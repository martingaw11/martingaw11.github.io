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
        peach: "#8e101b",
        seablue: "#0085c8"
      },
      boxShadow: {
        'DEFAULT': '0 5px 5px rgba(0, 0, 0, 0.15)',
        'lg': '0 5px 10px 2px rgba(40, 40, 116, 0.5)',
        'lg-pop': '0 3px 12px 2px rgba(40, 40, 116, 0.5)',
        'xl': '0 5px 15px 2px rgba(40, 40, 116, 0.5)',
        'xl-pop': '0 3px 20px 2px rgba(40, 40, 116, 0.5)',
      }
    },
  },
  plugins: [],
}


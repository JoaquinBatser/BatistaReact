/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': ' 0 0px 20px 10px rgb(0 0 0 / .4)',
      },
      screens: {
        'item2': '540px',
        'item3': '1026px'
      }
    }
  },
  plugins: [],
}


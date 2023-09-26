/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'grayscale':'#3c3c3c',
        'primaryblue':'#2c3878',
      }
    },
  },
  plugins: [],
}


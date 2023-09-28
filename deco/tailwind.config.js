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
        'lightgray':'#D9D9D9',
        'semigray':'#9c9c9c',

      },
      rotate:{
        270:"270deg"
      },
      spacing:{
        81:'80%'
      }
    },
  },
  plugins: [],
}


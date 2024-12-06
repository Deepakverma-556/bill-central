/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blueLine':"url('./assets/images/webp/hero-blue-bg.webp')"
      },
      screens: {
        xlg:'1050px',
        lg: '1025px',
        md:'770px',
      },
      colors: {
        skyBlue: '#00A8E8',
        darkBlue:'#003459'
      }
    },
  },
  plugins: [],
}
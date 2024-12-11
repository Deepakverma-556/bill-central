/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blueLine':"url('/public/assets/images/webp/hero-blue-bg.webp')"
      },
      screens: {
        xlg:'1050px',
        lg: '1025px',
        md:'790px',
      },
      colors: {
        skyBlue: '#00A8E8',
        darkBlue: '#003459',
        deepBlue: '#00171F',
        prussianBlue: '#003459',
        gray: '#4B4B4B',
        lightBlue: '#EAF9FFF0',
        lightGray: '#00000014',
        light: '#0000001A',
        crispBlue: '#007EA7',
        babyBlack:"#010101"
      }
    },
  },
  plugins: [],
}
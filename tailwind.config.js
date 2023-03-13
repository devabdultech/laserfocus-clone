const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',  
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans],
        libre: ['var(--font-libre)', ...fontFamily.sans],
      },
      textColor: {
        primary: '#30333A',
        secondary: '#30333A99',
        light: '#30333ABF',
        paccent: '#2E7CF4',
        saccent: '#37C77B'

      },
      backgroundColor: {
        cta: '#2E7CF4',
        card: '#E5FEEE'
      },
      keyframes : {
        gradientbg: {
          '0%': { backgroundColor: '#2E7CF4' },
          '25%': { backgroundColor: 'rgb(22, 163, 74)' },
          '50%': { backgroundColor: '#E3342F' },
          '75%': { backgroundColor: '#C53030' },
          '100%': { backgroundColor: '#2E7CF4' },
        },
        slide: {
          '0%': { transform: 'translateX(0px)' },
          '25%': { transform: 'translateX(25%)' },
          '50%': { transform: 'translateX(50%)' },
          '75%': { transform: 'translateX(75%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        gradientbg: 'gradientbg 7s ease-in-out infinite',
        slide: 'slide 4s ease-in-out infinite'
      },
    },
  },
  plugins: [],
}
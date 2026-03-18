/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mendoza-dark': '#2C3F4C',  // O tom mais escuro da logo
        'mendoza-blue': '#54768D',  // O tom mais claro da logo
        'mendoza-light': '#EEF1F3', // O cinza bem claro do fundo do papel timbrado
      },
      fontFamily: {
        // Substitua no seu index.css a importação do Google Fonts para Montserrat
        sans: ['"Montserrat"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
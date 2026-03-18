/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Aqui você define as novas fontes elegantes
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'],     // Para textos, botões e menus
        serif: ['"Playfair Display"', 'serif'],   // Para títulos imponentes
      },
      colors: {
        'mendoza-dark': '#2C3F4C',
        'mendoza-blue': '#54768D',
        'mendoza-light': '#EEF1F3',
      }
    },
  },
  plugins: [],
}
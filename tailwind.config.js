/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1A73E8',  // **Primary Blue** for major actions
        'secondary': '#FFB800',  // **Gold** for highlights
        'accent': '#D9D9D9',  // **Light Gray** for borders, hover
        'bg-dark': '#101820',  // **Dark Background** for a sleek look
        'text-light': '#FFFFFF',  // **Light Text** on dark background
      },
    },
  },
  plugins: [],
}

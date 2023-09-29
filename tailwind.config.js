/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      listStyleImage: {
        check: 'url("check.png")',
      },
      fontFamily: {
        'montserrat': ['Montserrat']
      },
    },
  },
  plugins: [],
}


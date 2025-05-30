/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.css"
  ],
  theme: {
    extend: {
      fontFamily: {
        kleeone: ['"Klee One"', 'sans-serif'],
        kleeonebold: ['"Klee One"', 'sans-serif'],
        mplus: ['"M Plus"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


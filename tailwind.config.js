/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
      extend: {
          colors: {
              night: "#1a1a40",
              moon: "#c7d2fe",
              star: "#fcd34d",
          },
          fontFamily: {
              heading: ["'Fredoka One'", "cursive"],
              body: ["'Inter'", "sans-serif"],
          },
      },
  },
  plugins: [],
}


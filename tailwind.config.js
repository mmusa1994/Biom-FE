/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#004A4C",
          dark: "#002D33",
          light: "#DAE5E5",
          hover: "#005C5E",
        },
        gray: "#F2F2F2",
        sand: "#FFFAFA",
        gold: "#DDA74A",
      },
    },
  },
  plugins: [],
};

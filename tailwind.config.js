/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Bebas Neue'", 'sans-serif'],
      },
      colors: {
        primary: "#FF6363",
        secondary: {
        100: "#E2E2D5",
        200: "#888883",
        },
    },
  }
  },
  plugins: [],
};

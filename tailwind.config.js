/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#0b0b09",
        background: "#fdfdfc",
        primaryButton: "#533d66",
        secondaryButton: "#e5e5e0",
        container: "#ffffff"
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif']
      }
    },
  },
  plugins: [],
}


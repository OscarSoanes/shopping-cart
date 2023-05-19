/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#03020d",
        secondary: "#a6e4fb",
        primaryButton: "#533d66",
        secondaryButton: "cdcaf7",
        container: "#ffffff"
      }
    },
  },
  plugins: [],
}


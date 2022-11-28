/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        'spin': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
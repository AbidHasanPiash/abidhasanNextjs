/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-slow2': 'spin 15s linear infinite',
      },
      boxShadow: {
        neon: '0px 5px 50px 12px',
        '5xl': "20px 20px 50px rgb(0, 0, 0, 0.5)",
      },
      fontFamily: {
        custom: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

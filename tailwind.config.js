/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'young': "linear-gradient(rgba(0, 41, 83, 0.8), rgba(0, 41, 83, 0.8)), url('/images/young.png')",
      },
},
  },
  plugins: [],
}
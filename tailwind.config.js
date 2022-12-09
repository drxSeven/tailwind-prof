/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
        display: ["group-hover"],
    },
},
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    
  },
  plugins: [],
}

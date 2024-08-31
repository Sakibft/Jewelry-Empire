/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     
    extend: {
      colors: {
        primary: "#131313",
         secondary: "#C0C0C026",
         "textYellow": "#E8CF36",
         "smTexColor": "#E6E6E7"
      },
      fontFamily:{
        'fell': ['"IM Fell Double Pica"', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
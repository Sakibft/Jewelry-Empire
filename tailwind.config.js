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
         secondary: "#C0C0C0",
         "textYellow": "#E8CF36",
         "smTexColor": "#E6E6E6"

      }
    },
  },
  plugins: [],
};
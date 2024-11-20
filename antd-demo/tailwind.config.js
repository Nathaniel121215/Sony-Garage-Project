/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        besley: ['Besley', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  corePlugins: {
  }
  
  
}
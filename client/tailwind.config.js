/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Josefin Sans', 'sans-serif'],
        alata:['Alata']
      },
      letterSpacing:{
        widest:'.5em',
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('daisyui'), 
    require('@tailwindcss/aspect-ratio')],
  daisyui: {
    themes: ["wireframe"],
  }
}
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'mybg1': '#ECECEC', /* light gray */
        'mybg2': '#D9D9D9', /* light gray */
        'mytext': 'black',  /* black */
        'myacc': '#6366f1', /* indigo-500 */
        'mybg1d': '#162C41', /* deep blue */
        'mybg2d': '#1F3E5A', /* deep blue lighter*/
        'mytextd': 'white', /* white */ 
        'myaccd': '#6366f1' /* indigo-500 */
      },
      boxShadow: {
        'lg': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'xl': '0 10px 15px rgba(0, 0, 0, 0.2)'
      },
      transitionProperty: {
        'transform': 'transform'
      },
      scale: {
        '105': '1.05'
      }
    },
  },
  plugins: [],
}


/* 
font-size: 
section title: 6xl
p text: xl
*/
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rock': ['Rock 3D', 'system-ui'],  },},},
  
        plugins: [
          require('tailwindcss-no-scrollbar')
        ]
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust if your files live elsewhere
  ],
  theme: {
    extend: {
      fontFamily:{
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors: {
        'miku-blue':'#86cecb',
        'miku-teal':'#39c5bb',
        'miku-purple':'#6e748f',
        'miku-gray':'#2e2e3a',
        'miku-sakura':'#f9a8d4',
        'miku-lightblue':'#d4f2ef',
      },
    },
  },
  plugins: [],
}
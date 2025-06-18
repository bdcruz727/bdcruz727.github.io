/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust if your files live elsewhere
  ],
  theme: {
    extend: {
      colors: {
        'miku-blue':'#86cecb',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'exchange-blue': '#0066cc',
        'exchange-green': '#00cc66',
        'exchange-red': '#cc0000',
      },
    },
  },
  plugins: [],
} 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mint-green': 'var(--color-mint-green)',
        'forest-green': 'var(--color-forest-green)',
        'eco-sand': 'var(--color-eco-sand)',
        'slate-gray': 'var(--color-slate-gray)',
        'bg-green': 'var(--color-bg-green)',
        'cream-white': 'var(--color-cream-white)'
      }
    },
  },
  plugins: [],
}
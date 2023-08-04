/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nav-border': '#EBEAEA',
        'neutral-black': '#0F172A',
        'neutral-gray': '#475569',
        'light-gray': '#DCE4E9',
        'primary-purple': '#7528CA',
        'primary-blue': '#93DCF8',
        'light-blue': '#C1D8F2',
        'primary-magenta': '#DE4AF7',
        'secondary-green': '#8DEA98',
        'secondary-orange': '#F57C24',
        'secondary-orange-light': '#fed7aa',
        'secondary-red-light': '#fecaca',
        'primary-blue-code':'#282c34',
        'white': '#FFFFFF',
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      },
      boxShadow: {
        'custom': '10px 10px 27px 0px rgba(135,135,135,0.76)'
      }

    },
  },
  plugins: [],
};

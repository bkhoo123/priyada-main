/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'didactGothic':["Didact Gothic"],
        'montserrat': ['Montserrat', 'sans-serif'],
        'laila': ['Laila', 'serif'],
        'worksans': ['"Work Sans"', 'sans'],
        'poiretone': ["Poiret One"],
        'elsie':["Elsie"]
      },
      colors: {
        "cream": "#fef3c7",
        "lightcream": "#fffbeb",
        "terra": "#78350f",
      }
    },
  },
  mode: "jit",
  plugins: [],
}

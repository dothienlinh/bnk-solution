/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        centuryGothic: 'CenturyGothic',
        centuryGothicBold: 'CenturyGothic Bold'
      },
      backgroundImage: (theme) => ({
        'hero-pattern':
          'linear-gradient(255.39deg, #00daa6 -9.21%, #007caa 72.69%)'
      })
    }
  },
  plugins: []
}

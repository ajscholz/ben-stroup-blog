const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // mode: 'jit',
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './templates/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

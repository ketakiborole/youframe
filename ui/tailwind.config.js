module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'lightest-blue':'#ebf8ff',
        'light-blue':'#4299e1',
        'regular-blue':'#3182ce',
        'dark-blue':'#2c5282',
        'light-grey':'#e2e8f0',
        'dark-grey':'#a0aec0',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        homePreview: 'repeat(5,272px)',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/line-clamp')],
}

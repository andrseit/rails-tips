module.exports = {
  purge: {
    layers: ['base'],
    content: [
      './app/**/*.html.erb',
      './app/helpers/**/*.rb',
    ]
  }
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

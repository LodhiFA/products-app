const path = require('path')

module.exports = {
  components: 'src/**/[A-Z]*.tsx',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
  },
}

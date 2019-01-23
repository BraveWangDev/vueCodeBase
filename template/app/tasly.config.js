const path = require('path')
module.exports = {
  helpers: {
    toLowercase: (str) => str.toLocaleLowerCase()
  },
  page: {
    output: path.join(__dirname, 'src/pages'),
    templates: [
      {
        name: 'Page',
        src: path.join(__dirname, 'templates/page'),
        prompts: []
      }
    ]
  },
  component: {
    output: path.join(__dirname, 'src/components'),
    templates: [
      {
        name: 'Component',
        src: path.join(__dirname, 'templates/component'),
        prompts: []
      }
    ]
  }
}

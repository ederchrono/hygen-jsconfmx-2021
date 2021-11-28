const notEmpty = value => value.trim() !== ''

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'New page name (no spaces)',
    validate: notEmpty
  }
]

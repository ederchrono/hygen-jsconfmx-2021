const notEmpty = value => value.trim() !== ''

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Type the endpoint name: \n(no spaces, singular)',
    validate: notEmpty
  }
]

const express = require('express')
const faker = require('faker')
const router = express.Router()

function generateUsers(num) {
  const usersData = []
  // generate 100 users
  for (let index = 0; index < num; index++) {
    usersData.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
    })
  }
  return usersData
}

router.get('/', async (req, res) => {
  res.json(generateUsers(10))
})

module.exports = router
module.exports.generateUsers = generateUsers
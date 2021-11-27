const express = require('express')
const users = require('./users/users')

const router = express.Router()

router.use('/users', users)

module.exports = router
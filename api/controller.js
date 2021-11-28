const express = require('express')
// hygen:api-import-injector
const user = require('./user')

const router = express.Router()

// hygen:api-endpoint-injector
router.use('/user', user)

module.exports = router
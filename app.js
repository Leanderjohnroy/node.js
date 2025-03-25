const express = require('express')

const router = express()

router.use('/api', require('./Route/route'))

module.exports = router
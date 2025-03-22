const express = require('express')
const {Router} = express
const router = Router()

const {create} = require('../Controller/controller')

router.post('/create', create )

module.exports = router ;      
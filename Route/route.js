const express = require('express')
const {Router} = express
const router = Router()

const {create,getall,getbyId,updatedata,deletedata} = require('../Controller/controller')


router.post('/create', create )
router.get('/getall',getall)
router.get('/getbyId/:id',getbyId)
router.post('/updatedata',updatedata)
router.post('/deletedata',deletedata)

module.exports = router ;      
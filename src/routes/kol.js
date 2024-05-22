const express = require('express')
const router = express.Router()

const kolController = require('../app/controllers/KolController')

router.get('/', kolController.index) 

module.exports = router;
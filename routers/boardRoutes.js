const express = require('express')
const router = express.Router()
const boardController = require('../controllers/boardController')

router.post("/", boardController.create);
// router.post('/login', authController.login)

module.exports = router

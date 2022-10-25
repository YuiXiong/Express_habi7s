const express = require('express')
const router = express.Router()
const boardController = require('../controllers/boardController')

router.post("/", boardController.create);
router.get("/", boardController.read)

module.exports = router

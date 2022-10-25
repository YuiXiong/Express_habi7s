const express = require('express')
const router = express.Router()
const boardController = require('../controllers/boardController')

router.post("/", boardController.create);
router.get("/", boardController.indexBoards)
router.get("/:id", boardController.getBoardbyId)


module.exports = router

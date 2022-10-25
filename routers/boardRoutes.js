const express = require('express')
const router = express.Router()
const boardController = require('../controllers/boardController')

router.post("/", boardController.create);
router.get("/", boardController.index)
router.get("/:id", boardController.getById)
router.patch("/:id", boardController.updateById)
router.delete("/:id", boardController.deleteById)

module.exports = router

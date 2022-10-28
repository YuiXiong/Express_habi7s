const express = require('express')
const router = express.Router()
const boardController = require('../controllers/boardController')
const authMiddleware = require('../middleware/authMiddleware')

router.post("/", boardController.create);
router.get("/", authMiddleware,boardController.index)
router.get("/:id", boardController.getById)
router.patch("/:id", boardController.updateById)
router.delete("/:id", boardController.deleteById)

module.exports = router

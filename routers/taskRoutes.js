const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')

router.post("/:id/task/", taskController.create);
// router.get("/", taskController.index)
// router.get("/:id", taskController.getById)
// router.patch("/:id", taskController.updateById)
// router.delete("/:id", taskController.deleteById)

module.exports = router

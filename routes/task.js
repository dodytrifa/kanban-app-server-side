const router = require('express').Router()
const TaskController = require("../controllers/taskController.js")
const { authenticate } = require("../midwares/authenticate")
const authorize = require("../midwares/authorize")

router.use(authenticate)
router.get('/', TaskController.getTasks)
router.post('/', TaskController.addTasks)


router.use('/:id', authorize)
router.get('/:id', TaskController.getId)
router.put('/:id', TaskController.updateTasks)
router.delete('/:id', TaskController.destroyTasks)

module.exports = router
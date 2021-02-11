const express = require('express');
const router = express.Router()

const userRouter = require('./user')
const taskRouter = require('./task')

router.use('/tasks', taskRouter)

router.use('/users', userRouter)

module.exports = router
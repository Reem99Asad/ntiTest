const router = require('express').Router()
const taskController = require('../controller/task.controller')
const auth = require('../middleware/auth')

router.post('/add',auth,taskController.addtask)

router.get('/assign/:taskid',auth,taskController.assignTask)
module.exports=router
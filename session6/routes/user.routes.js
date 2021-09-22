const router = require("express").Router()
const userController=require('../controller/user.controller')

router.get('/adduser',userController.adduser)
router.post('/adduser',userController.saveUser)

router.get('/single',userController.getsingle)

router.get('',userController.getALL)
router.get('/addUser',userController.adduser)
router.get('/editUser',userController.edituser)
router.get('*', userController.err404)

router.get('/deletUser',userController.deleteUser)
module.exports=router
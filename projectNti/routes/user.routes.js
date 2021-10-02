const router=require('express').Router()
const auth=require('../middleware/auth')
const userController=require('../controller/user.controller')


router.post('/register',userController.register)
router.post('/login',userController.login)
router.post('/logout',userController.logOut)
router.post('/addorder/:id',userController.addOrder)
router.post('/me',userController.me)
router.post('/addreview',auth,userController.addreview)

module.exports=router
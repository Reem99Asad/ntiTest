const router =require('express').Router()
const auth=require('../middleware/auth')
const userController=require('../controller/user.controller')
const upload = require('../middleware/fileUpLoad')


router.post('/adduser',userController.adduser)
router.post('/me',auth,userController.me)
router.post('/editprofile/:id',userController.editprofile)
router.post('/login',userController.login)
router.post('/logOut',userController.logOut)
//router.post('/assign', auth, upload.single('file'), userController.assign)
router.post('/addPImg', auth, upload.single('img'), userController.addPImg)



module.exports=router
const router=require('express').Router()
const postController=require('../controller/post.controller')
const auth=require('../middleware/auth')

router.post('/add',auth, postController.addPost)

router.get('/myPosts', auth, postController.myPosts)

router.get('/myPosts/:_id', auth, postController.singlepost)
router.get('/myPosts/:_id', auth, postController.addcomment)
router.get('/myPosts/:_id', auth, postController.addlike)


module.exports=router
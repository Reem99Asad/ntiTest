const router=require('express').Router()
const productController=require('../controller/product.controller')
const upload=require('../middleware/fileUpload')
const auth=require('../middleware/auth')


router.post('/addproduct',auth,productController.addProduct)
router.post('/uploadimage',productController.addProductimage)
router.get('/allproducts',productController.AllProducts)
router.get('/allcategories',productController.Allcategories)
router.get('/singleproduct',productController.singleProduct)
router.patch('/edit/:id',auth,productController.editProduct)
module.exports=router


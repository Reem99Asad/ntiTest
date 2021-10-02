const Product=require('../models/product.model')
class ProductController{
    static async addProduct(req,res){
        try{
            const product=new Product({
                ...req.body,
                userId: req.user._id
            })
            await product.save()
            res.status(200).send({
                apiStatus:true,
                data:product,
                message:"product added successfully"
          })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error adding product" })
        }
    }
    static async Allcategories(req,res){
        try{
            await req.user.show('Allcategories')
            res.status(200).send({
                apiStatus:true,
                data:req.Product.Allcategories,
                message:"categories show"
            })
        }
        catch(e){
           res.status(500).send({
            apiStatus:false,
            data:e.message,
            message:"error showing categories"})
        }
    }
    static async AllProducts(req,res){
        try{
            await req.user.show('AllProducts')
            res.status(200).send({
                apiStatus:true,
                data:req.Product.AllProducts,
                message:"product showed"
            })
        }
        catch(e){
           res.status(500).send({
            apiStatus:false,
            data:e.message,
            message:"error showing data"})
        }
    }
    static async singleProduct(req,res){
        try{
            req.user.params=req.product._id
            await req.user.show('singleproduct')
            res.status(200).send({
                apiStatus:true,
                data:req.Product.singleProduct,
                message:"productsingle showed"
            })
        }
        catch(e){
           res.status(500).send({
            apiStatus:false,
            data:e.message,
            message:"error showining product"})
        }
    }
    static async editProduct(req,res){
        try{
            const product=await Product.findById(req.params.id)
            for (let d in req.body){
                product[d]=req.body[d]
            }
            await product.save()
            res.status(200).send({
                apiStatus:true,
                data:"",
                message:"data editing"})
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error in editing product"
            })
        }
    }
static async  addProductimage(req,res){
    req.product.image=req.file.path.replace('\\','/')
    await req.product.save()
    res.status(200).send(req.product)
}
}
module.exports=ProductController
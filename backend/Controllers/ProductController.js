const Product=require('../Models/ProductModel');
const cloudinary=require('cloudinary').v2;

cloudinary.config({
    cloud_name:'dzi36ay5j',
    api_key:'513885825895926',
    api_secret:'1Txd299vqxHmT1ltiO4A2poroQM'
})


exports.createProduct=async(req, res)=>{   

    try {

      const file=req.files.image;
      const result= await cloudinary.uploader.upload(file.tempFilePath, {
                 public_id:`${Date.now()}`,
                 resource_type:"auto",
                 folder:"images"})



       req.body.user=req.user.id;
       req.body.imagePath=result.url;
       
       const product=await Product.create(req.body);

       res.status(200).json({
        success:true,
        message:'Product Created Successfully',
        product
    })
        
    } catch (error) {
        
        res.status(400).json({
            message:error.message
        })
    }

}

exports.getAllProducts=async (req, res)=>{

    if(req.query.page && req.query.limit){
        Product.paginate({}, {page:req.query.page, limit:req.query.limit}).then(
            products=>{
                res.status(200).json({
                    success:true,
                    products
                })
            }).catch(error=>{
                res.status(400).json({
                    error
                })
            })
    }else{

        await Product.find().then(products=>{
            res.status(200).json({
                success:true,
                products
            })
        }).catch(error=>{
            res.status(400).json({
                message:error.message
            })
        })
    }
    
    // const products=await Product.find();

    // if(products.length>0){
    //     res.status(200).json({
    //         success:true,
    //         products
    //     })
    // }
    // else {
    //     return res.status(200).json({
    //         "message":"No Products Found"
    //     })
    // }
}

exports.viewProduct=async(req, res)=>{
     let product=await Product.findById(req.params.id);

     if(!product){
        return res.status(404).json({
            message:'Product Not Found'
        })
     }

     res.status(200).json({
        success:true,
        product
     })
}

exports.deleteProduct=async(req, res)=>{
     
    const product=await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product Not Found"
        })
    }

    await product.remove();

    res.status(200).json({
        success:true,
        message:"Product Deleted Successfully"
    })
}

exports.updateProduct=async(req, res)=>{
    
    let product= await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product Not Found"
        })
    }

    product=await Product.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    })
}


exports.searchProduct=async (req, res)=>{
        

     try {


        let product=await Product.find({

            "$or":[
                {name:{$regex:req.query.key, $options:'$i'}}
            ]
            
            })

            res.status(200).json({
                success:true,
                product
            })
        
        
     } catch (error) {

        res.status(400).json({
            message:error.message
        })
        
     }

}
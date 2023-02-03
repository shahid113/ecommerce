const mongoose=require('mongoose')

const mongoosePaginate=require('mongoose-paginate-v2')

const productSchema=new mongoose.Schema({
     
    name:{
        type:String,
        required:[true, "Please enter product name"],
        maxLength:[30, "Name can't exceed 30 characters"],
        minLength:[3, "Name should have more than 3 character"]
    },

    description:{
        type:String,
        required:[true, "Please enter product description"],
    },

    price:{
        type:Number,
        required:true,
    },

    category:{
        type:String,
        required:true,
    },

    stock:{
        type:Number,
        required:[true, "Please Enter Product Stock"],
        maxLength:[4, "Stock can't exceed 4 character"],
        default:1
    }, 

    user:{
       type:mongoose.Schema.ObjectId,
       ref:"User",
       required:true,
             
    },

    imagePath:{
        type:String
    },

    createdAt:{
        type:Date,
        default:Date.now
    }




})

productSchema.plugin(mongoosePaginate);

module.exports=mongoose.model("Product", productSchema);
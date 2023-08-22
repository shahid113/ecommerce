const mongoose=require('mongoose');

const orderSchema=new mongoose.Schema({

    shippingInfo:{
        
        name:{
            type:String,
            required:true
        },

        email:{type:String, 
        required:true
        },

        address:{
            type:String, 
            required:true
           },

        city:{type:String, 
            required:true
         },

         pincode:{
            type:Number,
            required:true
         },
    
    
         state:{type:String, required:true},
         
         phoneNo:{
                type:Number,
            },
        
    },

    orderItems:[
        {
            name:{
                type:String,
                required:true,
            },
            price:{
                type:Number,
                required:true,

            },

            qty:{
                type:Number,
                required:true,

            },

            imagePath:{
                type:String,
                required:true,
            },

        }
    ],

    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },

    totalPrice:{
        type:Number,
        required:true,
        default:0
    },

    orderStatus:{
        type:String,
        required:true,
        default:"Processing"
    },

    deliveredAt:Date,

    createdAt:{
        type:Date,
        default:Date.now,
    },

})


module.exports=mongoose.model("Order", orderSchema);
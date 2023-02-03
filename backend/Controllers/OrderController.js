const Order=require('../Models/OrderModel')

exports.newOrder= async(req, res)=>{

    try {

        const{
            shippingInfo,
            orderItems,
            totalPrice,
            user

        }=req.body


        const order=await Order.create({
            shippingInfo,
            orderItems,
            totalPrice,
            user
        })

        res.status(201).json({
            success:true,
            message:'Your order has been successfully placed !',
            order
        })

        
    } catch (error) {
        res.status(400).json({
            success:false,
            error
        })
    }

}

exports.getOrderData=async(req, res)=>{
   
     try {

        if(req.params.id){

            let OrderData=await Order.find({user:req.params.id})
            res.status(200).json({
                success:true,
                OrderData
            })
        }
        else{

            let OrderData=await Order.find();
            res.status(200).json({
                success:true,
                OrderData
            })
        }
 
     } catch (error){

        res.status(400).json({
            success:false,
            error
        })
     }
}

exports.cancelOrder=async (req, res)=>{
    
            
   try {

    let order= await Order.findById(req.params.id);
    
    order=await Order.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        message:'Order Cancelled !!',
        order
    })
    
   } catch (error) {
       res.status(400).json({
          message:error.message
       })
   }

}


exports.getOrderById=async (req, res)=>{
    try {

        if(req.params.id){

            let OrderData=await Order.findById(req.params.id)
            res.status(200).json({
                success:true,
                OrderData
            })
        }
        else{

            let OrderData=await Order.find();
            res.status(200).json({
                success:true,
                OrderData
            })
        }
 
     } catch (error){

        res.status(400).json({
            success:false,
            error
        })
     }
}
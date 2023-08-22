const express=require('express');
const { newOrder, getOrderData, cancelOrder, getOrderById } = require('../Controllers/OrderController');
const router=express.Router();

const {isAuthenticatedUser} =require('../middleware/auth')


router.route("/order/new").post(newOrder, isAuthenticatedUser)


router.route("/order/:id")
.get(getOrderData, isAuthenticatedUser)
.put(cancelOrder, isAuthenticatedUser)

router.route("/order/view/:id").get(getOrderById, isAuthenticatedUser)



router.route("/order").get(getOrderData, isAuthenticatedUser)




module.exports=router;
const express=require('express');
const { createProduct, getAllProducts, viewProduct, deleteProduct, updateProduct, searchProduct } = require('../Controllers/ProductController');

const { isAuthenticatedUser } = require('../middleware/auth');
const router=express.Router();


router.route('/product/new').post(isAuthenticatedUser, createProduct);




// Public Route
router.route('/products').get(getAllProducts);
router.route('/search').get(searchProduct)


router.route('/product/:id')
.get(viewProduct)
.delete(isAuthenticatedUser, deleteProduct)
.put(isAuthenticatedUser, updateProduct)




module.exports=router
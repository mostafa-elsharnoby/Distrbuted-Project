const express = require("express");
const router = express.Router();
//const { addCAtegory, getCategories } = require("../controller/category");
const { adminMiddleware,requireSignin } = require("../common-middlewre");
const Product = require('../models/product');
const { createProduct , getProducts , getProductById } = require('../controller/product')


/*=================== Create New Category Api  ==================*/
router.post('/product/create', requireSignin , adminMiddleware , createProduct);
/*=================== Get Categories Api  ==================*/
//router.get("/product/getcategory", getCategories);
/*=================== Delete Category Api  ==================*/

/*=================== Get Products Api  ==================*/
router.get('/product/getproducts',getProducts)

/*=================== Get Single Product by Id Api  ==================*/
router.get('/product/getproduct/:product_id',getProductById)

module.exports = router;
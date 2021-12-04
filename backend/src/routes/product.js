const express = require("express");
const router = express.Router();
//const { addCAtegory, getCategories } = require("../controller/category");
const { adminMiddleware,requireSignin } = require("../common-middlewre");
const Product = require('../models/product');

/*=================== Create New Category Api  ==================*/
router.post('/product/create', requireSignin , adminMiddleware , createProduct);
/*=================== Get Categories Api  ==================*/
//router.get("/product/getcategory", getCategories);
/*=================== Delete Category Api  ==================*/

module.exports = router;
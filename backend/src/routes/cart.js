const express = require("express");
const Category = require('../models/cart');
const slugify = require('slugify');

const router = express.Router();
const shortid = require("shortid");
const path = require("path");
//const multer = require("multer");
const category = require("../models/category");
const { addItemToCart } = require("../controller/cart");
const { userMiddleware,requireSignin } = require("../common-middlewre");

/*=================== Create New Category Api  ==================*/
router.post('/user/cart/addtocart', requireSignin , userMiddleware , addItemToCart);

/*=================== Get Categories Api  ==================*/
//router.get("/category/getcategory", getCategories);

/*=================== Delete Category Api  ==================*/
module.exports = router;
//const { addCAtegory, getCategories } = require("../controller/category");
const { adminMiddleware,requireSignin } = require("../common-middlewre");
const { createProduct } = require("../controller/product");
const express = require('express');
const multer = require('multer'); /* Package for file uploading */
const Product = require('../models/product');
const { createProduct , getProducts , getProductById , getProductByName} = require('../controller/product')

const router = express.Router();
const shortid = require('shortid');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join( path.dirname(__dirname), 'uploads' ))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage })

/*=================== Create New Product Api  ==================*/
router.post('/product/create', requireSignin , adminMiddleware ,upload.array('productPicture'),createProduct);

/*=================== Get Products Api  ==================*/
router.get('/product/getproducts',getProducts)

/*=================== Get Single Product by Id Api  ==================*/
router.get('/product/getproduct/:product_id',getProductById)

/*=================== Get Single Product by Name Api  ==================*/
router.get('/product/getproduct/search/:product_name',getProductByName)

module.exports = router;
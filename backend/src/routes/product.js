//const { addCAtegory, getCategories } = require("../controller/category");
const { adminMiddleware,requireSignin } = require("../common-middlewre");
const { createProduct } = require("../controller/product");
const express = require('express');
const multer = require('multer'); /* Package for file uploading */
const shortid = require('shortid');
const Product = require('../models/product');
const router = express.Router();
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

/*=================== Create New Category Api  ==================*/
router.post('/product/create', requireSignin , adminMiddleware ,upload.array('productPicture'),createProduct);
/*=================== Get Categories Api  ==================*/
//router.get("/product/getcategory", getCategories);
/*=================== Delete Category Api  ==================*/

module.exports = router;
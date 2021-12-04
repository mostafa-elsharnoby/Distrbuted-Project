const express = require("express");
const Category = require('../models/category');
const slugify = require('slugify');
/*
const {
  addCategory,
  getCategories,
  updateCategories,
  deleteCategories,
} = require("../controller/category");
*/

/*
const {
  requireSignin,
  adminMiddleware,
  superAdminMiddleware,
} = require("../common-middleware");
*/
const router = express.Router();
const shortid = require("shortid");
const path = require("path");
//const multer = require("multer");
const category = require("../models/category");
const { addCAtegory, getCategories } = require("../controller/category");
const { adminMiddleware,requireSignin } = require("../common-middlewre");
/*
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });
*/

/*=================== Create New Category Api  ==================*/
router.post('/category/create', requireSignin , adminMiddleware ,addCAtegory);


/*
router.post(
  "/category/create",
  requireSignin,
  superAdminMiddleware,
  upload.single("categoryImage"),
  addCategory
);
*/
/*=================== Get Categories Api  ==================*/

router.get("/category/getcategory", getCategories);
/*
router.post(
  "/category/update",
  requireSignin,
  superAdminMiddleware,
  upload.array("categoryImage"),
  updateCategories
);
*/

/*=================== Delete Category Api  ==================*/
/*
router.post(
  "/category/delete",
  requireSignin,
  superAdminMiddleware,
  deleteCategories
);
*/
module.exports = router;
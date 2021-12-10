const express = require('express');
const router = express.Router();
const { requireSignin, userMiddleware } = require('../common-middlewre/index.js');
const { getUser, updateUser } = require('../controller/user.js');
const User = require('../models/user')

/*=================== Get User Api  ==================*/
router.get('/user', requireSignin , userMiddleware , getUser);

/*=================== Update User Api  ==================*/
router.put('/user/update', requireSignin , userMiddleware , updateUser);

module.exports = router;
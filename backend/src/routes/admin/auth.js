
const express = require('express');
const { signup,signin, requireSignin } = require('../../controller/admin/auth');
const router = express.Router();
const User = require('../../models/user'); //User model

router.post('/admin/signin', signin); //signin fn which is written in controlller
router.post('/admin/signup', signup); //signup fn which is written in controlller



module.exports = router;
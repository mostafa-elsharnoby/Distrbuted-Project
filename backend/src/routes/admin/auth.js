
const express = require('express');
const { requireSignin } = require('../../common-middlewre');
const { signup,signin ,signout} = require('../../controller/admin/auth');
const router = express.Router();
const User = require('../../models/user'); //User model
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../validators/auth');

router.post('/admin/signin', validateSigninRequest , isRequestValidated , signin); //signin fn which is written in controlller
router.post('/admin/signup', validateSignupRequest , isRequestValidated , signup); //signup fn which is written in controlller
router.post('/admin/signout', requireSignin, signout); //signup fn which is written in controlller



module.exports = router;
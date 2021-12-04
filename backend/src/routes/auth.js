
const express = require('express');
const { signup,signin } = require('../controller/auth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
const router = express.Router();


router.post('/signup', validateSignupRequest , isRequestValidated , signup); //signup fn which is written in controlller
router.post('/signin', validateSigninRequest , isRequestValidated , signin); //signin fn which is written in controlller

/* ========== To Test Tokens only =============
router.post('/profile',requireSignin , (req, res) => {
    res.status(200).json({ user: 'profile' })
});
*/

module.exports = router;
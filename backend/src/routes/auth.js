
const express = require('express');
const { signup,signin } = require('../controller/auth');
const router = express.Router();

router.post('/signin', signin); //signin fn which is written in controlller
router.post('/signup', signup); //signup fn which is written in controlller

/* ========== To Test Tokens only =============
router.post('/profile',requireSignin , (req, res) => {
    res.status(200).json({ user: 'profile' })
});
*/

module.exports = router;
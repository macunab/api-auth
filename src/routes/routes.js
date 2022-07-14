const { Router } = require('express');
const passport = require('passport');
const { authGoogle } = require('../controllers/auth.controller');

const router = Router();

// Login to google account
router.get('/auth/google', 
    passport.authenticate('sign-in-google', {scope: ['profile', 'email']}));

// Login successfull
router.get('/auth/google/callback',
    passport.authenticate('sign-in-google', { session: false }),
    authGoogle);    

module.exports = router;
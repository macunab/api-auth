const { Router } = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const router = Router();

// Login to google account
router.get('/auth/google', 
    passport.authenticate('sign-in-google', {scope: ['profile', 'email']}));

// Login successfull
router.get('/aut/google/callback',
    passport.authenticate('sign-in-google', { session: false }), 
    (req, res) => {
        if(req.user) {
            const token = jwt.sign({user: req.user},
                process.env.SECRET_KEY,
                { expiresIn: '1h' },
                (err, token) => {
                    if(err) {
                        return res.status(400).json({
                            ok: false,
                            msg: err.message
                        });
                    }

                    return res.status(200).json({
                        token
                    });
                });
        }
    });    

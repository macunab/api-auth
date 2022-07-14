const { response } = require('express');

const authGoogle = (req, res = response) => {
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
}

module.exports = { authGoogle };
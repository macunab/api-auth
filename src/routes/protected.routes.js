const { Router } = require('express');
const router = Router();

router.get('/users', (req, res) => {
    if(req.user) {
        return res.status(200).json({
            ok: true,
            msg: 'the user exist',
            user: req.user
        })
    }
    return res.status(400).json({
        ok: false,
        msg: 'the user dont exist',
        user: null
    })
});

module.exports = router;
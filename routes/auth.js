const router = require('express').Router();
const User = require('../model/User');

router.post('/register', async (req, resp) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    })

    try {
        const savedUser = await user.save();
        resp.send(savedUser);
    } catch (error) {
        resp.status(400).send(error);
    }
})

router.post('/login')

module.exports = router;

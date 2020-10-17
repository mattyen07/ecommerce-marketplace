const express = require('express');
const User = require('../models/userModel');
const createError = require('http-errors');

const router = express.Router();

/* POST create a new user */
/**
 * BODY params:
 *  {
 *      Name: string,
 *      Email (uuid): string,
 *  }
 */
router.post('/create-user', function(req, res, next) {
    let name = req.body.name;
    let email = req.body.email;

    if (!!name || !!email) {
        next(createError(400), 'Missing name and or email!');
    }

    const user = new User({name: name, email: email});
    user.save();

    res.status(200).send('Success!');
});

module.exports = router;

const User = require('../models/userModel');
const createError = require('http-errors');

exports.createUser =  function createUser(name, email) {
    if (!!name || !!email) {
        createError(400, 'Missing name and or email!');
        return;
    }

    const user = new User({name: name, email: email});
    user.save();
}
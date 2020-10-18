const User = require('../models/userModel');
const createError = require('http-errors');

exports.createUser =  async function createUser(name, email) {
    if (name == undefined || email == undefined) {
        createError(400, 'Missing name and or email!');
        return -1;
    }

    const user = new User({name: name, email: email});
    await user.save();
    console.log(`User ${name} created`);
    return 0;
}
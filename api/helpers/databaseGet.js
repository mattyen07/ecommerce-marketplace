const Shop = require('../models/shopModel');
const User = require('../models/userModel');

exports.getShops = async function() {
    // passing an empty filter to get all shops
    const allShops = await Shop.find({}).lean().exec();
    console.log(allShops);
    return allShops;
}

exports.getUser = async function(email) {
    // passing an empty filter to get all shops
    const user = await User.findOne({email: email}).lean().exec();
    console.log(user);
    return user;
}
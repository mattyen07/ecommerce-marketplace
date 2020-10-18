const Shop = require('../models/shopModel');
const User = require('../models/userModel');

exports.getShops = async function() {
    // passing an empty filter to get all shops
    const allShops = await Shop.find({}).lean().exec();
    console.log(allShops);
    return allShops;
}

exports.getShopFromEmail = async function(email) {
    const shop = await Shop.find({email: email}).lean();
    return shop;
}

exports.getShopUUID = async function(email) {
    const shopData = await Shop.findOne({email: email}).lean().exec();
    console.log(shopData.uuid);
    return shopData.uuid;
}

exports.getUser = async function(email) {
    // passing an empty filter to get all shops
    const user = await User.findOne({email: email}).lean().exec();
    console.log(user);
    return user;
}
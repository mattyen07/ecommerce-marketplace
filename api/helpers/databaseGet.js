const Shop = require('../models/shopModel');

exports.getShops = async function() {
    // passing an empty filter to get all shops
    const allShops = await Shop.find({}).lean().exec();
    console.log(allShops);
    return allShops;
}
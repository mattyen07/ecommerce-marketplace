const User = require('../models/userModel');
const Shop = require('../models/shopModel');
const uuid = require('uuid');

exports.createUser =  async function(name, email, password, storeOwner) {
    if (name == undefined || email == undefined || password == undefined) {
        return -1;
    }
    
    if (storeOwner == undefined) storeOwner = false;

    const user = new User({name: name, email: email, password: password, storeOwner: storeOwner});
    await user.save();
    console.log(`User ${name} created`);
    return 0;
}

exports.createShop = async function(data) {
    // availability and items are optional fields
    if (data.name == undefined || data.email == undefined || data.ownerName == undefined) {
        return -1;
    }

    const shopUUID = uuid.v4();

    const shop = new Shop({
        uuid: shopUUID,
        name: data.name,
        ownerName: data.ownerName,
        email: data.email,
        items: data.items,
        availability: data.availability
    });
    await shop.save();
    console.log(`Shop ${data.name} created`);
    return 0;
}
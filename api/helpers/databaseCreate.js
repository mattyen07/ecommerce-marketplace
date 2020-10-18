const User = require('../models/userModel');
const Shop = require('../models/shopModel');

exports.createUser =  async function(name, email) {
    if (name == undefined || email == undefined) {
        return -1;
    }

    const user = new User({name: name, email: email});
    await user.save();
    console.log(`User ${name} created`);
    return 0;
}

exports.createShop = async function(data) {
    // availability and items are optional fields
    if (data.name == undefined || data.email == undefined || data.ownerName == undefined) {
        return -1;
    }

    const shop = new Shop({
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
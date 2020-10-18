const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
    uuid: String,
    name: String,
    ownerName: String,
    email: String,
    address: String,
    phone: String,
    items: [{
        name: String,
        price: Number,
    }],
    availability: {
        monday: {
            from: String,
            to: String
        },
        tuesday: {
            from: String,
            to: String
        },
        wednesday: {
            from: String,
            to: String
        },
        thursday: {
            from: String,
            to: String
        },
        friday: {
            from: String,
            to: String
        },
        saturday: {
            from: String,
            to: String
        },
        sunday: {
            from: String,
            to: String
        }
    }
});

shopSchema.methods.getName = function() {
    return this.name;
}

shopSchema.methods.getOwnerName = function() {
    return this.ownerName;
}

shopSchema.methods.getEmail = function() {
    return this.email;
}

shopSchema.methods.getItems = function() {
    return this.items;
}

module.exports = mongoose.model('Shop', shopSchema);
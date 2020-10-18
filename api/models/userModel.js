const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    // this is what happens when we have only a few hours to finish our project and no time to implement proper authorization
    password: String,
    storeOwner: Boolean
});

userSchema.methods.getName = function() {
    return this.name;
}

userSchema.methods.getEmail = function() {
    return this.email;
}

module.exports = mongoose.model('User', userSchema);
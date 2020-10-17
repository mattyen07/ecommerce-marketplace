const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String
});

userSchema.methods.getName = function() {
    return this.name;
}

userSchema.methods.getEmail = function() {
    return this.email;
}

module.exports = mongoose.model('User', userSchema);
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var SALT_FACTOR = 10;

var userSchema = mongoose.Schema({
    // TODO: Add a user Schema
});

// TODO: Add the code for Bcrypt

var User = mongoose.model('User', userSchema);

module.exports = User;

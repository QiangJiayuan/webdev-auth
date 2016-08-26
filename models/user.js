var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var SALT_FACTOR = 10;

var userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
	displayName: String,
	bio: String
}, { collections: 'authUsers' } );

// TODO: Add the code for Bcrypt

var User = mongoose.model('User', userSchema);

module.exports = User;

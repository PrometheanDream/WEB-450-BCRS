const mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var userCreateSchema = new mongoose.Schema({
    userId: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    emailAddress: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

// salts and hashes the password input from the user, and stores in the setPassword function.
userCreateSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  };

//checks the password by encrypting the salt and password and checking against stored hash.
  userCreateSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
  };

// generates the JSON web token, passing the information in the token and hasing
  userCreateSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      email: this.email,
      name: this.name,
      exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
  };

//const userCreate = module.exports = mongoose.model('usercreate', userCreateSchema);

module.exports = mongoose.model('User', userCreateSchema);
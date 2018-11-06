const mongoose = require('mongoose');

var userCreateSchema = new mongoose.Schema({
    userId: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    emailAddress: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    hash: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

//const userCreate = module.exports = mongoose.model('usercreate', userCreateSchema);

module.exports = mongoose.model('Users', userCreateSchema);
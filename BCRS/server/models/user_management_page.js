var mongoose = require('mongoose');

var userManagementSchema = new mongoose.Schema({
    id: Number,
    userId: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    address: String, 
    emailAddress: String,
    userName: String,
    userPassword: String
},
    { collection: 'Users'});

const userManagement = module.exports = mongoose.model('usermanagement', userManagementSchema);

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    userManagement.findById(query, callback);
}

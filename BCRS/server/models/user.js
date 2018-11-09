const mongoose = require('mongoose')
const moment = require('moment')

var userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true, dropDups: true },
  password: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  address: { type: String, required: true },
  create_date: { type: String, default: moment.utc().toDate().toUTCString() }
})

module.exports = mongoose.model('User', userSchema)


// user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
  user.save(callback);
}

module.exports.getById = (id, callback) => {
  var query = {_id: id};
  User.findById(query, callback);
}


module.exports.getOne = (e, callback) => {
  var query = {email: e};
  User.findOne(query, callback);
}

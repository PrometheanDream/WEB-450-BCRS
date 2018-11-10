const mongoose = require('mongoose')
const moment = require('moment')

var userSchema = new mongoose.Schema({
  email: { type: String, unique: true, dropDups: true },
  password: { type: String },
  first_name: { type: String },
  last_name: { type: String },
  address: { type: String },
  answer1: { type: String},
  answer2: { type: String},
  answer3: { type: String},
  answer4: { type: String}, 
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

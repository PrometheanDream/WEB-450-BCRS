
const mongoose = require('mongoose')
const moment = require('moment')

var serviceSchema = new mongoose.Schema({
  password_reset: { type: Boolean, default: false},
  spyware_removal: { type: Boolean, default: false},
  ramUpgrade: { type: Boolean, default: false},
  software_install: { type: Boolean, default: false},
  tuneUp: { type: Boolean, default: false},
  keyboardClean: { type: Boolean, default: false},
  diskClean: { type: Boolean, default: false},
  order_total: { type: Number },
  total: {type: Number}, 
  create_date: { type: String, default: moment.utc().toDate().toUTCString() }
})

module.exports = mongoose.model('service', serviceSchema)

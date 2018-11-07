const mongoose = require('mongoose')
const moment = require('moment')

var securityQuestionnaireSchema = new mongoose.Schema({
  answer1: { type: String, unique: true},
  answer2: { type: String, unique: true},
  answer3: { type: String, unique: true},
  answer4: { type: String, unique: true}, 
  create_date: { type: String, default: moment.utc().toDate().toUTCString() }
})

module.exports = mongoose.model('SecurityQuestionnaire', securityQuestionnaireSchema)

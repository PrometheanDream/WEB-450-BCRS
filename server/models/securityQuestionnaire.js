const mongoose = require('mongoose')
const moment = require('moment')

var securityQuestionnaireSchema = new mongoose.Schema({
  answer1: { type: String},
  answer2: { type: String},
  answer3: { type: String},
  answer4: { type: String}, 
  create_date: { type: String, default: moment.utc().toDate().toUTCString() }
})

module.exports = mongoose.model('SecurityQuestionnaire', securityQuestionnaireSchema)

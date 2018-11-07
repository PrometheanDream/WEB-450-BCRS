const express = require('express')
const router = express.Router()
const SecurityQuestionnaire = require('../models/securityQuestionnaire')

/*
  GET - localhost:3000/api/securityQuestionnaire
  GET - localhost:3000/api/securityQuestionnaire/1
  PUT localhost:3000/api/securityQuestionnaire/1
  DELETE localhost:3000/api/securityQuestionnaire/1
  POST localhost:3000/api/securityQuestionnaire
*/


// GET
router.get('/', function(req, res, next) {
  SecurityQuestionnaire.find({}, function( err, questionnaires) {
    if (err) return next(err)
    res.json(questionnaires)
  })
})

// GET by ID
router.get('/:id', function(req, res, next) {

  let id = req.params.id

  SecurityQuestionnaire.findOne({'_id': id }, function(err, questionnaire) {
    if (err) return next(err)
    res.json(questionnaire)
  })
})

// POST
router.post('/', function(req, res, next) {

  var newSecurityQuestionnaire = new SecurityQuestionnaire ({
    answer1: req.body.answer1,
    answer2: req.body.answer2,
    answer3: req.body.answer3,
    answer4: req.body.answer4
  })

  SecurityQuestionnaire.create(newSecurityQuestionnaire, function(err, securityQuestionnaire) {
    if (err) next(err)
    res.json(securityQuestionnaire)
  })
})

// PUT
router.put('/:id', function(req, res, next) {

  // get the id from the param
  let id = req.params.id

  // find the questionnaire in the database by the auto-generated id
  SecurityQuestionnaire.findOne({'_id': id}, function(err, questionnaire) {

    // update the found record's fields
    questionnaire.set({
      answer1: req.body.answer1,
      answer2: req.body.answer2,
      answer3: req.body.answer3,
      answer4: req.body.answer4
    })

    // save the updated record
    questionnaire.save(function( err, questionnaire) {
      if (err) return next(err)

      // return the updated record
      res.json(questionnaire)
    })

  })
})


// DELETE
router.delete('/:id', function(req, res, next) {

  let id = req.params.id

  SecurityQuestionnaire.deleteOne({'_id': id}, function(err, questionnaire) {
    if (err) return next(err)

    res.json(questionnaire)
  })

})

module.exports = router

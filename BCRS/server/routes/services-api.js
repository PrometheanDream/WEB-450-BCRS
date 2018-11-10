const express = require('express')
const router = express.Router()
let config = require('../helpers/config')
let Service = require('../models/service')


/**
 * localhost:3000/api/services
 */

// GET
//router.get('/', utils.checkToken, function(req, res, next) {
router.get('/', function(req, res, next) {
  Service.find({}, function( err, services) {
    if (err) return next(err)
    res.json(services)
  })
})

// GET by ID
//router.get('/:id', utils.checkToken, function(req, res, next) {
router.get('/:id', function(req, res, next) {

  let id = req.params.id

  Service.findOne({'_id': id }, function(err, service) {
    if (err) return next(err)
    res.json(service)
  })
})





 //router.post('/', utils.checkToken, function(req, res, next) {
router.post('/', function(req, res, next) {

    var newService = new Service ({
      password_reset: req.body.password_reset,
      spyware_removal: req.body.spyware_removal,
      ramUpgrade: req.body.ramUpgrade,
      software_install: req.body.software_install,
      tuneUp: req.body.tuneUp,
      keyboardClean: req.body.keyboardClean,
      diskClean: req.body.diskClean
    })
  
    Service.create(newService, function(err, service) {
      if (err) next(err)
      res.json(service)
    })
  })

  module.exports = router
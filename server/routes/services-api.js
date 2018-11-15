const express = require('express')
const router = express.Router()
let config = require('../helpers/config')
let Service = require('../models/service')
const utils = require('../helpers/check-token')


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

//Combines order_total values from documents
router.get('/aggregate', function(req, res, next) {

    Service.aggregate([
        {$group: {_id: null, 
         total : {$sum : '$order_total'},
         passwordCount : {$sum: {$cond: [{$eq:["$password_reset", true]}, 1, 0 ]} },
         spyCount : {$sum: {$cond: [{$eq:["$spyware_removal", true]}, 1, 0 ]} },
         ramCount : {$sum: {$cond: [{$eq:["$ramUpgrade", true]}, 1, 0 ]} },
         softwareCount : {$sum: {$cond: [{$eq:["$software_install", true]}, 1, 0 ]} },
         tuneCount : {$sum: {$cond: [{$eq:["$tuneUp", true]}, 1, 0 ]} },
         keyboardCount : {$sum: {$cond: [{$eq:["$keyboardClean", true]}, 1, 0 ]} },
         diskCount : {$sum: {$cond: [{$eq:["$diskClean", true]}, 1, 0 ]} },
        } 
    }, {$sort: { total: -1 } }
       
           ]).exec(function(err, service) {
                if (err) return next(err)
                    res.json(service)
   
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
      diskClean: req.body.diskClean,
      order_total: req.body.order_total, 
      
    })
  
    Service.create(newService, function(err, service) {
      if (err) next(err)
      res.json(service)
    })
  })

  module.exports = router
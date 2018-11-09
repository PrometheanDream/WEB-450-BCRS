const express = require('express')
const router = express.Router()
const User = require('../models/user')
const utils = require('../helpers/check-token')


/*
  GET - localhost:3000/api/user
  GET - localhost:3000/api/user/1
  PUT localhost:3000/api/user/1
  DELETE localhost:3000/api/user/1
  POST localhost:3000/api/user
*/


// GET
router.get('/', utils.checkToken, function(req, res, next) {
  User.find({}, function( err, users) {
    if (err) return next(err)
    res.json(users)
  })
})

// GET by ID
router.get('/:id', utils.checkToken, function(req, res, next) {

  let id = req.params.id

  User.findOne({'_id': id }, function(err, user) {
    if (err) return next(err)
    res.json(user)
  })
})


// POST for account management
router.post('/', utils.checkToken, function(req, res, next) {

  var newUser = new User ({
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    address: req.body.address
  })

  User.create(newUser, function(err, user) {
    if (err) next(err)
    res.json(user)
  })
})


// PUT
router.put('/:id', utils.checkToken, function(req, res, next) {

  // get the id from the param
  let id = req.params.id

  // find the user in the database by the auto-generated id
  User.findOne({'_id': id}, function(err, user) {

    // update the found record's fields
    user.set({
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address
    })

    // save the updated record
    user.save(function( err, user) {
      if (err) return next(err)

      // return the updated record
      res.json(user)
    })

  })
})


// DELETE
router.delete('/:id', utils.checkToken, function(req, res, next) {

  let id = req.params.id

  User.deleteOne({'_id': id}, function(err, user) {
    if (err) return next(err)

    res.json(user)
  })

})


module.exports = router

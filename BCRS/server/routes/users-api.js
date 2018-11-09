const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

/*
  GET - localhost:3000/api/user
  GET - localhost:3000/api/user/1
  PUT localhost:3000/api/user/1
  DELETE localhost:3000/api/user/1
  POST localhost:3000/api/user
*/


// GET
router.get('/', function(req, res, next) {
  User.find({}, function( err, users) {
    if (err) return next(err)
    res.json(users)
  })
})

// GET by ID
router.get('/:id', function(req, res, next) {

  let id = req.params.id

  User.findOne({'_id': id }, function(err, user) {
    if (err) return next(err)
    res.json(user)
  })
})

// Verify token on GET
exports.user_token = function(req, res) {
  User.getById(req.userId, function(err, user) {
      if (err) return res.status(500).send('There was a problem finding the user.');

      if (!user) return res.status(404).send('No user found.');

      res.status(200).send(user);
  });
};

// POST for account management
router.post('/', function(req, res, next) {

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

// Register a new user on POST
exports.user_register = function(req, res) {

  var hashedPassword = bcrypt.hashSync(req.body.password, 8);

  var newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address
  });

  User.add(newUser, (err, user) => {
      if (err)
          return res.status(500).send('There was a problem registering the user.');

      var token = jwt.sign({ id: user._id}, config.web.secret, {
          expiresIn: 86400 // 24 hours
      });

      res.status(200).send({ auth: true, token: token });
  });
};

// Login as an existing user in on POST
exports.user_login = function(req, res) {

  User.getOne(req.body.email, function(err, user) {
      if (err) return res.status(500).send('Error on server.');
      if (!user) return res.status(404).send('No user found.');

      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null});

      var token = jwt.sign({ id: user._id}, config.web.secret, {
          expiresIn: 86400 // expires in 24 hours
      });

      res.status(200).send( {auth: true, token: token });
  })
};

// PUT
router.put('/:id', function(req, res, next) {

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
router.delete('/:id', function(req, res, next) {

  let id = req.params.id

  User.deleteOne({'_id': id}, function(err, user) {
    if (err) return next(err)

    res.json(user)
  })

})


// Logout an existing user
exports.user_logout = function(req, res) {
  res.status(200).send({ auth: false, token: null});
};

module.exports = router

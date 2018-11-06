var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userCreate = require('../models/user_model');

/* GET ALL Users */
router.get('/', function(req, res, next) {
  userCreate.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE USER BY ID */
router.get('/userId', function(req, res, next) {
  userCreate.findById(req.params.userId, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE USER */
router.post('/', function(req, res, next) {
  userCreate.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE USER */
router.put('/userId', function(req, res, next) {
  userCreate.findByIdAndUpdate(req.params.userId, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE USER */
router.delete('/userId', function(req, res, next) {
  userCreate.findByIdAndRemove(req.params.userId, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
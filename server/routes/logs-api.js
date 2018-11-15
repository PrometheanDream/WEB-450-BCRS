const express = require('express')
const router = express.Router()
const utils = require('../helpers/check-token')
var path = require('path');


router.get('/logs', function(req, res, next) {
    res.sendFile('access.log', { root: path.join(__dirname, '../../log')}, function( err, logs) {
        if (err) return next(err)
        res.json(logs)
    })
})


module.exports = router
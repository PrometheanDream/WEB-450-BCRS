var express = require('express');
var router = express.Router();

var userManagementPageController = require('../controllers/userManagementPageController');

router.get('/user-management', userManagementPageController.findAllUsers);

module.exports = router;
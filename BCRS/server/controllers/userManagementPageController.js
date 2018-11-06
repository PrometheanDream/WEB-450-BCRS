var userManagement = require('../models/user_management_page');

exports.findAllUsers = function(req, res, next) {
  userManagement.getById(req.params.id, function (err, users) {
    if (err) return next(err);
    console.log(users);
    res.json(users);
  })
};


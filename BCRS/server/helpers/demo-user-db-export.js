const config = require('config.json'); // requires the connection string and the secret key for encryption
const mongoose = require('mongoose');
mongoose.connect(config.connectionString);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('./models/user_model') //requires the user.model.js
};
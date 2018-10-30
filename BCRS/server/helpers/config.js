let config = {};

/**
 * Localhost web server configurations
 */
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.secret = 'topsecret';


/**
 * Development database configurations
 *
 */
config.database = {};
config.database.username = 'williambcrs';
config.database.password = '1qaz2wsx!QAZ@WSX';
config.database.port = '41043';
config.database.url = 'ds141043.mlab.com';
config.database.name = 'bcrs';


module.exports = config;

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var settings = require('./config/settings');

var app = express();
app.use(bodyParser.json());

/**
 * CORS: https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
 */ 
var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
    next();
};
app.use(allowCrossDomain);

/**
 * Pass our router to the route module to connect all of our endpoints.
 */
require('./services/routes')(app, router);

/**
 * Serving /public and and runs the server
 */
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
console.log("Express server running on " + port);
app.listen(process.env.PORT || port);
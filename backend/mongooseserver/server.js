var express     = require('express'),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    settings    = require('./config/settings');

var app = express();
var router = express.Router();

var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
    next();
};
app.use(allowCrossDomain);

mongoose.connect(settings.url);
mongoose.Promise = require('bluebird');

require('./models')(mongoose);
require('./services/routing')(app, router, settings);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(settings.port);
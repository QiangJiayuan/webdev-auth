var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');
var setUpPassport = require('./setuppassport');
var routes = require('./routes');
var port = 8080;

var app = express();

// TODO: Add your mongolab uri
var uri = 'mongodb://' + process.env.dhs-16y1j23 + ":" + process.env.password + "@ds145395.mlab.com:45395/dhs-webdev";

mongoose.Promise = global.Promise;

// TODO: Connect to mongodb using mongoose URI
mongoose.connect(uri);

// Search the mongoose documentation for the syntax!

setUpPassport();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// TODO: Get a random hash e.g. 'd1761ab3fdf2ae223438738dd0891503' 
// and put it into 'secret'
app.use(session({
    secret: 'd7b49f975b87ebf1cec80c4e109a8513',
    resave: true, 
    saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.listen(process.env.PORT || port, function() {
    console.log('Server started on port: ' + port);
});
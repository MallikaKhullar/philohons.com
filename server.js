var express = require('express'),
    app = express(),
    port = 8081,
    database = require('./config/database'), // load the database config    
    mongoose = require('mongoose'), // mongoose for mongodb
    passport = require('passport'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    router = require('./app/routes/index'),
    session = require('express-session'),
    helmet = require('helmet');

app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

//use helmet for web protection
app.use(helmet());

//view engine is EJS
app.set('view engine', 'ejs');

//connect to the local database
mongoose.connect(database.localUrl);

// static files @ public folder
app.use(express.static(__dirname + '/public'));

require('./app/routes/index')(app);

// Listen to port 8081
app.listen(port, function() {
    console.log('http://localhost:8081/');
});
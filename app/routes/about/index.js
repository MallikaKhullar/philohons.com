var express = require('express');
var router = express.Router();
var Utils = require('../../utils');
var deferred = require('./../../utils/deferred');
var fn = require('./../../utils/functions');
var moment = require('moment');

router.get('/', function(req, res) {
    res.render("about-us.ejs");
});


module.exports = router;
var express = require('express');
var router = express.Router();
var Utils = require('../../utils');
var deferred = require('./../../utils/deferred');
var fn = require('./../../utils/functions');
var moment = require('moment');
var topicController = require('../../controllers/topics');

router.get('/', function(req, res) {
    topicController.getAllTopics().pipe(function(topics) {
        res.render("about-us.ejs", { topics });
    });
});


module.exports = router;
var express = require('express');
var router = express.Router();
var Utils = require('../../utils');
var deferred = require('./../../utils/deferred');
var fn = require('./../../utils/functions');
var moment = require('moment');
var topicController = require('../../controllers/topics');
var blogController = require('../../controllers/blogs');

router.get('/', function(req, res) {
    var def = {
        topics: topicController.getAllTopics(),
        blogs: blogController.getBlogOverviews({})
    };

    deferred.combine(def).pipe(function(data) {
        console.log("data", data);
        res.render("about-us.ejs", { topics: data.topics, blogs: data.blogs });
    });
});


module.exports = router;
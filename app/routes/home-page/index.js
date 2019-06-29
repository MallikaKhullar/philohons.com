var express = require('express');
var router = express.Router();
var RouteHandler = require('../../handlers/route_handler');
var deferred = require('./../../utils/deferred');
var fn = require('./../../utils/functions');
var Utils = require('../../utils');
var topicController = require('../../controllers/topics');
var blogController = require('../../controllers/blogs');

router.get('/', function(req, res) {
    var def = {
        blogs: blogController.getBlogOverviews({})
    };

    deferred.combine(def).pipe(function(data) {
        res.render("home.ejs", { "featured": data.blogs[0], "semifeatured": data.blogs.slice(1) });
    });
});




module.exports = router;
var express = require('express');
var router = express.Router();
var RouteHandler = require('../../handlers/route_handler');
var homeController = require('../../controllers/home');
var deferred = require('./../../utils/deferred');
var fn = require('./../../utils/functions');
var Utils = require('../../utils');


router.get('/', function(req, res) {
    res.render("home.ejs");

    // homeController.getBlogOverviews({ count: 12, filter: { starred: true } }).pipe(function(data) {
    //     var newdata = {
    //         blogs: data.allBlogs
    //     };
    //     res.render("home.ejs", newdata);
    // });
});




module.exports = router;
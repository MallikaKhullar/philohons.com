var express = require('express');
var router = express.Router();
var Utils = require('../../utils');
var blogController = require('../../controllers/blogs');
var deferred = require('./../../utils/deferred');
var fn = require('./../../utils/functions');
var moment = require('moment');
var headerUtils = require('../../utils/headerUtils')

router.get('/', function(req, res) {
    // var type = req.query.type || "all";
    // var page = req.query.page || 0;
    // var count = 15;
    // var offset = page * count;

    // var def1 = {
    //     userCount: userController.getAllUserCount(),
    //     donationCount: donationController.getAllDonationCount()
    // };

    // var params = {
    //     count: count,
    //     offset: offset
    // };

    // if (type !== "all") {
    //     params.filter = { "category_id": type };
    //     def1.category = blogController.getCategoryDetails({ category_id: type });
    // }

    // def1.all = blogController.getBlogOverviews(params);
    // def1.blogCount = blogController.getBlogCountForCategory(type);

    // deferred.combine(def1).pipe(function(data) {
        var newdata = {
            blogs: [],
            stats: {
                donations: "3",
                followers: 3
            },
            currentPage: 1,
            currentCategoryId: "type",
            endOfPagination: true
        };

        // if (data.category) newdata.category = data.category;

        res.render("blogs.ejs", newdata);
    // });
});


// router.get('/:year', function(req, res) {
//     var year = req.params.year;

//     var def1 = {
//         details: blogController.getBlogOverviews({ "category_id": "year" })
//             // recent: blogController.getBlogOverviews({ filter: { blog_id: { $nin: [blog_id] } }, count: 3 }),

//     };


//     // deferred.combine(def1).pipe(function(data) {
//     //     var filterSimilar = {
//     //         filter: { tag: data.details.tag, blog_id: { $nin: [blog_id] } },
//     //         count: 3,
//     //         offset: 0,
//     //         sortBy: { 'timestamp': -1 },
//     //         exclude_id: blog_id
//     //     };

//     //     data.details.timestamp = Utils.getHumanizedTimestamp(data.details.timestamp * 1000);

//     //     var newdata = {
//     //         details: data.details,
//     //         recent: data.recent,
//     //         stats: {
//     //             donations: "Rs. " + Utils.getCommaSeparatedMoney(data.donationCount),
//     //             followers: Utils.getCommaSeparatedNumber(data.userCount)
//     //         }
//     //     };

//     //     blogController.getBlogOverviews(filterSimilar).pipe(function(similar) {
//     //         newdata.similar = similar;
//     //         res.render("blog-details.ejs", newdata);
//     //     });
//     // });
// });


router.get('/:blogId', function(req, res) {
    var blog_id = req.params.blogId;

    var def1 = {
        details: blogController.getBlogDetails({ blog_id }),
        recent: blogController.getBlogOverviews({ filter: { blog_id: { $nin: [blog_id] } }, count: 3 })
    };


    deferred.combine(def1).pipe(function(data) {
   
        var filterSimilar = {
            filter: { tag: data.details.tag, blog_id: { $nin: [blog_id] } },
            count: 3,
            offset: 0,
            sortBy: { 'timestamp': -1 },
            exclude_id: blog_id
        };

        data.details.timestamp = Utils.getHumanizedTimestamp(data.details.timestamp * 1000);

        var newdata = {
            details: data.details,
            recent: data.recent,
        };

        blogController.getBlogOverviews(filterSimilar).pipe(function(similar) {
            newdata.similar = similar
            newdata.headers = headerUtils.getBlogHeaders()
            console.log(newdata)
            res.render("blog-details.ejs", newdata)
        });
    });
});

module.exports = router;
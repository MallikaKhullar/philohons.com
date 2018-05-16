const BlogCategory = require('../repo/mongo/topic.js');
const { wrap: async } = require('co');
var fn = require('./../utils/functions');
var deferred = require('./../utils/deferred.js');
var moment = require('moment');

exports.getAllTopics = function(data, cb) {
    return fn.defer(fn.bind(BlogCategory, 'getAllCategories'))().pipe(function(res) {
        return deferred.success(res);
    });
}
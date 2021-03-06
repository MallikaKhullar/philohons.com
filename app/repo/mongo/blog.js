var mongoose = require('mongoose');

var paragraphSchema = mongoose.Schema({
    image_url: String,
    image_caption: String,
    paragraph_title: String,
    paragraph_text: String,
    image_alt_text: String
}, { _id: false });


// define the schema for our user model
var blogSchema = mongoose.Schema({
    blog_id: { type: String, unique: true, required: true, index: true },
    blog_title: String,
    blog_short_desc: String,
    title_photo_url: String,
    title_photo_caption: String,
    meta_desc: String,
    featureType: {
        type: String,
        enum: [
            'featured', 'semifeatured', 'none'
        ]
    },
    type: {
        type: String,
        enum: [
            'admission', 'note'
        ]
    },
    topic_id: String,
    topic_name: String,
    author_name: String,
    author_photo_url: String,
    timestamp: { type: Number, required: true, index: true },
    paragraphs: [paragraphSchema],
    visible: Boolean,
    starred: { type: Boolean, default: false },
    tag: String
});
blogSchema.statics = {
    getAllBlogs: function(data, cb) {
        var count = data.count || 9;
        var offset = data.offset || 0;
        var sortBy = data.sortBy || "none";
        var filter = data.filter || {};
        filter.visible = true;

        this.find(filter)
            .sort(sortBy !== 'none' ? sortBy : { 'timestamp': -1 })
            .skip(offset).limit(count)
            .lean().exec(cb);
    },

    getBlogDetails: function(data, cb) {
        this.findOne({ blog_id: data.blog_id }).lean().exec(cb);
    },

    getBlogCount: function(cb) {
        this.count({}).lean().exec(cb);
    },
    getBlogCountForCategory: function(category, cb) {
        this.find({ category_id: category }).count().lean().exec(cb);
    }
}

module.exports = mongoose.model('Blog', blogSchema);
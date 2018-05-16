var mongoose = require('mongoose');

var blogCategorySchema = mongoose.Schema({
    topic_id: { type: String, index: true },
    topic_name: String,
}, { _id: false });

blogCategorySchema.statics = {
    getAllCategories: function(cb) {
        this.find().lean().exec(cb);
    },

    getCategory: function(data, cb) {
        this.findOne({ category_id: data.category_id }).lean().exec(cb);
    }
}

module.exports = mongoose.model('Topic', blogCategorySchema);
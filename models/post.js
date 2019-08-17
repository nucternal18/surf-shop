const mongoose = require('mongoose');
const Schema = mongoose.schema;

const PostSchema = new Schema({
    title: String,
    price: String,
    description: String,
    images: [String],
    location: String,
    latitude: Number,
    longitude: Number,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});



module.exports = mongoose.model('Post', PostSchema);


/*
Post
-title-string
-price-string
-description-string
-images-string
-location-string
--latitude-number
--longitude-number
-author-object_id(ref Posts
-reviews-arrays of objects
*/
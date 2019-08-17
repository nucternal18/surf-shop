const mongoose = require('mongoose');
const Schema = mongoose.schema;

const ReviewSchema = new Schema({
    body: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});



module.exports = mongoose.model('Review', ReviewSchema);

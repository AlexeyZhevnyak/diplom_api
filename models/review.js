const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewScheme = new Schema({
    movieId: String,
    text: String,
    userId: String,
    timestamp: String,
    rating: Number,
    tags: {
        type: [String],
        default: [],
        required: false
    },
    // comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ReviewComment', required: false }],
    likes: {
        type: Number,
        required: false,
        default: 0
    },
    posterUrl: String,
    movieName: String,
    movieYear: String
});
const Review = mongoose.model("Review", reviewScheme);
module.exports = Review;
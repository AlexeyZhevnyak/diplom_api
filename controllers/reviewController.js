const Review = require("../models/review");
const {MovieComment} = require("../models/comment");
exports.addReview = (req, res) => {
    let review = new Review({
        movieId: req.body.movieId,
        text: req.body.text,
        userId: req.body.userId,
        timestamp: String(req.body.timestamp),
        tags: req.body.tags,
        rating: req.body.rating,
        posterUrl: req.body.posterUrl,
        movieName: req.body.movieName,
        movieYear: req.body.movieYear,
    });
    review.save();
    res.send('norm norm')
}

exports.getAllReviews = async (req, res) => {
    let reviews = await Review.find({})
    res.json(reviews);
}
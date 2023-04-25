const Comment = require("../models/comment.js");

exports.addComment = (req, res) => {
    let comment = new Comment({
        movieId: req.body.movieId,
        text: req.body.text,
        userId: req.body.userId,
        timestamp: req.body.timestamp
    });
    comment.save();
    res.send('norm norm')
}

exports.getCommentsByMovieId = async (req, res) => {
    let id = req.params.id;
    let comments = await Comment.find({movieId: id})
    res.json(comments);
}
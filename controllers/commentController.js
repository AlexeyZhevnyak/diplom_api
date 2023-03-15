const Comment = require("../models/comment.js");

exports.addComment = (req, res) => {
    let comment = new Comment({
        movieId: req.movieId,
        text: req.text,
        userId: req.userId
    });
    Comment.collection.insertOne(comment).then(e => console.log(e));
}
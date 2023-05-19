const {MovieComment} = require("../models/comment.js");
const {ObjectId} = require("mongodb");
const {User} = require("../models/user");

exports.addComment = (req, res) => {
    let comment = new MovieComment({
        movieId: req.body.movieId,
        text: req.body.text,
        email: req.body.email,
        timestamp: req.body.timestamp
    });
    comment.save();
    res.send('norm norm')
}

exports.getCommentsByMovieId = async (req, res) => {
    let id = req.params.id;
    let comments = await MovieComment.find({movieId: id})
    res.json(comments);
}

exports.incCommentCount = async (req, res) => {
    let id = req.body.commentId;
    let email = req.body.email;
    let comment = await MovieComment.findOne({_id: ObjectId(id)});
    let user = await User.findOne({email: email});
    comment.likeCount = comment.likeCount + 1;
    comment.likedUsers.push(user);
    comment.save();
    res.json(comment);
}

exports.decCommentCount = async (req, res) => {
    let id = req.body.commentId;
    let email = req.body.email;
    let comment = await MovieComment.findOne({_id: ObjectId(id)});
    let user = await User.findOne({email: email});

    comment.likeCount = comment.likeCount - 1;
    MovieComment.updateOne(
        { },
        { $pull: { likedUsers: { _id: ObjectId(user._id) } } },
        (err, result) => {
            if (err) {
                console.error(err);
                // Обработка ошибки
            } else {
                console.log(result);
                // Результат обновления, содержащий информацию о количестве измененных документов
            }
        }
    );
    comment.save();
    res.json(comment);
}
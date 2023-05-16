const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// базовая схема комментария
const commentScheme = new Schema({
    text: String,
    userId: String,
    timestamp: String,
});

// схема комментария к рецензии
const reviewCommentScheme = new Schema({
    reviewId: { type: mongoose.Schema.Types.ObjectId, ref: 'Review' },
    // добавляем дополнительное поле, ссылку на рецензию
    ...commentScheme.obj, // копируем поля из базовой схемы
});

// схема комментария к фильму
const movieCommentScheme = new Schema({
    movieId: String,
    // добавляем дополнительное поле, ссылку на фильм
    ...commentScheme.obj, // копируем поля из базовой схемы
});

const Comment = mongoose.model("Comment", commentScheme);
const ReviewComment = Comment.discriminator("ReviewComment", reviewCommentScheme);
const MovieComment = Comment.discriminator("MovieComment", movieCommentScheme);
module.exports = { ReviewComment, MovieComment };
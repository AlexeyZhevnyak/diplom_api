const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentScheme = new Schema({
    movieId: String,
    text: String,
    userId: String
});
module.exports = mongoose.model("Comment", commentScheme);
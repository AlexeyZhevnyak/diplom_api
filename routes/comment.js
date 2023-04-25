const express = require("express");
const {addComment, getCommentsByMovieId} = require("../controllers/commentController");
const {getMovieById} = require("../controllers/movieController");
const commentRoute = express.Router();

commentRoute.post("/add", addComment);
commentRoute.get("/movies/:id", getCommentsByMovieId);

module.exports = commentRoute;
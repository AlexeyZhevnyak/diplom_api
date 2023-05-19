const express = require("express");
const {addComment, getCommentsByMovieId, incCommentCount, decCommentCount} = require("../controllers/commentController");
const {getMovieById} = require("../controllers/movieController");
const checkRole = require("../middleware/checkRoleMiddleware");
const authMiddleware = require("../middleware/authMiddleware");


const commentRoute = express.Router();

commentRoute.post("/add", addComment);
commentRoute.get("/movies/:id", getCommentsByMovieId);
commentRoute.post("/increase", authMiddleware, incCommentCount);
commentRoute.post("/decrease", authMiddleware, decCommentCount);

module.exports = commentRoute;
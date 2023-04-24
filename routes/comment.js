const express = require("express");
const {addComment} = require("../controllers/commentController");
const commentRoute = express.Router();

commentRoute.post("/add", addComment);

module.exports = commentRoute;
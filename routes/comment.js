const express = require("express");
const {addComment} = require("../controllers/commentController");
const commentRoute = express.Router();

commentRoute.post("/", addComment);

module.exports = commentRoute;
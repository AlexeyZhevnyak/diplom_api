const express = require("express");
const {addReview, getAllReviews} = require("../controllers/reviewController");
const reviewRoute = express.Router();

reviewRoute.post("/add", addReview);
reviewRoute.post("/", getAllReviews);

module.exports = reviewRoute;
const express = require("express");
const movieController = require("../controllers/movieController");
const movieRouter = express.Router();

movieRouter.get("/", movieController.getAll);

module.exports = movieRouter;
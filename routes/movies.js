const express = require("express");
const movieController = require("../controllers/movieController");
const movieRouter = express.Router();

movieRouter.get("/", movieController.getAll);
movieRouter.get("/list", movieController.getMovieListItems);
movieRouter.get('/:id', movieController.getMovieById);

module.exports = movieRouter;
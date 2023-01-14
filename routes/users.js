const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/create", userController.addUser);
userRouter.get("/", userController.getUsers);

module.exports = userRouter;

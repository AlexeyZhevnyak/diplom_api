const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const userRouter = express.Router();

userRouter.get("/create", userController.addUser);
userRouter.post("/registration", userController.registration);
userRouter.post("/login", userController.login);
userRouter.get("/auth", authMiddleware, userController.check);
userRouter.get("/", userController.getUsers);

module.exports = userRouter;

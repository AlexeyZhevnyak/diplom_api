const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userScheme = new Schema({
    id: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: 'USER'
    },
});
const User = mongoose.model("User", userScheme);
module.exports = {User};
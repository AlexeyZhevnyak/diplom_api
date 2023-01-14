const User = require("../models/user.js");
const axios = require("axios");


exports.addUser = function (request, response) {
    let u = new User({name: 'fa', age: 1});
    User.collection.insertOne(u).then(e => response.json(e))
};
exports.getUsers = async (request, response) => {

};
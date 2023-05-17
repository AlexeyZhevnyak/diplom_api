const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const ApiError = require("../ApiError");
const bcrypt = require("bcrypt");

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

exports.addUser = function (request, response) {
    let u = new User({name: 'fa', age: 1});
    User.collection.insertOne(u).then(e => response.json(e))
};
exports.getUsers = async (request, response) => {

};

exports.registration = async function (request, response, next) {
    const {email, password, role} = request.body
    if (!email || !password) {
        return next(ApiError.badRequest('Некорректный email или password'))
    }
    const candidate = await User.findOne({email: email})
    if (candidate) {
        return next(ApiError.badRequest('Пользователь с таким email уже существует'))
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({email, role, password: hashPassword})
    const token = generateJwt(user.id, user.email, user.role)
    return response.json({token})
}

exports.login = async function (req, res, next) {
    const {email, password} = req.body
    const user = await User.findOne({email: email})
    if (!user) {
        return next(ApiError.internal('Пользователь не найден'))
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
        return next(ApiError.internal('Указан неверный пароль'))
    }
    const token = generateJwt(user.id, user.email, user.role)
    return res.json({token})
}

exports.check = async function (req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    return res.json({token})
}
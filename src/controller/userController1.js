const userModel = require("../models/userModel1");
const jwt = require("jsonwebtoken");

const createUser = async function (req, res) {
    let data = req.body
    let saveData = await userModel.create(data)
    console.log(req.newAtribute)
    res.send({ msg: saveData });
}

const loginUser = async function (req, res) {
    let userName = req.body.emailId
    let password = req.body.password

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user) return res.send({ status: false, msg: 'userName and Password are not correct' });

    // create the JWt tokens and send in response
    let token = await jwt.sign({ userId: user._id.toString() }, 'functionUp-uranium')
    res.send({ status: true, data: token })
}

const getUserData = async function (req, res) {
    let token = req.headers["x-auth-token"]
    if (!token) return res.send({ status: false, msg: "token must be present" })
    console.log(token);
    let decodedToken = await jwt.verify(token, 'functionUp-uranium')
    if (!decodedToken) return res.send({ status: false, msg: "token is invalide" });

    let userId = req.params.userId
    let userDetails = await userModel.findById(userId)
    if (!userDetails) return res.send({ status: false, msg: "No such file exist" })
    res.send({ status: true, data: userDetails })
}

const updateUser = async function (req, res) {
    let userId = req.params.userId
    let user = await userModel.findById(userId);
    if (!user) {
        return res.send({status:false, msg: 'no such user exists'})
    }
    let userData = req.body
    let updateUser = await userModel.findOneAndUpdate({ _id: userId }, userData)
    res.send({ status: updateUser, data: updateUser })
}



module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.getUserData = getUserData
module.exports.updateUser = updateUser

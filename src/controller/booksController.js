const BookModel1= require("../models/BookModels")

const createBook=async function( req, res){
    let data = req.body
    let savedData = await BookModel1.create(data)
    res.send({msg: savedData})
}

const getBook= async function( req, res){
    let allUsers = await BookModel1.find()
    res.send({msg: allUsers})
}

module.exports.createBook=createBook
module.exports.getBook=getBook
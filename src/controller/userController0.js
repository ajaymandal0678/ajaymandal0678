const authorModel = require("../models/AuthorModel");
const publisherModel = require("../models/PublisherModel")
const bookModel = require("../models/BookModels")

const creatAuthor = async function (req, res) {
    let author = req.body
    let newAuthor = await authorModel.create(author)
    res.send({ data: newAuthor });
}

const createPublisher = async function (req, res) {
    let publisher = req.body
    let newPublisher = await publisherModel.create(publisher)
    res.send({ data: newPublisher });
}

const createBook = async function (req, res) {
    let book = req.body
    let autherId = book.authorId
    let publisherId = book.publisherId
    if (!autherId) {
        res.send({ status: false, msg: "The autherId must be present in the book" })
    }

    let auther = await authorModel.findById(autherId)
    if (!auther) {
        return res.send({ status: false, data: "There are not a valide AuthorId" })
    }

    if (!publisherId) {
        return res.send({ status: false, msg: "The publisherId must be present in the book" })
    }
    let publisher = await publisherModel.findById(publisherId)
    if (!publisher) {
        return res.send({ status: false, data: "There are not a valide PublisherId" })
    }

    let nawBook = await bookModel.create(book)
    res.send({ data: nawBook });
}

const getBooks= async function(req, res){
    autherId=req.body
    let books= await bookModel.find().populate("authorId publisherId")
    res.send(books)
}

const updateBooks=async function(req, res){

    let book= await publisherModel.find({name:{$in:[" Penguin","  HarperCollins"]}}).select({_id:1})
    console.log('original array', book)

    let newBook= await bookModel.updateMany({publisherId:{$in:book}},{isHardCover:true})
    console.log("after Update",newBook)

    let abc= await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
    console.log(abc)
    let abcd= await bookModel.updateMany({authorId:abc}, {$inc:{price:100}})
    console.log(abcd)

    let finalPrice= await bookModel.find()
    res.send(finalPrice);
}

module.exports.creatAuthor = creatAuthor;
module.exports.createPublisher = createPublisher;
module.exports.createBook = createBook;
module.exports.getBooks=getBooks;
module.exports.updateBooks=updateBooks;
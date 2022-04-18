const AuthorModel = require("../models/AuthorModel");
const PublisherModel = require("../models/PublisherModel");
const BookModel = require("../models/BookModels");

// Problem 1
const createAuthor = async function (req, res) {
    let data1 = req.body
    let saveData1 = await AuthorModel.create(data1)
    res.send(saveData1)
}

// Problem 2
const createPublisher = async function (req, res) {
    let data2 = req.body
    let saveData2 = await PublisherModel.create(data2)
    res.send({ msg: saveData2 })
}

// Problem 3
const createBook = async function (req, res) {
    let data = req.body
    console.log(data)
    let savepublisher = await PublisherModel.find({ _id: data.publisherId }).select({ name: 1 })
    console.log(savepublisher)
    if (savepublisher.length > 0) {
        let author = await AuthorModel.find({ _id: data.authorId }).select({ authorName: 1 })
        console.log(author)
        if (author.length > 0) {
            let saveBook = await BookModel.create(data);
            res.send(saveBook);
        }
        else { res.send("author does not exist") };
    }
    else { res.send("no such publisher exist") }
}

// Problem 4
const getBookWithAuthorDetails = async function (req, res) {
    let details = req.body;
    let specieficBook = await BookModel.find(details).populate(['publisherId', 'authorId']);
    res.send(specieficBook);
}

// Problem 5a
const newProblem = async function (req, res) {
    let abc = await BookModel.updateMany({ isHardCover: false });
    console.log("abc:", abc);

    const abcd = await BookModel.updateMany({ $or: [{publisherId: "625c5c9a44ab48654d30c14e"}, {publisherId:"625c5cf744ab48654d30c154"}]},{isHardCover:true});
    console.log(abcd);
    const books = await BookModel.find()
    res.send(books);
}

// Problem 5b
const updateBookPrice= async function(req, res){
    const pqr=await AuthorModel.find({rating:{$gt:3.5}}).select({_id:1});
    const pqrs=await BookModel.updateMany({autherId: pqr},{$inc:{price:100}});
    const pqrst=await BookModel.find();
    res.send( pqrst);
}



module.exports.createAuthor = createAuthor;
module.exports.createPublisher = createPublisher;
module.exports.createBook = createBook;
module.exports.getBookWithAuthorDetails = getBookWithAuthorDetails;
module.exports.newProblem = newProblem;
module.exports.updateBookPrice=updateBookPrice;
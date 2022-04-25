const express = require('express');

const router = express.Router();
// const BooksController = require("../controllers/booksController")
const usersController0=require("../controller/userController0")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

// router.post("/createBook", BooksController.createBook)
// router.get("/getBook", BooksController.getBook)
router.post("/createAuthor", usersController0.creatAuthor)
router.post("/createPublisher",usersController0.createPublisher)
router.post("/createBook",usersController0.createBook)
router.get("/getBook", usersController0.getBooks)
router.put("/updateBook", usersController0.updateBooks);



module.exports = router;
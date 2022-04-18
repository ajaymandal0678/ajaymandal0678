const express = require('express');

const router = express.Router();
// const BooksController = require("../controllers/booksController")
const UsersController=require("../controller/UsersController")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

// router.post("/createBook", BooksController.createBook)
// router.get("/getBook", BooksController.getBook)
router.post("/createAuthor", UsersController.createAuthor)
router.post("/createPublisher", UsersController.createPublisher)
router.post("/createBook", UsersController.createBook)
router.get("/getBook", UsersController.getBookWithAuthorDetails)
router.put("/newProblem", UsersController.newProblem);
router.put("/updateBookPrice", UsersController.updateBookPrice);



module.exports = router;
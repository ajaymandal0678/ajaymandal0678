const express = require('express');


const router = express.Router();
// const usersController=require("../controller/UsersController")
// const commonMiddleModel=require("../middleware/commonMiddleware")
// const freeAppController=require("../controller/freeAppController");

const usersController=require("../controller/userController1");

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

// router.post("/create_Batches", usersController.creatBatch)
// router.post("/create_Developer", usersController.createDeveloper)
// router.get("/scholarship-developer", usersController.getScholarshipDeveloper)
// router.get("/Developers?", usersController.developers);

// freeAppUser
// router.post("/createProducts", freeAppController.createProduct);
// router.post("/createUsers", freeAppController.createUser);

router.post("/Users", usersController.createUser);
router.post("/logins", usersController.loginUser);
router.get("/users/:userId", usersController.getUserData);
router.put("/users/:userId", usersController.updateUser);


module.exports = router;
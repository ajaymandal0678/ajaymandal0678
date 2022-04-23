const productModel=require("../models/userModel");
const userModel=require("../models/userModel");

const createProduct=async function(req, res, next){
    let product=req.body
    newProduct=await productModel.create(product);
    console.log(newProduct)
    res.send(newProduct);
}

const createUser= async function(req ,res, next){
    let user =req.body
    let newUser= await userModel.create(user);
    res.send(newUser)
   
}


module.exports.createProduct=createProduct;
module.exports.createUser=createUser;

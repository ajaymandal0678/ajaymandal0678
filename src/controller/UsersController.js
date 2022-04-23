const {query}= require("express");
const batcheModel = require("../models/batches");
const developerModel = require("../models/developers");
// const commonMiddleModel=require("../middleware/commonMiddleware")

const creatBatch=async function(req,res){
    let batch=req.body
    let newBatch=await  batcheModel.create(batch);
    res.send(newBatch);
}

const createDeveloper=async function(req, res){
    let developers= req.body
    let newDeveloper= await developerModel.create(developers);
    res.send(newDeveloper);

}

const getScholarshipDeveloper= async function(req,res){
    let scholarship= req.body
    let fetch_List=await developerModel.find({gender:"female",percentage:{$gte:70}});
    res.send(fetch_List);
}


const developers=async function(req, res){
    let params=req.query
    let data=params.program
    console.log(data);
    let programId=await batcheModel.find({program:data}).select({_id:1});
    console.log(programId);
    let newData=await developerModel.find({percentage:{$gte:params.percentage}, batcheId:programId}).populate('batcheId');
    res.send(newData);
}



module.exports.creatBatch =creatBatch;
module.exports.createDeveloper = createDeveloper;
module.exports.getScholarshipDeveloper = getScholarshipDeveloper;
module.exports.developers = developers;


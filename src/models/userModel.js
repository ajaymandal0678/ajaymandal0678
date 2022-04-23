const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({

    name: String,
	balance:{
        type:Number,
        default: true
    },
	address:String,
	age: Number,
 	gender: {
         typee: String,
         enum: ["male", "female", "other"]
     }, 
	isFreeAppUser: Boolean
}, {timestamps:true});

module.exports=mongoose.model('User', userSchema);
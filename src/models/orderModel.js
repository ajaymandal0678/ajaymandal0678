const mongoose= require("mongoose");
ObjectId=mongoose.Schema.Types.ObjectId;

const orderSchema= new mongoose.Schema({

    userId: {
        type:ObjectId,
        required:true,
        ref: 'User'
    },
	productId:{
        type:ObjectId,
        required:true,
        ref: 'Product'
    },
	amount: Number,
	isFreeAppUser: true, 
	date:String

}, {timeseries:true})

module.exports=mongoose('Order', orderSchema);
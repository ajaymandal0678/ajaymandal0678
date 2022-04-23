const mongoose= require("mongoose");

const productSchema= new mongoose.Schema({
    name:String,
	category:String,
	price:{
        type:Number,
        required: true
    }
}, {timeseries:true})

module.exports=mongoose('Product', productSchema);
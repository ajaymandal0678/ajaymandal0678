const mongoose = require('mongoose');

const bookSchema= new mongoose.Schema( {
   
    
    bookName: String,
    authorId: {
        type: Object,
        required: true,
        ref:"Author"
    },
    price: Number,
    rating: Number,
    publisherId: {
        type : Object,
        required: true,
        ref: 'Publisher'
    }

},   {timestamps: true },);
module.exports= mongoose.model('Book', bookSchema)
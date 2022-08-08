const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    category: { type: 'ObjectId', ref: 'categories',required:true }
});
module.exports = mongoose.model('products',productSchema);
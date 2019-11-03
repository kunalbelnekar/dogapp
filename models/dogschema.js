const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// Database Schema
const dogSchema = new mongoose.Schema({
    name: String,
    breed : String,
    age : Number,
    img: String
})

const dog = mongoose.model('Dog', dogSchema)
module.exports = dog;
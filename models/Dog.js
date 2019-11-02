const mongoose = require ('mongoose');

// Database Schema
const dogSchema = mongoose.Schema({
    name: String,
    breed : String,
    age : Number,
    img: String
})

module.exports = mongoose.model('Dog', dogSchema)
const express = require ('express'); // Express framework
const mongoose = require ('mongoose') // Mongoose to connect to MongoDB
const dbConfig = require ('./config/dbConfig.js') // Config file for database parameters
const dog = require('./models/dogschema') // Dog database schema
const app = express(); // Initialize Express

// Database connection
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {useNewUrlParser: true,useUnifiedTopology: true}, (err, db) => {
    if (err) {
        console.log(err);
        process.exit()
    }else{
        console.log('Connected to dogapp database');
    }
});


// Get the home route
app.get('/', (req, res) => {
    dog.find({}, (err, dog) => {
        if (err){
            console.log(err);
        }else {
            res.send(dog)
        }
    })
})

app.listen('3000', () => {
    console.log('Dog app started on port 3000')
})
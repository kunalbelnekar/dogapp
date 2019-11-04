const express = require ('express'); // Express framework
const mongoose = require ('mongoose') // Mongoose to connect to MongoDB
const dbConfig = require ('./config/dbConfig.js') // Config file for database parameters
const dog = require('./models/dogschema') // Dog database schema
const app = express(); // Initialize Express
const bodyParser = require ('body-parser'); // Require body-parser to parse request body

// Body Parser 
app.use(bodyParser.urlencoded({extended: true})); // Initialize body-parser middleware

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
app.get('/dogs', (req, res) => {
    dog.find({}, (err, dog) => {
        if (err){
            console.log(err);
        }else {
            res.send(dog)
        }
    })
})


// Get a particular dog
app.get('/dogs/:id', (req, res) => {
    dog.findById(req.params.id, (err, dog) => {
        res.send(dog);
    })
})


// Create a new dog
app.post('/dogs/:id', (req, res) => {       
    let newDog = req.body;
    console.log(typeof(newDog), newDog)
    // var newDog = new dog(data);
    // console.log('Dog', newDog ,' is of type', typeOf(newDog));
    res.send('You have reached the post route')
})

// Redirect all default routes to home route
app.get('/', (req,res) => {
    res.redirect('/dogs')
})

app.listen('3000', () => {
    console.log('Dog app started on port 3000')
})
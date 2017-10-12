const express=require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


//connected to database
mongoose.connect(config.database);

mongoose.connection.on('connected', ()=>{
    console.log('Connected to database ' +config.database);
});

mongoose.connection.on('error', (err)=>{
    console.log('Database error: ' +err);
});


const app= express();

const users= require('./routes/users');

const port = 3000;

// cors middleware
app.use(cors());

//Set Static Files
app.use(express.static(path.join(__dirname,'public')));
// body parser middleware
app.use(bodyParser.json());

app.use('/users', users);

app.get('/', (req, res) =>{
    res.send('Invalid Endpoint');
});

//index routes
app.listen(port, () => {
    console.log('Server started on port ' + port);
});


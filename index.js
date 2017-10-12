const express=require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');


const index= express();

const port = 3000;

index.get('/', (req, res) =>{
    res.send('Invalid Endpoint');
});

index.listen(port, () => {
    console.log('Server started on port ' + port);
});


const express = require('express'); //import packages
const bpdyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db.js');
const router = require('../Backend/routes.js');
const bodyParser = require('body-parser');
const route = require('../Backend/routes.js');

const app = express();
app.use(bodyParser.json()); // body parser send data json format

app.use(cors({origin: 'http://localhost:4200'})); // in origin address of angular por

app.listen(3000, () => { // listen 3000 for run server port
    console.log('server is started');
})

app.use('/student', route);
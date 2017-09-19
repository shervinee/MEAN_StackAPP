const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); //the path and http seems to be for angular cli 
const http = require('http');
const app = express();

//Setting up our API (file)
const api = require('./server/routes/api');

//Parsers for reading the responds
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

//Angular DIST output folder after the ng builds
app.use(express.static(path.join(__dirname,'dist')));

//use the API at the following location 
app.use('/api',api);

//requests other than what we code in API should be handled by Angular 
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'))
});
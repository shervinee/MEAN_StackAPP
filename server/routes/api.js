/*
This file is our api which is to handle all the http methods
it connected to the data base usign mongoDB client (althought usually we use mongoose)
*/

const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID; //our ObjectID of our monogoDB databases 

//url of our local host for MongoDB 
var url = 'mongodb://localhost:27017/mean';

//setting up our connection 
const connect = (closure) => {
    MongoClient.connect(url, (err,db) => {
        if(err) return console.log(err);

        closure(db);
    });
};

//making response object handling our response 
let response = {
    status: 200,
    data: [],
    message: null
};

router.get('/users', (req,res) => {
    connect((db) => {
        db.collection('users')
        .find()
        .toArray()
        .then((users) => {
            response.data = users;
            res.json(response);
        })
        .catch((err) => {
            sendError(err, res);
        });
    });
});

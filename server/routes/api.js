/*
This file is our api which is to handle all the http methods
it connected to the data base usign mongoDB client (althought usually we use mongoose)
*/

const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID; //our ObjectID of our monogoDB databases 
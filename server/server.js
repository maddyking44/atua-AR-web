//This file fires up our server, connects it to our front-end, and directs url requests to their
//proper route functions.


const path = require('path')
const express = require('express')
const cors = require('cors')//figure out what this does.

const server = express()

server.use(cors('*')) //figure out what this does.

server.use(express.static(path.join(__dirname, '../public')))//this connects the server to the front-end, by connecting this server to the index.html file in our public folder.

server.use('/api/v1/posts', require('./routes/posts'))//we are using /v1 as our api is likely to change.

module.exports = server

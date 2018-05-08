const path = require('path')
const express = require('express')
const cors = require('cors')

const server = express()

server.use(cors('*'))

server.use(express.static(path.join(__dirname, '../public')))

//server.use('/api/path', require('./path/to/router'))

module.exports = server

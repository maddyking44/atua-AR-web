//This file determines how we query the database listed in the api, by sending specific route to
//specific db functions.

//outdoor modules
const express = require('express')
const router = express.Router()

//indoor modules
const textsDb = require('../db/texts')

//when someone visits the route of our texts api, run our getPosts function and  send a response
//back to the client which has everything returned in that function, transposed into JSON

router.use(express.json())

router.get('/', (req, res) => {
  textsDb.getTexts()
    .then(texts => {
      return res.json(texts)
    })
})

router.get('/:url', (req, res) => {
  textsDb.getTextByURL(req.params.url)
    .then(text => {
      return res.json(text)
    })
})

module.exports = router


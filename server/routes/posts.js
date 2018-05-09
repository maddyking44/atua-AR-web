//This file determines how we query the database listed in the api, by sending specific route to
//specific db functions.

//outdoor modules
const router = require('express').Router()


//indoor modules
const postsDb = require('../db/posts')

//when someone visits the route of our posts api, run our getPosts function and  send a response
//back to the client which has everything returned in that function, transposed into JSON
router.get('/', (req, res) => {
  postsDb.getPosts()
    .then(posts => res.json(posts))
})

module.exports = router


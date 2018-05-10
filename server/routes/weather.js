const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res)=> {
    request
      .get(`http://api.wunderground.com/api/38b4b1221db21c51/conditions/q/New_Zealand/Wellington.json`)
      .end((err, result)=> {iff(err){
          res.status(500).send(err.message)
          } else {
            res.json(result.body.data.children)
          }
        })
    })

module.exports = router

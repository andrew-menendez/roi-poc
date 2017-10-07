var express = require('express')
var router = express.Router()
var Models = require('../../models/')

router.get('/', function (req, res) {
  console.log('customer get route')
  // sample route
  Models.User.findOne().then((x) => {
    res.send(x.dataValues)
  })
})

router.post('/', function (req, res) {
  console.log(req.body)
  res.send('done')
})

module.exports = router

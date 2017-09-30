var express = require('express')
var router = express.Router()
// var User = require('./../models/user-model')

router.get('/', function (req, res) {
  console.log('customer get route')
  let response = 'this is a message! We are the customers!'
  res.send(response)
})

// router.put('/:userid', function(req,res){
//   //console.log(req);
//   return User.findOne({_id:req.params.userid})
//     .then(function(_user){
//       _user.email=req.body.email
//       //console.log(_user);
//       _user.save().then(function(response){
//           res.send(201).send(response);
//       })
//     });
// });

module.exports = router

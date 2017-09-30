const router = require('express').Router()
// example put registered routes here
// router.use('/members', require('./members'));
console.log('made it to router index')
router.use('/customer', require('./customer/index.js'))

// router.use('/models', require('./models'));
// router.use('/data', require('./data'));
// router.use('/chartdata', require('./chartdata'));
// Make sure this is after all of
// the registered routes!

router.use(function (req, res) {
  res.status(404).end()
})

module.exports = router

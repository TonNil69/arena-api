var express = require('express')
var router = express.Router()

router.use(function timeLog(req, res, next) {
  next();
});

router.get('/', function (req, res) {
  res.send(req.body)
});

router.get('/about', function (req, res) {
  res.send('TestAbout')
});

module.exports = router

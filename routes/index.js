var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  var array = [1,2,3]
  res.send(array)
});

router.post('/test', function(req, res, next) {
  res.json(req.body['lol'])
});

module.exports = router;

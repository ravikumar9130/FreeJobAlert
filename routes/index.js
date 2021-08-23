var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/job', function(req, res, next) {
  res.render('jobDetails');
});

module.exports = router;

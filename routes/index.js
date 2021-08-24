var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// all india jobs
router.get('/central-jobs', function(req, res, next) {
  res.render('central-jobs');
})
router.get('/state-jobs', function(req, res, next) {
  res.render('state-jobs');
})
router.get('/bank-jobs', function(req, res, next) {
  res.render('bank-jobs');
})
router.get('/teaching-jobs', function(req, res, next) {
  res.render('teaching-jobs');
})
router.get('/engineering-jobs', function(req, res, next) {
  res.render('engineering-jobs');
})
router.get('/railway-jobs', function(req, res, next) {
  res.render('railway-jobs');
})
router.get('/police-defence-jobs', function(req, res, next) {
  res.render('police-defence-jobs');
})
router.get('/job-details', function(req, res, next) {
  res.render('job-details');
});



module.exports = router;

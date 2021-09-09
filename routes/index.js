var express = require('express');
var router = express.Router();
const{ getAllnewsDatas, getJobDetailsById,getBankData} = require("../controller/newsController")



/* GET home page. */

router.get('/', getAllnewsDatas);
// all india jobs
router.get('/central-jobs', getBankData )
// state jobs
router.get('/state-jobs', function(req, res, next) {
  res.render('state-jobs');
})
// bank jobs
router.get('/bank-jobs', function(req, res, next) {
  res.render('bank-jobs');
})
// teaching jobs
router.get('/teaching-jobs', function(req, res, next) {
  res.render('teaching-jobs');
})
// railway jobs
router.get('/railway-jobs', function(req, res, next) {
  res.render('railway-jobs');
})
// police-defence-jobs
router.get('/police-defence-jobs',function(req, res, next) {
  res.render('railway-jobs');
})
// job-details
router.get('/job-details/:id', getJobDetailsById );



module.exports = router;

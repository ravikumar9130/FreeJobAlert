var express = require('express');
var router = express.Router();
const{ getPoliceData,getTeacherData,getAllnewsDatas, getJobDetailsById,getBankData,getCentralData} = require("../controller/newsController")



/* GET home page. */

router.get('/', getAllnewsDatas);
// all india jobs
router.get('/central-jobs',getCentralData )
// state jobs
router.get('/state-jobs', function(req, res, next) {
  res.render('state-jobs');
})
// bank jobs
router.get('/bank-jobs',getBankData);

// teaching jobs
router.get('/teaching-jobs',getTeacherData)
// railway jobs
router.get('/railway-jobs', function(req, res, next) {
  res.render('railway-jobs');
})
// police-defence-jobs
router.get('/police-defence-jobs',getPoliceData)
// job-details
router.get('/job-details/:id', getJobDetailsById );



module.exports = router;

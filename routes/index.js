var express = require('express');
var router = express.Router();
const{ getPoliceData,getTeacherData,getAllnewsDatas, getJobDetailsById,getBankData,getCentralData,getStateData,getRailwayData} = require("../controller/newsController")



// Home page route
router.get('/', getAllnewsDatas);
// all india jobs route
router.get('/central-jobs',getCentralData )
// state jobs route
router.get('/state-jobs',getStateData)
// bank jobs route
router.get('/bank-jobs',getBankData);
// teaching jobs route
router.get('/teaching-jobs',getTeacherData)
// railway jobs route
router.get('/railway-jobs', getRailwayData)
// police-defence-jobs route
router.get('/police-defence-jobs',getPoliceData)
// job-details route
router.get('/job-details/:id', getJobDetailsById );

module.exports = router;

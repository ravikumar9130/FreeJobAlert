const data = require("../models/dataSchema")


const getAllnewsDatas = async (req, res,next) => {
    try {
        
        // const newsDatas = await data.find({});
        const latestJobs = await data.find({ Category: "latest" });
        const centralJobs = await data.find({ Category: "central Jobs" });
        const bankJobs = await data.find({ Category: "Bank Jobs" });
        res.render('index', { latestJobs, centralJobs ,bankJobs});
      
       
    }
    catch (err) {
        console.status(500).log(err);
    }
   

}


const getBankData = async (req, res,next) => {
    try {
       
        const bankJobs = await data.find({ Category: "Bank Jobs" });
        res.render('bank-jobs', { bankJobs });
       
      
       
    }
    catch (err) {
        console.status(500).log(err);
    }
   

}



// to get 
const getJobDetailsById = async (req, res) => {
    try {
        const news = await data.findById(req.params.id);
        // console.log(news);
        await res.render('job-details',{news});
    }
    catch (err) {
        console.status(500).log(err);
    }
}


const getCentralData = async (req, res,next) => {
    const centralJobs = await data.find({ Category: "central Jobs" });
     res.render('central-jobs', { centralJobs });
     
}


const getTeacherData = async (req, res,next) => {
    const TeacherJobs = await data.find({ Category: "Teacher Jobs" });
     res.render('teaching-jobs', { TeacherJobs });
     
}

const getPoliceData = async (req, res,next) => {
    const PoliceJobs = await data.find({ Category: "Police Jobs" });
     res.render('police-defence-jobs', { PoliceJobs });
     
}
const getStateData = async (req, res,next) => {
    const stateJobs = await data.find({ Category: "State jobs" });
     res.render('state-jobs', { stateJobs });
     
}
const getRailwayData = async (req, res,next) => {
    const railwayJobs = await data.find({ Category: "Railway jobs" });
     res.render('railway-jobs', { railwayJobs });
     
}

module.exports = { getAllnewsDatas, getJobDetailsById , getBankData,getCentralData,getTeacherData,getPoliceData,getStateData,getRailwayData};


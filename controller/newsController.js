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
        res.render('central-jobs', { bankJobs });
        console.log(bankJobs)
      
       
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


module.exports = { getAllnewsDatas, getJobDetailsById , getBankData};


const data = require("../models/dataSchema")


const getAllnewsDatas = async (req, res,next) => {
    try {
        
        // const newsDatas = await data.find({});
        const latestJobs = await data.find({ Category: "latest" });
        const centralJobs = await data.find({ Category: "central Jobs" });
        res.render('index', { latestJobs, centralJobs });
       
      
        
       
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


module.exports = { getAllnewsDatas, getJobDetailsById};

